// Server Component that loads a tool's reviews from Firestore, asks Gemini
// for a one-sentence summary, and renders it. GeminiSummarySkeleton is the
// loading placeholder while that async work finishes.

// import { googleAI, gemini } from '@genkit-ai/googleai';
import { genkit } from "genkit"; // Genkit runtime used to call the model
import { googleAI, gemini } from '@genkit-ai/googleai';
// import { vertexAI } from '@genkit-ai/vertexai';
import { getReviewsByToolId } from "@/src/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/src/lib/firebase/serverApp";
import { getFirestore } from "firebase/firestore";

// Implement the review summary component with generative AI
export async function GeminiSummary({ toolId }) {
  const { firebaseServerApp } = await getAuthenticatedAppForUser();
  const reviews = await getReviewsByToolId(
    getFirestore(firebaseServerApp),
    toolId
  );

  const reviewSeparator = "@"; // Character used in the prompt so Gemini can tell reviews apart
  const prompt = `
    Based on the following AI tool reviews,
    where each review is separated by a '${reviewSeparator}' character,
    create a one-sentence summary of what people think of this AI tool.

    Here are the reviews: ${reviews.map((review) => review.text).join(reviewSeparator)}
  `;

  try {
    if (!process.env.GEMINI_API_KEY) {
      // Make sure GEMINI_API_KEY environment variable is set:
      // https://genkit.dev/docs/get-started/
      throw new Error(
        'GEMINI_API_KEY not set. Set it with "firebase apphosting:secrets:set GEMINI_API_KEY"'
      );
    }

    // Configure a Genkit instance using option 1.
    const ai = genkit({
      plugins: [googleAI()],
      model: gemini('gemini-3.8-flash'), // or actual stable model
    });
    const { text } = await ai.generate(prompt); // One-sentence summary from Gemini

    // // Configure a Genkit instance using option 2.
    // const ai = genkit({
    //   plugins: [vertexAI({ location: 'us-central1' })],
    //   model: 'vertexai/gemini-2.5-flash', // set default model
    // });
    // const { text } = await ai.generate(prompt);

    return (
      <div className="tool__review_summary">
        <p>{text}</p>
        <p>✨ Summarized with Gemini</p>
      </div>
    );
  } catch (e) {
    console.error(e);
    return <p>Error summarizing reviews.</p>;
  }
}

// Shown by <Suspense> while GeminiSummary is still fetching reviews / generating
export function GeminiSummarySkeleton() {
  return (
    <div className="tool__review_summary">
      <p>✨ Summarizing reviews with Gemini...</p>
    </div>
  );
}
