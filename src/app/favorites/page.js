// Favorites page (Server Component): fetches user's favorite tools and displays them

import { Suspense } from "react";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getUserFavorites } from "@/src/lib/firebase/favorites.js";
import FavoritesList from "@/src/components/FavoritesList.jsx";

export const dynamic = "force-dynamic";

export default async function FavoritesPage() {
  const { currentUser } = await getAuthenticatedAppForUser();

  if (!currentUser) {
    return (
      <main className="main__home">
        <article>
          <h2>Please sign in to view your favorites</h2>
        </article>
      </main>
    );
  }

  const { firebaseServerApp } = await getAuthenticatedAppForUser();
  const db = getFirestore(firebaseServerApp);

  // Get user's favorite tool IDs
  const favoriteToolIds = await getUserFavorites(currentUser.uid);

  // Fetch tool details for each favorite
  const tools = await Promise.all(
    favoriteToolIds.map(async (toolId) => {
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
    })
  );

  const validTools = tools.filter((tool) => tool !== null);

  return (
    <main className="main__home">
      <article>
        <h2>Your Favorite AI Tools</h2>
        <Suspense fallback={<p>Loading favorites...</p>}>
          <FavoritesList initialTools={validTools} userId={currentUser.uid} />
        </Suspense>
      </article>
    </main>
  );
}
