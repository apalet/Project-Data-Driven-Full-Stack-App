---
agent: devin-local
session: shiny-brake
created: 2026-10-21T02:04:10Z
---
# IA Discovery - Transform Restaurant Review App to AI Tool Discovery Platform

Transform the existing FriendlyEats Next.js + Firebase restaurant review app into IA Discovery, an AI tool discovery platform with preserved architecture and new data model for AI tools, categories, features, pricing, and user favorites.

## Existing Architecture Analysis

### Current Foundation (Reusable)
The project is a Google Codelabs tutorial ("Integrate Firebase with a Next.js app") with a solid foundation:

**Tech Stack:**
- Next.js 16.3.8 with App Router (`src/app/` structure)
- Firebase 12.19.0 (Auth, Firestore, Storage)
- React 19.2.1
- Genkit AI integration (for review summaries)

**Architecture Patterns (Keep These):**
- **Server Components** for data fetching (`src/app/page.js`, `src/app/restaurant/[id]/page.jsx`)
- **Server Actions** for secure form submissions (`src/app/actions.js`)
- **Server-side Firebase authentication** via `initializeServerApp` with ID token from `__session` cookie
- **Client Components** for real-time data sync using Firestore snapshots
- **Firestore transactions** for atomic updates (rating stats + new review)
- **Firebase emulators** for local development

**Security Patterns (Preserve):**
- Server-side userId verification in Server Actions (not trusting client hidden fields)
- Firestore rules with authenticated user checks
- Session cookie sync via `onIdTokenChanged` observer

**Current Data Model:**
```
restaurants collection:
  - name, category, city, price, avgRating, numRatings, sumRating, photo, timestamp, lastReviewUserId
  - ratings subcollection: rating, text, userId, timestamp
```

### What Must Change
1. **Branding:** Rename from "FriendlyEats" to "IA Discovery"
2. **Data Model:** Replace restaurant fields with AI tool fields
3. **Filters:** Update from restaurant categories/cities/prices to AI tool categories/platforms/pricing models
4. **New Features:** User favorites, comparison, enhanced tool metadata
5. **UI/UX:** Update styling and components to match AI tool discovery theme

---

## Proposed Firestore Data Model

### Tools Collection
```
tools/{toolId}
  - name: string
  - description: string
  - website: string (official website URL)
  - categories: array<string> (e.g., ["Generative AI", "Code Assistant", "Image Generation"])
  - keyFeatures: array<string> (e.g., ["Code completion", "Documentation generation"])
  - supportedPlatforms: array<string> (e.g., ["Web", "VS Code", "API"])
  - pricingModel: string (e.g., "Free", "Freemium", "Paid", "Open Source")
  - pricingSource: string (e.g., "Official website", "Verified by team")
  - alternatives: array<string> (array of tool IDs or names)
  - avgRating: number
  - numRatings: number
  - sumRating: number
  - photo: string (logo/image URL)
  - lastVerifiedDate: Timestamp
  - lastReviewUserId: string
  - timestamp: Timestamp
```

### Reviews Subcollection
```
tools/{toolId}/reviews/{reviewId}
  - rating: number (1-5)
  - text: string
  - userId: string
  - timestamp: Timestamp
```

### User Favorites Collection
```
users/{userId}/favorites/{toolId}
  - toolId: string
  - addedAt: Timestamp
```

### Categories Reference Collection (Optional)
```
categories/{categoryId}
  - name: string
  - description: string
  - icon: string (optional)
```

---

## Implementation Phases

### Phase 1: Foundation & Branding (Test: Build runs, app loads with new branding)
**Files to Modify:**
- `src/app/layout.js` - Update metadata title/description to "IA Discovery"
- `src/components/Header.jsx` - Update logo, alt text, and "Add sample restaurants" text
- `public/friendly-eats.svg` - Replace with IA Discovery logo (or rename)
- `readme.md` - Update project description and setup instructions

