"use server";

import { addReviewToTool } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";
import { addFavorite, removeFavorite } from "@/src/lib/firebase/favorites.js";

// This is a Server Action
// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
// Replace the function below
export async function handleReviewFormSubmission(data) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();
  const db = getFirestore(firebaseServerApp);

  const rating = data.get("rating");
  const text = data.get("text");
  const toolId = data.get("toolId");
  const userId = data.get("userId");

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

  await addReviewToTool(db, toolId, {
    text: text,
    rating: Number(rating),
    userId: userId,
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
