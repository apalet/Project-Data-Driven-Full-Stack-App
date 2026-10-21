// Firestore helpers for user favorites: add, remove, list, and check

import {
  collection,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/src/lib/firebase/clientApp";

// Add a tool to user's favorites
export async function addFavorite(userId, toolId) {
  if (!userId || !toolId) {
    throw new Error("User ID and Tool ID are required.");
  }

  try {
    const favoriteRef = doc(collection(db, "users", userId, "favorites"), toolId);
    await setDoc(favoriteRef, {
      toolId,
      addedAt: new Date(),
    });
  } catch (error) {
    console.error("Error adding favorite:", error);
    throw error;
  }
}

// Remove a tool from user's favorites
export async function removeFavorite(userId, toolId) {
  if (!userId || !toolId) {
    throw new Error("User ID and Tool ID are required.");
  }

  try {
    const favoriteRef = doc(collection(db, "users", userId, "favorites"), toolId);
    await deleteDoc(favoriteRef);
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
}

// Get all favorite tool IDs for a user
export async function getUserFavorites(userId) {
  if (!userId) {
    console.log("Error: Invalid userId received");
    return [];
  }

  try {
    const q = query(collection(db, "users", userId, "favorites"));
    const results = await getDocs(q);
    return results.docs.map((doc) => doc.data().toolId);
  } catch (error) {
    console.error("Error getting user favorites:", error);
    return [];
  }
}

// Check if a tool is in user's favorites
export async function isFavorite(userId, toolId) {
  if (!userId || !toolId) {
    return false;
  }

  try {
    const favoriteRef = doc(collection(db, "users", userId, "favorites"), toolId);
    const docSnap = await getDoc(favoriteRef);
    return docSnap.exists();
  } catch (error) {
    console.error("Error checking favorite status:", error);
    return false;
  }
}