**New Files:**
- None

**Breaking Changes:** None (only cosmetic)

---

### Phase 2: Firestore Data Model Migration (Test: Firestore accepts new structure)
**Files to Modify:**
- `firestore.rules` - Update collection names from `restaurants` to `tools`, `ratings` to `reviews`
- `firestore.indexes.json` - Recreate indexes for new fields (categories array, pricingModel, etc.)
- `src/lib/firebase/firestore.js` - Rename functions and update queries

**Specific Changes in firestore.js:**
- Rename `getRestaurants` → `getTools`
- Rename `getRestaurantById` → `getToolById`
- Rename `addReviewToRestaurant` → `addReviewToTool`
- Rename `updateRestaurantImageReference` → `updateToolImageReference`
- Rename `addFakeRestaurantsAndReviews` → `addSampleToolsAndReviews`
- Update `applyQueryFilters` to filter by `categories` (array-contains), `pricingModel`, `supportedPlatforms`
- Update transaction logic (same pattern, just renamed collections)

**New Files:**
- `src/lib/firebase/favorites.js` - Functions for user favorites (add, remove, list)

**Breaking Changes:** Breaks all existing data (must clear Firestore or migrate)

---

### Phase 3: Sample AI Tools Data (Test: "Add sample tools" populates Firestore with AI tools)
**Files to Modify:**
- `src/lib/fakeRestaurants.js` → Rename to `src/lib/sampleAITools.js`
- Replace restaurant generation with real AI tool data (manually curated ~10-15 tools)

**Sample Tools to Include:**
- ChatGPT, Claude, GitHub Copilot, Midjourney, DALL-E, Jasper, Notion AI, Perplexity, etc.
- Real categories: "Generative AI", "Code Assistant", "Image Generation", "Writing Assistant", "Research"
- Real pricing models: "Free", "Freemium", "Paid", "Open Source"
- Real platforms: "Web", "API", "VS Code", "Browser Extension"

**New Files:** None (rename existing)

**Breaking Changes:** None (just data generation)

---

### Phase 4: Update Server Components (Test: Home page loads with tools instead of restaurants)
**Files to Modify:**
- `src/app/page.js` - Rename imports and function calls (restaurant → tool)
- `src/app/restaurant/[id]/page.jsx` → Rename to `src/app/tool/[id]/page.jsx`
  - Update route from `/restaurant/[id]` to `/tool/[id]`
  - Rename imports and variables
- `src/app/actions.js` - Rename `handleReviewFormSubmission` function and calls

**New Files:** None (rename/route change)

**Breaking Changes:** Route changes break existing links (new routes)

---

### Phase 5: Update Client Components (Test: UI renders correctly with tool data)
**Files to Modify:**
- `src/components/RestaurantListings.jsx` → Rename to `src/components/ToolListings.jsx`
  - Update component names, props, and text
  - Replace restaurant-specific UI with tool-specific UI
- `src/components/Restaurant.jsx` → Rename to `src/components/Tool.jsx`
  - Update imports and references
- `src/components/RestaurantDetails.jsx` → Rename to `src/components/ToolDetails.jsx`
  - Update metadata display (website, categories, features, platforms, pricing, last verified)
  - Add link to official website
  - Add "Add to Favorites" button
- `src/components/Filters.jsx` - Update filter options:
  - Category dropdown: AI tool categories (not restaurant categories)
  - Remove "City" filter (replace with "Platform" or remove entirely)
  - Remove "Price" filter (replace with "Pricing Model")
  - Keep "Sort" (Rating/Review count)
- `src/components/Reviews/ReviewsList.jsx` - No changes needed (generic review component)
- `src/components/Reviews/ReviewSummary.jsx` - Update prompt text for AI tools (not restaurants)
- `src/components/ReviewDialog.jsx` - No changes needed (generic review dialog)
- `src/components/Stars.jsx`, `src/components/Tag.jsx`, `src/components/RatingPicker.jsx` - No changes

