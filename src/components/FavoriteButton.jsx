"use client";

import React, { useState, useEffect } from "react";
import { isFavorite } from "@/src/lib/firebase/favorites.js";
import { useUser } from "@/src/lib/getUser";
import { handleToggleFavorite } from "@/src/app/actions.js";

export default function FavoriteButton({ toolId }) {
  const user = useUser();
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      isFavorite(user.uid, toolId).then(setIsFavorited);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [user, toolId]);

  if (!user || loading) {
    return null;
  }

  const handleSubmit = async (formData) => {
    formData.set("toolId", toolId);
    formData.set("action", isFavorited ? "remove" : "add");
    await handleToggleFavorite(formData);
    setIsFavorited(!isFavorited);
  };

  return (
    <form action={handleSubmit}>
      <button
        type="submit"
        style={{
          background: isFavorited ? "#ff6f00" : "#ccc",
          color: "white",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        {isFavorited ? "★ Favorited" : "☆ Add to Favorites"}
      </button>
    </form>
  );
}
