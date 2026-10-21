"use client";

// Tool detail page client wrapper: keeps live Firestore data, photo uploads,
// and the review dialog. The server page passes the first tool payload here.

// This components shows one individual tool
// It receives data from src/app/tool/[id]/page.jsx

import { React, useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic"; // Load ReviewDialog only on the client, not in the initial bundle
import { getToolSnapshotById } from "@/src/lib/firebase/firestore.js"; // Live listener for this tool doc
import { useUser } from "@/src/lib/getUser";
import ToolDetails from "@/src/components/ToolDetails.jsx"; // Presentational UI (name, photo, reviews slot)
import { updateToolImage } from "@/src/lib/firebase/storage.js";

const ReviewDialog = dynamic(() => import("@/src/components/ReviewDialog.jsx"));

export default function Tool({
  id, // Tool document id from the URL
  initialTool, // Server-fetched tool so the page can render immediately
  initialUserId,
  children, // Reviews (and anything else) rendered by the parent server page
}) {
  const [toolDetails, setToolDetails] = useState(initialTool);
  const [isOpen, setIsOpen] = useState(false); // Whether the "Add your review" dialog is showing

  // The only reason this component needs to know the user ID is to associate a review with the user, and to know whether to show the review dialog
  const userId = useUser()?.uid || initialUserId;
  const [review, setReview] = useState({
    rating: 0,
    text: "",
  });

  const onChange = (value, name) => {
    setReview({ ...review, [name]: value });
  };

  async function handleToolImage(target) {
    const image = target.files ? target.files[0] : null;
    if (!image) {
      return;
    }

    const imageURL = await updateToolImage(id, image);
    setToolDetails({ ...toolDetails, photo: imageURL });
  }

  const handleClose = () => {
    setIsOpen(false);
    setReview({ rating: 0, text: "" }); // Clear the form so the next open starts empty
  };

  useEffect(() => {
    // Subscribe to this tool; unsubscribe when the component unmounts or id changes
    return getToolSnapshotById(id, (data) => {
      setToolDetails(data);
    });
  }, [id]);

  return (
    <>
      <ToolDetails
        tool={toolDetails}
        userId={userId}
        handleToolImage={handleToolImage}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        toolId={id}
      >
        {children}
      </ToolDetails>
      {userId && (
        <Suspense fallback={<p>Loading...</p>}>
          <ReviewDialog
            isOpen={isOpen}
            handleClose={handleClose}
            review={review}
            onChange={onChange}
            userId={userId}
            id={id}
          />
        </Suspense>
      )}
    </>
  );
}