**New Files:**
- `src/components/FavoriteButton.jsx` - Toggle favorite status for logged-in users
- `src/components/ComparisonModal.jsx` - Compare selected tools (MVP: simple side-by-side view)

**Breaking Changes:** Component renames require import updates

---

### Phase 6: Favorites Functionality (Test: Users can add/remove favorites, view favorites page)
**Files to Modify:**
- `src/lib/firebase/favorites.js` - Implement functions:
  - `addFavorite(db, userId, toolId)`
  - `removeFavorite(db, userId, toolId)`
  - `getUserFavorites(db, userId)`
  - `isFavorite(db, userId, toolId)`
- `src/app/actions.js` - Add Server Actions:
  - `handleToggleFavorite(formData)` - Secure server-side favorite toggle
- `firestore.rules` - Add rules for favorites collection

**New Files:**
- `src/app/favorites/page.js` - Server Component to display user's favorite tools
- `src/components/FavoritesList.jsx` - Client Component for favorites with real-time sync

**Breaking Changes:** None (new feature)

---

### Phase 7: UI/UX Updates (Test: App looks like an AI tool discovery platform)
**Files to Modify:**
- `src/app/styles.css` - Update colors, spacing, styling to match modern AI tool platform
  - Change color scheme from restaurant theme to tech/AI theme
  - Update grid layouts for tool cards
  - Style new elements (website links, platform badges, pricing tags)
- Replace public SVG icons with AI-themed icons (or keep generic icons)

**New Files:** None

**Breaking Changes:** None (cosmetic)

---

### Phase 8: Comparison Feature (MVP) (Test: Users can select 2-3 tools and compare them)
**Files to Modify:**
- `src/components/ToolListings.jsx` - Add checkbox to each tool card for comparison selection
- `src/components/Header.jsx` - Add "Compare" button when tools are selected

**New Files:**
- `src/app/compare/page.js` - Server Component for comparison page
- `src/components/ComparisonTable.jsx` - Client Component displaying side-by-side comparison

**Breaking Changes:** None (new feature)

---

## Server Components vs Server Actions vs Route Handlers

### Current Usage (Preserve This Pattern)
**Server Components:**
- `src/app/page.js` - Fetches tools server-side with auth context, passes to client
- `src/app/tool/[id]/page.jsx` - Fetches single tool + reviews server-side
- `src/components/Reviews/ReviewsList.jsx` - Server Component wrapper for reviews
- `src/components/Reviews/ReviewSummary.jsx` - Server Component for AI summary

**Server Actions:**
- `src/app/actions.js` - Handles form submissions (reviews, favorites) securely
- Called from `<form action={handleAction}>` in client components
- Access server-side auth context, never trust client userId

**Route Handlers:**
- Not currently used (App Router Server Components handle data fetching)
- Could add for API endpoints if needed (e.g., public API for tools)

### Recommendation
Keep the existing pattern:
- Use **Server Components** for all data fetching pages
- Use **Server Actions** for all form submissions (reviews, favorites)
- Use **Client Components** only for interactive UI (filters, real-time snapshots, modals)
- Use **Route Handlers** only if exposing public API endpoints (not needed for MVP)

---

## Authentication & Authorization

### Current Implementation (Preserve)
- Firebase Auth with Google sign-in only
- Session cookie (`__session`) synced via `onIdTokenChanged` in Header
- Server-side auth via `initializeServerApp` with ID token
- Firestore rules check `request.auth.uid` for writes

### For IA Discovery
**Keep as-is:**
- Google sign-in (add other providers later if needed)
- Session cookie pattern
- Server-side userId verification in Server Actions

**Add:**
- Update Firestore rules for new collections (tools, reviews, favorites)
- Ensure favorite operations require authentication
- Tool viewing: public read access (anyone can browse)
- Review submission: authenticated users only
- Favorite management: authenticated users only

