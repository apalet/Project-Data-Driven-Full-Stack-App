"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import renderStars from "@/src/components/Stars.jsx";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/src/lib/firebase/clientApp";
import { getUserFavorites } from "@/src/lib/firebase/favorites.js";

export default function FavoritesList({ initialTools, userId }) {
  const [tools, setTools] = useState(initialTools);

  useEffect(() => {
    // Fetch favorites periodically or use onSnapshot for real-time updates
    const fetchFavorites = async () => {
      const favoriteIds = await getUserFavorites(userId);

      // Fetch tool details for each favorite
      const toolPromises = favoriteIds.map(async (toolId) => {
        const docRef = doc(db, "tools", toolId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return {
            id: docSnap.id,
            ...docSnap.data(),
            timestamp: docSnap.data().timestamp?.toDate(),
          };
        }
        return null;
      });

      const validTools = (await Promise.all(toolPromises)).filter(
        (tool) => tool !== null
      );
      setTools(validTools);
    };

    fetchFavorites();
  }, [userId]);

  if (tools.length === 0) {
    return <p>You haven't added any tools to your favorites yet.</p>;
  }

  return (
    <ul className="restaurants">
      {tools.map((tool) => (
        <li key={tool.id}>
          <Link href={`/tool/${tool.id}`}>
            <div>
              <div className="image-cover">
                <img src={tool.photo} alt={tool.name} />
              </div>
              <div className="restaurant__details">
                <h2>{tool.name}</h2>
                <div className="restaurant__rating">
                  <ul>{renderStars(tool.avgRating)}</ul>
                  <span>({tool.numRatings})</span>
                </div>
                <div className="restaurant__meta">
                  <p>
                    {tool.categories && tool.categories.length > 0
                      ? tool.categories[0]
                      : "Uncategorized"}
                  </p>
                  <p>
                    {tool.pricingModel && tool.pricingModel.length > 0
                      ? tool.pricingModel[0]
                      : "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
