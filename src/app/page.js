// Home page (Server Component): reads URL filters, builds a Firebase app for the
// current user, fetches matching tools from Firestore, and passes them
// into ToolListings to render.

// Client component that renders the tool cards and filter UI
import ToolListings from "@/src/components/ToolListings.jsx";
// Server-side helper that queries Firestore for tools using the current filters
import { getTools } from "@/src/lib/firebase/firestore.js";
// Creates a Firebase app on the server using the signed-in user's credentials (if any)
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp.js";
// Firestore SDK function used to get a database instance from that Firebase app
import { getFirestore } from "firebase/firestore";

// Force next.js to treat this route as server-side rendered
// Without this line, during the build process, next.js will treat this route as static and build a static HTML file for it

export const dynamic = "force-dynamic";

// This line also forces this route to be server-side rendered
// export const revalidate = 0;

// Home is an async Server Component so it can await data before rendering
export default async function Home(props) {
  // Next.js 15+ provides searchParams as a Promise, so we await it first
  const searchParams = await props.searchParams;
  // Using seachParams which Next.js provides, allows the filtering to happen on the server-side, for example:
  // ?category=Generative%20AI&platform=Web&sort=Review
  // Get a Firebase app authenticated as the current user (or anonymous if not signed in)
  const { firebaseServerApp } = await getAuthenticatedAppForUser();
  // Fetch tools from Firestore, applying category/platform/sort from the URL
  const tools = await getTools(
    getFirestore(firebaseServerApp),
    searchParams
  );
  return (
    // Page wrapper for the home listings layout
    <main className="main__home">
      {/* Pass the server-fetched list and current filters into the listings UI */}
      <ToolListings
        initialTools={tools}
        searchParams={searchParams}
      />
    </main>
  );
}