**Proposed Firestore Rules:**
```javascript
match /databases/{database}/documents {
  // Tools: anyone can read, only authenticated can update (for demo)
  match /tools/{toolId} {
    allow read;
    allow update: if request.auth != null;
    
    // Reviews: anyone can read, authenticated can create
    match /reviews/{reviewId} {
      allow read;
      allow create: if request.auth != null 
                    && request.resource.data.userId == request.auth.uid;
    }
  }
  
  // User favorites: only owner can read/write
  match /users/{userId}/favorites/{toolId} {
    allow read, write: if request.auth != null && request.auth.uid == userId;
  }
}
```

---

## Data Validation

### Current Approach
- Basic validation in Server Actions (check if restaurantId, review exist)
- No schema validation (relies on Firestore schemaless nature)

### For IA Discovery
**Add Server-Side Validation:**
- In Server Actions (`actions.js`):
  - Validate rating is 1-5
  - Validate text length (min 10 chars, max 1000)
  - Validate toolId exists in Firestore
  - Validate userId matches authenticated user
- Use `zod` or simple validation functions if needed (MVP: manual checks)

**Client-Side Validation:**
- HTML5 form validation (required fields, min/max length)
- React state validation before submission

---

## Secure Firebase Credentials

### Current Implementation
- Firebase config uses automatic initialization (`initializeApp()`)
- No hardcoded credentials in code
- Uses Firebase App Hosting environment variables
- `.firebaserc` has project ID (not secret)

### For IA Discovery
**Keep this pattern:**
- Use automatic Firebase initialization
- Store Firebase config in environment (not in code)
- Never commit `firebase-config.js` or secrets
- Use Firebase emulators for local development
- Production: Firebase App Hosting or similar for environment injection

**No changes needed** - the existing pattern is secure.

---

## Potential Breaking Changes & Risks

### Breaking Changes
1. **Firestore collection rename** (`restaurants` → `tools`) - Must clear existing data or migrate
2. **Route changes** (`/restaurant/[id]` → `/tool/[id]`) - Breaks any existing bookmarks/links
3. **Component renames** - Requires updating all imports
4. **Firestore rules update** - Must deploy new rules before data migration

### Dependencies & Unknowns
1. **Genkit AI API key** - Currently uses `GEMINI_API_KEY` environment variable; may need to reconfigure for AI tool context
2. **Firebase project configuration** - `.firebaserc` shows "ia-discovery" project; verify this is the correct project
3. **Image storage** - Current restaurant images in Firebase Storage; will need to replace with AI tool logos
4. **Sample data volume** - Need 10-15 real AI tools with accurate metadata; manual curation required
5. **Categories structure** - Restaurant categories don't map to AI tool categories; need to define category taxonomy

### Mitigation Strategies
1. **Data migration:** Create a migration script or start fresh with empty Firestore
2. **Route compatibility:** Consider adding redirects or just accept new URLs
3. **Component renames:** Use find-and-replace carefully, test each component
4. **Rules deployment:** Deploy rules before data migration in Phase 2
5. **Image assets:** Use publicly available AI tool logos or placeholder icons initially
6. **Category taxonomy:** Research AI tool landscape, create ~8-10 broad categories

---

## Verification Strategy

### Phase 1 Testing
```bash
npm run build
npm run dev
# Verify: App loads, branding shows "IA Discovery"
```

### Phase 2 Testing
```bash
firebase emulators:start
# Open Firestore emulator UI
# Verify: Can create documents in 'tools' collection with new schema
# Verify: Firestore rules allow reads/authenticated writes
```

### Phase 3 Testing
```bash
# In app, click "Add sample tools"
# Verify: Tools appear in Firestore with correct fields
# Verify: Reviews subcollection populated
```

### Phase 4 Testing
```bash
# Navigate to http://localhost:3000
# Verify: Tools display instead of restaurants
# Navigate to http://localhost:3000/tool/[id]
# Verify: Tool detail page loads correctly
```

