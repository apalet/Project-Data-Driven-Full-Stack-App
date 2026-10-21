module.exports = [
(()=>{"use strict";return[
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
// Home page (Server Component): reads URL filters, builds a Firebase app for the
// current user, fetches matching tools from Firestore, and passes them
// into ToolListings to render.
// Client component that renders the tool cards and filter UI
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToolListings$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ToolListings.jsx [app-rsc] (ecmascript)");
// Server-side helper that queries Firestore for tools using the current filters
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$firestore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/firestore.js [app-rsc] (ecmascript)");
// Creates a Firebase app on the server using the signed-in user's credentials (if any)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$serverApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/serverApp.js [app-rsc] (ecmascript)");
// Firestore SDK function used to get a database instance from that Firebase app
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b7__as__getFirestore$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export b7 as getFirestore>");
;
;
;
;
;
const dynamic = "force-dynamic";
async function Home(props) {
    // Next.js 15+ provides searchParams as a Promise, so we await it first
    const searchParams = await props.searchParams;
    // Using seachParams which Next.js provides, allows the filtering to happen on the server-side, for example:
    // ?category=Generative%20AI&platform=Web&sort=Review
    // Get a Firebase app authenticated as the current user (or anonymous if not signed in)
    const { firebaseServerApp } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$serverApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthenticatedAppForUser"])();
    // Fetch tools from Firestore, applying category/platform/sort from the URL
    const tools = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$firestore$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTools"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b7__as__getFirestore$3e$__["getFirestore"])(firebaseServerApp), searchParams);
    return(// Page wrapper for the home listings layout
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "main__home",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToolListings$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            initialTools: tools,
            searchParams: searchParams
        }, void 0, false, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 37,
        columnNumber: 5
    }, this));
}
}),
"[project]/src/components/ToolListings.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ToolListings.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ToolListings.jsx", "default");
}),
"[project]/src/components/ToolListings.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToolListings$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ToolListings.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ToolListings$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/firebase/clientApp.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "firebaseApp",
    ()=>firebaseApp,
    "storage",
    ()=>storage
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call auth() from the server but auth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/lib/firebase/clientApp.js", "auth");
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call db() from the server but db is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/lib/firebase/clientApp.js", "db");
const firebaseApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call firebaseApp() from the server but firebaseApp is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/lib/firebase/clientApp.js", "firebaseApp");
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call storage() from the server but storage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/lib/firebase/clientApp.js", "storage");
}),
"[project]/src/lib/firebase/clientApp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/clientApp.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/firebase/firestore.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addReviewToTool",
    ()=>addReviewToTool,
    "addSampleToolsAndReviews",
    ()=>addSampleToolsAndReviews,
    "getReviewsByToolId",
    ()=>getReviewsByToolId,
    "getReviewsSnapshotByToolId",
    ()=>getReviewsSnapshotByToolId,
    "getToolById",
    ()=>getToolById,
    "getToolSnapshotById",
    ()=>getToolSnapshotById,
    "getTools",
    ()=>getTools,
    "getToolsSnapshot",
    ()=>getToolsSnapshot,
    "updateToolImageReference",
    ()=>updateToolImageReference
]);
// Firestore helpers for tools and reviews: one-time reads, live snapshots,
// URL filters/sort, sample data, and adding a review (transaction updates rating
// stats). Converts Firestore Timestamps to Dates for Client Components.
// Demo data used by "Add sample tools" in the Header
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sampleAITools$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sampleAITools.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export a_ as collection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export t as doc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export an as Timestamp>");
// Client-side Firestore instance (browser SDK)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/clientApp.js [app-rsc] (ecmascript)");
;
;
;
async function updateToolImageReference(toolId, publicImageUrl) {
    const toolRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "tools"), toolId);
    if (toolRef) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])(toolRef, {
            photo: publicImageUrl
        });
    }
}
// This code inserts a new Firestore document representing the new review.
// The code also updates the existing Firestore document that represents the tool
// with updated figures for the number of ratings and the average calculated rating.
const updateWithRating = async (transaction, docRef, newRatingDocument, review)=>{
    const tool = await transaction.get(docRef);
    const data = tool.data();
    const newNumRatings = data?.numRatings ? data.numRatings + 1 : 1;
    const newSumRating = (data?.sumRating || 0) + Number(review.rating);
    const newAverage = newSumRating / newNumRatings;
    // Keep tool aggregates in sync so listing sort-by-rating stays correct
    transaction.update(docRef, {
        numRatings: newNumRatings,
        sumRating: newSumRating,
        avgRating: newAverage,
        // add new field for useid making review to use as security check
        lastReviewUserId: review.userId
    });
    transaction.set(newRatingDocument, {
        ...review,
        timestamp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"].fromDate(new Date())
    });
};
async function addReviewToTool(db, toolId, review) {
    if (!toolId) {
        throw new Error("No tool ID has been provided.");
    }
    if (!review) {
        throw new Error("A valid review has not been provided.");
    }
    try {
        const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(db, "tools"), toolId);
        // Empty doc() here means Firestore will assign an auto-generated review id
        const newRatingDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(db, `tools/${toolId}/reviews`));
        // Both writes succeed or neither does (no half-updated ratings)
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["runTransaction"])(db, (transaction)=>updateWithRating(transaction, docRef, newRatingDocument, review));
    } catch (error) {
        console.error("There was an error adding the rating to the tool", error);
        throw error;
    }
}
// Add optional category/platform/pricing filters and a sort (rating vs review count)
function applyQueryFilters(q, { category, platform, pricingModel, sort }) {
    if (category) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("categories", "array-contains", category));
    }
    if (platform) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("supportedPlatforms", "array-contains", platform));
    }
    if (pricingModel) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("pricingModel", "array-contains", pricingModel));
    }
    if (sort === "Rating" || !sort) {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["orderBy"])("avgRating", "desc"));
    } else if (sort === "Review") {
        q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])(q, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["orderBy"])("numRatings", "desc"));
    }
    return q;
}
async function getTools(db = db, filters = {}) {
    // Start with every tool, then apply URL search filters
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(db, "tools"));
    q = applyQueryFilters(q, filters);
    const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])(q);
    return results.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data(),
            // Only plain objects can be passed to Client Components from Server Components
            timestamp: doc.data().timestamp.toDate()
        };
    });
}
function getToolsSnapshot(cb, filters = {}) {
    if (typeof cb !== "function") {
        console.log("Error: The callback parameter is not a function");
        return;
    }
    let q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "tools"));
    q = applyQueryFilters(q, filters);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onSnapshot"])(q, (querySnapshot)=>{
        const results = querySnapshot.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc.data(),
                // Only plain objects can be passed to Client Components from Server Components
                timestamp: doc.data().timestamp.toDate()
            };
        });
        cb(results);
    });
}
async function getToolById(db, toolId) {
    if (!toolId) {
        console.log("Error: Invalid ID received: ", toolId);
        return;
    }
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(db, "tools", toolId);
    const docSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])(docRef);
    return {
        ...docSnap.data(),
        timestamp: docSnap.data().timestamp.toDate()
    };
}
function getToolSnapshotById(toolId, cb) {
    if (!toolId) {
        console.log("Error: Invalid ID received: ", toolId);
        return;
    }
    if (typeof cb !== "function") {
        console.log("Error: The callback parameter is not a function");
        return;
    }
    const docRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "tools", toolId);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onSnapshot"])(docRef, (docSnap)=>{
        cb({
            ...docSnap.data(),
            timestamp: docSnap.data().timestamp.toDate()
        });
    });
}
async function getReviewsByToolId(db, toolId) {
    if (!toolId) {
        console.log("Error: Invalid toolId received: ", toolId);
        return;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(db, "tools", toolId, "reviews"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["orderBy"])("timestamp", "desc"));
    const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])(q);
    return results.docs.map((doc)=>{
        return {
            id: doc.id,
            ...doc.data(),
            // Only plain objects can be passed to Client Components from Server Components
            timestamp: doc.data().timestamp.toDate()
        };
    });
}
function getReviewsSnapshotByToolId(toolId, cb) {
    if (!toolId) {
        console.log("Error: Invalid toolId received: ", toolId);
        return;
    }
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "tools", toolId, "reviews"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["orderBy"])("timestamp", "desc"));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["onSnapshot"])(q, (querySnapshot)=>{
        const results = querySnapshot.docs.map((doc)=>{
            return {
                id: doc.id,
                ...doc.data(),
                // Only plain objects can be passed to Client Components from Server Components
                timestamp: doc.data().timestamp.toDate()
            };
        });
        cb(results);
    });
}
async function addSampleToolsAndReviews() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sampleAITools$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSampleToolsAndReviews"])();
    for (const { toolData, reviewsData } of data){
        try {
            const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "tools"), toolData);
            for (const reviewData of reviewsData){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$clientApp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "tools", docRef.id, "reviews"), reviewData);
            }
        } catch (e) {
            console.log("There was an error adding the document");
            console.error("Error adding document: ", e);
        }
    }
}
}),
"[project]/src/lib/randomData.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Random restaurant data that is added to Firestore
// After you've signed into Friendly Eats, click the dropdown
// menu in the top right corner and select "Add random data"
__turbopack_context__.s([
    "randomData",
    ()=>randomData
]);
const randomData = {
    restaurantNames: [
        "Savory Bites",
        "Gourmet Delight",
        "Wholesome Kitchen",
        "Cheesy Cravings",
        "Spice Fusion",
        "Burger Bonanza",
        "Pasta Paradise",
        "Taco Tango",
        "Sushi Sensation",
        "Pizza Pizzazz",
        "Cafe Mocha",
        "Mouthwatering BBQ",
        "Thai Temptations",
        "Sizzling Steaks",
        "Veggie Heaven",
        "Seafood Symphony",
        "Wok & Roll",
        "French Flavors",
        "Tandoori Nights",
        "Mediterranean Magic",
        "Enchilada Express",
        "Ramen Ramble",
        "Deli Delights",
        "Crepes & Co.",
        "Hot Pot Haven",
        "Tasty Tandoor",
        "Bistro Bliss",
        "Curry Corner",
        "Pancake Paradise",
        "Pita Panache",
        "Biryani Bliss",
        "Garden Grub",
        "Dim Sum Delish",
        "Cajun Craze",
        "Fondue Fantasy",
        "Bagel Bar",
        "Tapas Talk",
        "Pho Fusion",
        "Brunch Bunch",
        "Steaming Samosas",
        "Falafel Frenzy"
    ],
    restaurantCities: [
        "New York",
        "Los Angeles",
        "London",
        "Paris",
        "Tokyo",
        "Mumbai",
        "Dubai",
        "Amsterdam",
        "Seoul",
        "Singapore",
        "Istanbul"
    ],
    restaurantCategories: [
        "Italian",
        "Chinese",
        "Japanese",
        "Mexican",
        "Indian",
        "Mediterranean",
        "Caribbean",
        "Cajun",
        "German",
        "Russian",
        "Cuban",
        "Organic",
        "Tapas"
    ],
    restaurantReviews: [
        {
            text: "The food was exceptional, absolutely loved it!",
            rating: 5
        },
        {
            text: "Delicious dishes and excellent service!",
            rating: 5
        },
        {
            text: "The flavors were so rich and satisfying.",
            rating: 5
        },
        {
            text: "Great ambiance and friendly staff.",
            rating: 5
        },
        {
            text: "A delightful culinary experience!",
            rating: 5
        },
        {
            text: "Mouthwatering dishes that left me wanting more.",
            rating: 5
        },
        {
            text: "Perfectly cooked and seasoned meals.",
            rating: 5
        },
        {
            text: "Incredible presentation and top-notch taste.",
            rating: 5
        },
        {
            text: "Good food and cozy atmosphere.",
            rating: 4
        },
        {
            text: "Enjoyed the meal, would come back again.",
            rating: 4
        },
        {
            text: "Tasty options and reasonable prices.",
            rating: 4
        },
        {
            text: "Friendly staff, but the food was just okay.",
            rating: 3
        },
        {
            text: "Decent experience, but nothing extraordinary.",
            rating: 3
        },
        {
            text: "The food was average, could be better.",
            rating: 3
        },
        {
            text: "Service was slow, and the dishes were disappointing.",
            rating: 2
        },
        {
            text: "Expected more, but left unsatisfied.",
            rating: 2
        },
        {
            text: "Underwhelming taste and presentation.",
            rating: 2
        },
        {
            text: "Disappointing experience overall.",
            rating: 2
        },
        {
            text: "The food was terrible, will never go back again.",
            rating: 1
        },
        {
            text: "Worst restaurant experience I've had so far.",
            rating: 1
        },
        {
            text: "Avoid this place, the food was inedible.",
            rating: 1
        },
        {
            text: "Unpleasant service and tasteless dishes.",
            rating: 1
        },
        {
            text: "Simply outstanding! A culinary masterpiece.",
            rating: 5
        },
        {
            text: "Couldn't get enough of the amazing flavors.",
            rating: 5
        },
        {
            text: "Top-notch quality, worth every penny.",
            rating: 5
        },
        {
            text: "Highly recommended for food enthusiasts.",
            rating: 5
        },
        {
            text: "Exquisite dishes that pleased my taste buds.",
            rating: 5
        },
        {
            text: "A gem of a place, impeccable in every aspect.",
            rating: 5
        },
        {
            text: "Excellent selection of dishes on the menu.",
            rating: 5
        },
        {
            text: "A fantastic dining experience overall.",
            rating: 5
        },
        {
            text: "The atmosphere was lovely, perfect for a date night.",
            rating: 4
        },
        {
            text: "Good food, but the service could be improved.",
            rating: 4
        },
        {
            text: "Pleasantly surprised by the variety of flavors.",
            rating: 4
        },
        {
            text: "Well-prepared dishes and friendly staff.",
            rating: 4
        },
        {
            text: "Satisfying meals, suitable for a quick bite.",
            rating: 4
        },
        {
            text: "The food was okay, nothing special.",
            rating: 3
        },
        {
            text: "Service could be better, but the taste was fine.",
            rating: 3
        },
        {
            text: "An average experience, didn't leave a lasting impression.",
            rating: 3
        },
        {
            text: "Expected more value for the price.",
            rating: 2
        },
        {
            text: "Mediocre taste and lackluster presentation.",
            rating: 2
        },
        {
            text: "Regret spending money on such a disappointing meal.",
            rating: 2
        },
        {
            text: "Not up to par with my expectations.",
            rating: 2
        }
    ]
};
}),
"[project]/src/lib/sampleAITools.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSampleToolsAndReviews",
    ()=>generateSampleToolsAndReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$randomData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/randomData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-BKJf2lb8.node.mjs [app-rsc] (ecmascript) <export an as Timestamp>");
