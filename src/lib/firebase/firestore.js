// Firestore helpers for tools and reviews: one-time reads, live snapshots,
// URL filters/sort, sample data, and adding a review (transaction updates rating
// stats). Converts Firestore Timestamps to Dates for Client Components.

// Demo data used by "Add sample tools" in the Header
import { generateSampleToolsAndReviews } from "@/src/lib/sampleAITools.js";

import {
  collection, // Reference to a Firestore collection (e.g. "restaurants")
  onSnapshot, // Live listener: re-runs a callback whenever matching docs change
  query, // Builds a query from a collection plus filters/sort
  getDocs, // One-time fetch of all documents matching a query
  doc, // Reference to a single document by id
  getDoc, // One-time fetch of a single document
  updateDoc, // Updates fields on an existing document
  orderBy, // Sort query results by a field
  Timestamp, // Firestore date type used when writing a new review
  runTransaction, // Runs restaurant stats + new review writes as one atomic unit
  where, // Filter query results by a field
  addDoc, // Creates a new document with an auto-generated id
  getFirestore,
} from "firebase/firestore";

// Client-side Firestore instance (browser SDK)
import { db } from "@/src/lib/firebase/clientApp";

// After an image is uploaded, save its public URL on the tool document
export async function updateToolImageReference(
  toolId,
  publicImageUrl
) {
  const toolRef = doc(collection(db, "tools"), toolId);
  if (toolRef) {
    await updateDoc(toolRef, { photo: publicImageUrl });
  }
}

// This code inserts a new Firestore document representing the new review.
// The code also updates the existing Firestore document that represents the tool
// with updated figures for the number of ratings and the average calculated rating.
const updateWithRating = async (
  transaction,
  docRef, // Tool document being rated
  newRatingDocument, // New doc in the tool's "reviews" subcollection
  review
) => {
  const tool = await transaction.get(docRef);
  const data = tool.data();
  const newNumRatings = data?.numRatings ? data.numRatings + 1 : 1;
  const newSumRating = (data?.sumRating || 0) + Number(review.rating);
  const newAverage = newSumRating / newNumRatings;

  // Keep tool aggregates in sync so listing sort-by-rating stays correct
  transaction.update(docRef, {
    numRatings: newNumRatings,
    sumRating: newSumRating,
    avgRating: newAverage,
    // add new field for useid making review to use as security check
    lastReviewUserId: review.userId,
  });

  transaction.set(newRatingDocument, {
    ...review,
    timestamp: Timestamp.fromDate(new Date()),
  });
};

// Called from the review Server Action: write the review and bump tool stats
export async function addReviewToTool(db, toolId, review) {
  if (!toolId) {
    throw new Error("No tool ID has been provided.");
  }

  if (!review) {
    throw new Error("A valid review has not been provided.");
  }

  try {
    const docRef = doc(collection(db, "tools"), toolId);
    // Empty doc() here means Firestore will assign an auto-generated review id
    const newRatingDocument = doc(
      collection(db, `tools/${toolId}/reviews`),
    );

    // Both writes succeed or neither does (no half-updated ratings)
    await runTransaction(db, (transaction) =>
      updateWithRating(transaction, docRef, newRatingDocument, review),
    );
  } catch (error) {
    console.error(
      "There was an error adding the rating to the tool",
      error,
    );
    throw error;
  }
}

// Add optional category/platform/pricing filters and a sort (rating vs review count)
function applyQueryFilters(q, { category, platform, pricingModel, sort }) {
  if (category) {
    q = query(q, where("categories", "array-contains", category));
  }
  if (platform) {
    q = query(q, where("supportedPlatforms", "array-contains", platform));
  }
  if (pricingModel) {
    q = query(q, where("pricingModel", "array-contains", pricingModel));
  }
  if (sort === "Rating" || !sort) {
    q = query(q, orderBy("avgRating", "desc"));
  } else if (sort === "Review") {
    q = query(q, orderBy("numRatings", "desc"));
  }
  return q;
}

// retrieves a list of tools at server run time
export async function getTools(db = db, filters = {}) {
  // Start with every tool, then apply URL search filters
  let q = query(collection(db, "tools"));

  q = applyQueryFilters(q, filters);
  const results = await getDocs(q);
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      // Only plain objects can be passed to Client Components from Server Components
      timestamp: doc.data().timestamp.toDate(),
    };
  });
}

// Same listing query as getTools, but live: calls cb whenever the results change
export function getToolsSnapshot(cb, filters = {}) {
  if (typeof cb !== "function") {
    console.log("Error: The callback parameter is not a function");
    return;
  }

  let q = query(collection(db, "tools"));
  q = applyQueryFilters(q, filters);

  return onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
        // Only plain objects can be passed to Client Components from Server Components
        timestamp: doc.data().timestamp.toDate(),
      };
    });

    cb(results);
  });
}

// One-time fetch of a single tool by document id
export async function getToolById(db, toolId) {
  if (!toolId) {
    console.log("Error: Invalid ID received: ", toolId);
    return;
  }
  const docRef = doc(db, "tools", toolId);
  const docSnap = await getDoc(docRef);
  return {
    ...docSnap.data(),
    timestamp: docSnap.data().timestamp.toDate(),
  };
}

// Changes made through the Firestore Database page now reflect in the web app in real time.
export function getToolSnapshotById(toolId, cb) {
  if (!toolId) {
    console.log("Error: Invalid ID received: ", toolId);
    return;
  }

  if (typeof cb !== "function") {
    console.log("Error: The callback parameter is not a function");
    return;
  }

  const docRef = doc(db, "tools", toolId);
  return onSnapshot(docRef, (docSnap) => {
    cb({
      ...docSnap.data(),
      timestamp: docSnap.data().timestamp.toDate(),
    });
  });
}

// One-time fetch of reviews stored in the tool's "reviews" subcollection
export async function getReviewsByToolId(db, toolId) {
  if (!toolId) {
    console.log("Error: Invalid toolId received: ", toolId);
    return;
  }

  const q = query(
    collection(db, "tools", toolId, "reviews"),
    orderBy("timestamp", "desc")
  );

  const results = await getDocs(q);
  return results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
      // Only plain objects can be passed to Client Components from Server Components
      timestamp: doc.data().timestamp.toDate(),
    };
  });
}

// Live version of getReviewsByToolId: calls cb whenever reviews change
export function getReviewsSnapshotByToolId(toolId, cb) {
  if (!toolId) {
    console.log("Error: Invalid toolId received: ", toolId);
    return;
  }

  const q = query(
    collection(db, "tools", toolId, "reviews"),
    orderBy("timestamp", "desc")
  );
  return onSnapshot(q, (querySnapshot) => {
    const results = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
        // Only plain objects can be passed to Client Components from Server Components
        timestamp: doc.data().timestamp.toDate(),
      };
    });
    cb(results);
  });
}

// Header helper: generate sample AI tools, then write each plus its reviews to Firestore
export async function addSampleToolsAndReviews() {
  const data = await generateSampleToolsAndReviews();
  for (const { toolData, reviewsData } of data) {
    try {
      const docRef = await addDoc(
        collection(db, "tools"),
        toolData
      );

      for (const reviewData of reviewsData) {
        await addDoc(
          collection(db, "tools", docRef.id, "reviews"),
          reviewData
        );
      }
    } catch (e) {
      console.log("There was an error adding the document");
      console.error("Error adding document: ", e);
    }
  }
}