### Phase 5 Testing
```bash
# Test filters by category, pricing model, platform
# Verify: Filter options match AI tool context
# Verify: Tool cards display correct metadata
# Verify: Review submission works
```

### Phase 6 Testing
```bash
# Sign in with Google
# Click "Add to Favorites" on a tool
# Navigate to /favorites
# Verify: Favorite tools display
# Remove favorite, verify it disappears
```

### Phase 7 Testing
```bash
# Verify: UI styling matches AI tool theme
# Verify: Responsive design works on mobile
# Verify: All icons and images load correctly
```

### Phase 8 Testing
```bash
# Select 2-3 tools for comparison
# Click "Compare" button
# Verify: Comparison page displays side-by-side
# Verify: All relevant fields shown
```

### Continuous Verification
After each phase:
```bash
npm run lint
npm run build
```

---

## File Inventory

### Files to Rename
- `src/lib/fakeRestaurants.js` → `src/lib/sampleAITools.js`
- `src/components/RestaurantListings.jsx` → `src/components/ToolListings.jsx`
- `src/components/Restaurant.jsx` → `src/components/Tool.jsx`
- `src/components/RestaurantDetails.jsx` → `src/components/ToolDetails.jsx`
- `src/app/restaurant/[id]/page.jsx` → `src/app/tool/[id]/page.jsx`
- `src/app/restaurant/[id]/error.jsx` → `src/app/tool/[id]/error.jsx`

### Files to Modify (Substantial Changes)
- `src/app/layout.js` - Metadata
- `src/app/page.js` - Data fetching
- `src/app/actions.js` - Server Actions
- `src/lib/firebase/firestore.js` - All functions renamed and updated
- `src/lib/firebase/auth.js` - No changes (or minor)
- `src/components/Header.jsx` - Branding and menu
- `src/components/Filters.jsx` - Filter options
- `src/components/Reviews/ReviewSummary.jsx` - AI prompt
- `firestore.rules` - Collection names and rules
- `firestore.indexes.json` - New indexes
- `readme.md` - Documentation
- `src/app/styles.css` - Styling

### Files to Modify (Minor Changes)
- `src/components/Reviews/ReviewsList.jsx` - Maybe text updates
- `src/components/ReviewDialog.jsx` - Maybe text updates
- `src/lib/firebase/storage.js` - Rename functions
- `src/lib/firebase/serverApp.js` - No changes
- `src/lib/firebase/clientApp.js` - No changes
- `src/lib/getUser.js` - No changes

### New Files to Create
- `src/lib/firebase/favorites.js` - Favorites CRUD functions
- `src/app/favorites/page.js` - Favorites page
- `src/components/FavoritesList.jsx` - Favorites UI
- `src/components/FavoriteButton.jsx` - Favorite toggle button
- `src/app/compare/page.js` - Comparison page
- `src/components/ComparisonTable.jsx` - Comparison UI

### Files to Delete (After Migration)
- Old route: `src/app/restaurant/` directory (after verifying new route works)
- Old public assets: `public/friendly-eats.svg` (after replacement)

---

## Summary

This plan transforms the existing FriendlyEats restaurant review app into IA Discovery while preserving the solid Next.js + Firebase foundation. The key is to:

1. **Reuse the architecture** - Server Components, Server Actions, Firebase patterns all stay
2. **Rename and adapt** - Change "restaurant" to "tool" throughout the codebase
3. **Enhance the data model** - Add AI-specific fields (categories, features, platforms, pricing)
4. **Add new features** - Favorites and comparison (MVP scope)
5. **Update the UI** - Rebrand from restaurant theme to AI tool discovery theme

The implementation is divided into 8 ordered phases, each with clear testing criteria. The biggest risks are data migration (need to clear Firestore) and the manual curation of sample AI tool data. The existing security patterns (server-side auth, Firestore rules) are preserved and extended for the new features.
