// Called from Tool.jsx when the user picks a photo: upload the file to
// Firebase Storage, then save the public download URL on the tool
// document in Firestore so the UI can display it.

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage } from "@/src/lib/firebase/clientApp"; // Client-side Firebase Storage instance

import { updateToolImageReference } from "@/src/lib/firebase/firestore";

// This function updates an existing tool document in Cloud Firestore with an updated image URL.
export async function updateToolImage(toolId, image) {
  try {
    if (!toolId) {
      throw new Error("No tool ID has been provided.");
    }

    if (!image || !image.name) {
      throw new Error("A valid image has not been provided.");
    }

    const publicImageUrl = await uploadImage(toolId, image);
    await updateToolImageReference(toolId, publicImageUrl);

    return publicImageUrl; // Tool.jsx uses this to update local state immediately
  } catch (error) {
    console.error("Error processing request:", error);
  }
}

async function uploadImage(toolId, image) {
  // Path in the Storage bucket: one folder per tool, file named as uploaded
  const filePath = `images/${toolId}/${image.name}`;
  const newImageRef = ref(storage, filePath);
  await uploadBytesResumable(newImageRef, image); // Upload the File/Blob; waits until complete

  return await getDownloadURL(newImageRef); // HTTPS URL anyone can use to load the image
}
