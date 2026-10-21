// Comparison page (Server Component): fetches selected tools and displays them side-by-side

import { Suspense } from "react";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import ComparisonTable from "@/src/components/ComparisonTable.jsx";

export const dynamic = "force-dynamic";

export default async function ComparePage(props) {
  const searchParams = await props.searchParams;
  const toolIds = searchParams.ids?.split(",") || [];

  if (toolIds.length < 2) {
    return (
      <main className="main__home">
        <article>
          <h2>Please select at least 2 tools to compare</h2>
          <a href="/">Back to tools</a>
        </article>
      </main>
    );
  }

  const { firebaseServerApp } = await getAuthenticatedAppForUser();
  const db = getFirestore(firebaseServerApp);

  // Fetch tool details for each selected tool
  const tools = await Promise.all(
    toolIds.map(async (toolId) => {
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
        <h2>Compare AI Tools</h2>
        <Suspense fallback={<p>Loading comparison...</p>}>
          <ComparisonTable tools={validTools} />
        </Suspense>
      </article>
    </main>
  );
}