;
;
;
async function generateSampleToolsAndReviews() {
    const toolsToAdd = 13;
    const data = [];
    // Real AI tools data
    const aiTools = [
        {
            name: "ChatGPT",
            description: "Advanced AI language model for conversational AI, content creation, and problem-solving.",
            website: "https://chat.openai.com",
            categories: [
                "Generative AI",
                "Writing Assistant",
                "Research"
            ],
            keyFeatures: [
                "Natural language processing",
                "Code generation",
                "Multi-modal capabilities"
            ],
            supportedPlatforms: [
                "Web",
                "API",
                "Mobile"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free, Plus ($20/mo), Team, Enterprise",
            pricingSource: "Official website",
            alternatives: [
                "Claude",
                "Gemini",
                "Perplexity"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            additionalInfo: "GPT-4 and GPT-4o models available"
        },
        {
            name: "Claude",
            description: "AI assistant focused on being helpful, harmless, and honest with strong reasoning capabilities.",
            website: "https://claude.ai",
            categories: [
                "Generative AI",
                "Writing Assistant",
                "Research"
            ],
            keyFeatures: [
                "Large context window",
                "Document analysis",
                "Safe AI principles"
            ],
            supportedPlatforms: [
                "Web",
                "API"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free, Pro ($18/mo), Team, Enterprise",
            pricingSource: "Official website",
            alternatives: [
                "ChatGPT",
                "Gemini"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Anthropic_logo.svg/240px-Anthropic_logo.svg.png",
            additionalInfo: "Claude 3.5 Sonnet with 200K context window"
        },
        {
            name: "GitHub Copilot",
            description: "AI-powered code completion tool that helps developers write code faster and with fewer errors.",
            website: "https://github.com/features/copilot",
            categories: [
                "Code Assistant",
                "Productivity"
            ],
            keyFeatures: [
                "Code completion",
                "Multi-language support",
                "IDE integration"
            ],
            supportedPlatforms: [
                "VS Code",
                "Visual Studio",
                "JetBrains",
                "Web"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free (for students), Pro ($10/mo), Enterprise",
            pricingSource: "Official website",
            alternatives: [
                "Tabnine",
                "CodeWhisperer",
                "Cursor"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/2/29/GitHub_Copilot_logo.svg",
            additionalInfo: "Copilot X with advanced features"
        },
        {
            name: "Devin",
            description: "AI software engineer that can autonomously plan, code, and debug complex tasks.",
            website: "https://devin.ai",
            categories: [
                "Code Assistant",
                "Autonomous Agents"
            ],
            keyFeatures: [
                "Autonomous coding",
                "Planning and execution",
                "Terminal access"
            ],
            supportedPlatforms: [
                "Web"
            ],
            pricingModel: [
                "Paid"
            ],
            pricingDetails: "Contact for pricing",
            pricingSource: "Official website",
            alternatives: [
                "Cursor",
                "GitHub Copilot",
                "Replit AI"
            ],
            photo: "https://devin.ai/assets/images/devin-logo.png",
            additionalInfo: "First AI software engineer"
        },
        {
            name: "Midjourney",
            description: "AI image generation tool that creates stunning artwork from text descriptions.",
            website: "https://midjourney.com",
            categories: [
                "Image Generation",
                "Creative"
            ],
            keyFeatures: [
                "High-quality images",
                "Artistic styles",
                "Discord integration"
            ],
            supportedPlatforms: [
                "Discord",
                "Web"
            ],
            pricingModel: [
                "Paid"
            ],
            pricingDetails: "Basic ($10/mo), Standard ($30/mo), Pro ($60/mo), Mega ($120/mo)",
            pricingSource: "Official website",
            alternatives: [
                "DALL-E",
                "Stable Diffusion",
                "Adobe Firefly"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Midjourney_logo.png",
            additionalInfo: "Midjourney v6 with improved quality"
        },
        {
            name: "DALL-E",
            description: "OpenAI's image generation model that creates realistic images and art from natural language.",
            website: "https://openai.com/dall-e-3",
            categories: [
                "Image Generation",
                "Creative"
            ],
            keyFeatures: [
                "Photorealistic images",
                "Creative art",
                "API access"
            ],
            supportedPlatforms: [
                "Web",
                "API"
            ],
            pricingModel: [
                "Paid"
            ],
            pricingDetails: "Pay-per-use ($0.04-0.50 per image)",
            pricingSource: "Official website",
            alternatives: [
                "Midjourney",
                "Stable Diffusion",
                "Adobe Firefly"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/1/13/OpenAI_Logo.svg",
            additionalInfo: "DALL-E 3 with improved consistency"
        },
        {
            name: "Jasper",
            description: "AI writing assistant for marketing teams to create content faster and maintain brand voice.",
            website: "https://jasper.ai",
            categories: [
                "Writing Assistant",
                "Marketing"
            ],
            keyFeatures: [
                "Brand voice",
                "Templates",
                "SEO optimization"
            ],
            supportedPlatforms: [
                "Web",
                "Chrome Extension"
            ],
            pricingModel: [
                "Paid"
            ],
            pricingDetails: "Creator ($39/mo), Pro ($59/mo), Business",
            pricingSource: "Official website",
            alternatives: [
                "Copy.ai",
                "Anyword",
                "Writesonic"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Jasper_AI_logo.png",
            additionalInfo: "Jasper 2.0 with improved quality"
        },
        {
            name: "Notion AI",
            description: "AI-powered writing assistant integrated into Notion for brainstorming, drafting, and editing.",
            website: "https://notion.so/product/ai",
            categories: [
                "Writing Assistant",
                "Productivity"
            ],
            keyFeatures: [
                "Document integration",
                "Summarization",
                "Content expansion"
            ],
            supportedPlatforms: [
                "Web",
                "Desktop",
                "Mobile"
            ],
            pricingModel: [
                "Paid"
            ],
            pricingDetails: "Add-on ($10/mo per user)",
            pricingSource: "Official website",
            alternatives: [
                "Obsidian AI",
                "Craft AI"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
            additionalInfo: "Integrated with Notion workspace"
        },
        {
            name: "Perplexity",
            description: "AI-powered search engine that provides direct answers with cited sources.",
            website: "https://perplexity.ai",
            categories: [
                "Research",
                "Generative AI"
            ],
            keyFeatures: [
                "Real-time information",
                "Source citations",
                "Conversational search"
            ],
            supportedPlatforms: [
                "Web",
                "Mobile",
                "API"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free, Pro ($20/mo), Enterprise",
            pricingSource: "Official website",
            alternatives: [
                "You.com",
                "Bing AI",
                "Google SGE"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Perplexity_AI_logo.svg/240px-Perplexity_AI_logo.svg.png",
            additionalInfo: "Perplexity Pro with advanced features"
        },
        {
            name: "Stable Diffusion",
            description: "Open-source image generation model that can be run locally or via cloud services.",
            website: "https://stability.ai",
            categories: [
                "Image Generation",
                "Creative"
            ],
            keyFeatures: [
                "Open source",
                "Custom models",
                "Local execution"
            ],
            supportedPlatforms: [
                "Web",
                "Local",
                "API"
            ],
            pricingModel: [
                "Free",
                "Open Source",
                "Paid"
            ],
            pricingDetails: "Free (open source), DreamStudio (pay-per-use)",
            pricingSource: "Official website",
            alternatives: [
                "Midjourney",
                "DALL-E",
                "Adobe Firefly"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Stable_Diffusion_logo.png",
            additionalInfo: "SDXL and SD 3 models available"
        },
        {
            name: "Grammarly",
            description: "AI writing assistant that checks grammar, spelling, and style in real-time.",
            website: "https://grammarly.com",
            categories: [
                "Writing Assistant",
                "Productivity"
            ],
            keyFeatures: [
                "Grammar checking",
                "Style suggestions",
                "Plagiarism detection"
            ],
            supportedPlatforms: [
                "Web",
                "Desktop",
                "Mobile",
                "Browser Extension"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free, Premium ($12/mo), Business ($15/mo)",
            pricingSource: "Official website",
            alternatives: [
                "ProWritingAid",
                "Hemingway Editor",
                "LanguageTool"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Grammarly_logo.svg",
            additionalInfo: "Grammarly Go with mobile keyboard"
        },
        {
            name: "Runway",
            description: "AI-powered video editing and generation platform for creators.",
            website: "https://runwayml.com",
            categories: [
                "Video Generation",
                "Creative"
            ],
            keyFeatures: [
                "Video editing",
                "AI generation",
                "Green screen"
            ],
            supportedPlatforms: [
                "Web",
                "Desktop"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free, Standard ($12/mo), Pro ($35/mo), Unlimited ($95/mo)",
            pricingSource: "Official website",
            alternatives: [
                "Pika Labs",
                "Synthesia",
                "HeyGen"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Runway_ML_logo.svg/240px-Runway_ML_logo.svg.png",
            additionalInfo: "Gen-3 Alpha video model"
        },
        {
            name: "ElevenLabs",
            description: "AI voice synthesis platform for creating realistic text-to-speech audio.",
            website: "https://elevenlabs.io",
            categories: [
                "Audio Generation",
                "Creative"
            ],
            keyFeatures: [
                "Realistic voices",
                "Voice cloning",
                "Multiple languages"
            ],
            supportedPlatforms: [
                "Web",
                "API"
            ],
            pricingModel: [
                "Free",
                "Freemium",
                "Paid"
            ],
            pricingDetails: "Free, Starter ($5/mo), Creator ($22/mo), Pro ($99/mo)",
            pricingSource: "Official website",
            alternatives: [
                "Play.ht",
                "Murf.ai",
                "Descript"
            ],
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ElevenLabs_logo.svg/240px-ElevenLabs_logo.svg.png",
            additionalInfo: "Turbo v2.5 model for faster generation"
        }
    ];
    for(let i = 0; i < toolsToAdd; i++){
        const toolTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"].fromDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRandomDateBefore"])());
        const reviewsData = [];
        // Generate a random number of reviews for this tool
        for(let j = 0; j < (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomNumberBetween"])(0, 5); j++){
            const reviewTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$BKJf2lb8$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__an__as__Timestamp$3e$__["Timestamp"].fromDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRandomDateAfter"])(toolTimestamp.toDate()));
            const reviewData = {
                rating: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$randomData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomData"].restaurantReviews[(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomNumberBetween"])(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$randomData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomData"].restaurantReviews.length - 1)].rating,
                text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$randomData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomData"].restaurantReviews[(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomNumberBetween"])(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$randomData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomData"].restaurantReviews.length - 1)].text,
                userId: `User #${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["randomNumberBetween"])()}`,
                timestamp: reviewTimestamp
            };
            reviewsData.push(reviewData);
        }
        const avgRating = reviewsData.length ? reviewsData.reduce((accumulator, currentValue)=>accumulator + currentValue.rating, 0) / reviewsData.length : 0;
        const toolData = {
            ...aiTools[i],
            avgRating,
            numRatings: reviewsData.length,
            sumRating: reviewsData.reduce((accumulator, currentValue)=>accumulator + currentValue.rating, 0),
            lastVerifiedDate: toolTimestamp,
            lastReviewUserId: reviewsData.length > 0 ? reviewsData[reviewsData.length - 1].userId : null,
            timestamp: toolTimestamp
        };
        data.push({
            toolData,
            reviewsData
        });
    }
    return data;
}
}),
"[project]/src/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRandomDateAfter",
    ()=>getRandomDateAfter,
    "getRandomDateBefore",
    ()=>getRandomDateBefore,
    "randomNumberBetween",
    ()=>randomNumberBetween
]);
function randomNumberBetween(min = 0, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomDateBefore(startingDate = new Date()) {
    const randomNumberOfDays = randomNumberBetween(20, 80);
    const randomDate = new Date(startingDate - randomNumberOfDays * 24 * 60 * 60 * 1000);
    return randomDate;
}
function getRandomDateAfter(startingDate = new Date()) {
    const randomNumberOfDays = randomNumberBetween(1, 19);
    const randomDate = new Date(startingDate.getTime() + randomNumberOfDays * 24 * 60 * 60 * 1000);
    return randomDate;
}
}),
]})(),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1uhrpv922_f1q._.js.map