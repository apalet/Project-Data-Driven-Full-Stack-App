"use server";

import { addReviewToTool } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";
import { addFavorite, removeFavorite } from "@/src/lib/firebase/favorites.js";

// This is a Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// Replace the function below
export async function handleReviewFormSubmission(data) {
  // const { firebaseServerApp } = await getAuthenticatedAppForUser();
  // Note: retrieve the server app and current user from the serverApp.js file
  const { firebaseServerApp, currentUser } = await getAuthenticatedAppForUser();
  const db = getFirestore(firebaseServerApp);

  await addReviewToTool(db, data.get("toolId"), {
    text: data.get("text"),
    rating: data.get("rating"),

    // This came from a hidden form field.
    //The hidden form fields embed the ID of the tool, and user, so that the Next.js
    // server action can access those values upon form submission.
    // userId: data.get("userId"),

    // Note: Instead of letting useid be passed from client in hidden form field, use the server-side
    // firebase auth result for currentUser.uid. This will be more secure since not relying on client-side code.
    userId: currentUser.uid,
  });
}

// Server Action for toggling favorites
export async function handleToggleFavorite(data) {
  const { currentUser } = await getAuthenticatedAppForUser();
  const toolId = data.get("toolId");
  const action = data.get("action"); // "add" or "remove"

  if (!currentUser) {
    throw new Error("User must be authenticated to manage favorites");
  }

  if (action === "add") {
    await addFavorite(currentUser.uid, toolId);
  } else if (action === "remove") {
    await removeFavorite(currentUser.uid, toolId);
  }
}
