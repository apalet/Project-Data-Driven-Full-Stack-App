"use server";

import { addReviewToTool } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";
import { addFavorite, removeFavorite } from "@/src/lib/firebase/favorites.js";

// This is a Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// Replace the function below
export async function handleReviewFormSubmission(data) {
  console.log("=== Review Form Submission Started ===");
  
  const { firebaseServerApp, currentUser } = await getAuthenticatedAppForUser();
  console.log("Firebase Server App initialized:", !!firebaseServerApp);
  console.log("Current User:", currentUser?.uid);
  
  const db = getFirestore(firebaseServerApp);

  const rating = data.get("rating");
  const text = data.get("text");
  const toolId = data.get("toolId");
  const userId = data.get("userId");

  console.log("Form data:", { rating, text, toolId, userId });

  if (!rating) {
    throw new Error("Please select a star rating");
  }

  if (!text) {
    throw new Error("Please write a review");
  }

  if (!toolId) {
    throw new Error("Tool ID is required");
  }

  if (!userId) {
    throw new Error("User ID is required");
  }

  console.log("Calling addReviewToTool...");
  await addReviewToTool(db, toolId, {
    text: text,
    rating: Number(rating),
    userId: userId,
  });
  console.log("Review added successfully!");
}

// Server Action for toggling favorites
export async function handleToggleFavorite(data) {
  console.log("=== Toggle Favorite Started ===");
  
  const { currentUser } = await getAuthenticatedAppForUser();
  console.log("Current User:", currentUser?.uid);
  
  const toolId = data.get("toolId");
  const action = data.get("action"); // "add" or "remove"

  console.log("Favorite data:", { toolId, action });

  if (!currentUser) {
    throw new Error("User must be authenticated to manage favorites");
  }

  if (action === "add") {
    console.log("Adding favorite...");
    await addFavorite(currentUser.uid, toolId);
    console.log("Favorite added successfully!");
  } else if (action === "remove") {
    console.log("Removing favorite...");
    await removeFavorite(currentUser.uid, toolId);
    console.log("Favorite removed successfully!");
  }
}
