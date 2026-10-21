# IA Discovery - Visual Redesign Plan

**Objective:** Transform the visual identity of IA Discovery into a polished, modern AI tool discovery platform while preserving all existing functionality, data structures, and component interactions.

**Guiding Principle:** Change the visual language substantially, preserve application contracts and interactions, validate each phase before continuing.

---

## Current Visual State Analysis

### Existing Components & Interactions

**Header (`.header`, `.logo`, `.menu`, `.profile`)**
- Dark blue background (`rgb(13 42 69)`)
- White text
- Simple flexbox layout
- Dropdown menu on hover
- Google sign-in button
- Profile image with border

**Tool Cards (`.restaurants`, `.image-cover`, `.restaurant__details`, `.restaurant__meta`, `.restaurant__rating`)**
- White background cards
- Grid layout (auto-fill, minmax 250px)
- Fixed image height (300px)
- Simple rating display with stars
- Basic metadata (category, pricing)

**Filters (`.filter`, `.filter-menu`, `.tags`)**
- White dropdown
- Dark blue accents
- Pill-shaped tags
- Border-bottom styling

**Dialogs & Forms (`.dialog`, `.actions`, `.star-rating`)**
- Fixed positioning
- Shadow effects
- Orange/yellow accent colors
- Star rating picker

**Colors**
- Primary: `rgb(13 42 69)` (dark blue)
- Secondary: `rgb(240 242 245)` (light gray)
- Accent: `rgb(255 202 40)` (yellow/gold), `rgb(255 143 0)` (orange)
- Text: Black, dark gray, white

**Typography**
- Fonts: Roboto, Open Sans
- Weights: Normal, bold for headings
- Sizes: 1.25rem for logo, 0.875rem for labels

---

## Proposed Visual Identity

### Color Palette - Modern Tech/AI Theme

**Light Mode:**
- Primary Background: `#F8FAFC` (very light gray-blue)
- Secondary Background: `#FFFFFF` (white)
- Header Background: `#0F172A` (slate-900, modern dark)
- Card Background: `#FFFFFF` (white)
- Accent Primary: `#3B82F6` (blue-500)
- Accent Secondary: `#10B981` (emerald-500)
- Accent Tertiary: `#F59E0B` (amber-500)
- Text Primary: `#1E293B` (slate-800)
- Text Secondary: `#64748B` (slate-500)
- Border: `#E2E8F0` (slate-200)
- Hover: `#F1F5F9` (slate-100)

**Dark Mode:**
- Primary Background: `#0F172A` (slate-900)
- Secondary Background: `#1E293B` (slate-800)
- Header Background: `#020617` (slate-950)
- Card Background: `#1E293B` (slate-800)
- Accent Primary: `#60A5FA` (blue-400)
- Accent Secondary: `#34D399` (emerald-400)
- Accent Tertiary: `#FBBF24` (amber-400)
- Text Primary: `#F1F5F9` (slate-100)
- Text Secondary: `#94A3B8` (slate-400)
- Border: `#334155` (slate-700)
- Hover: `#334155` (slate-700)

**Gradients:**
- Header gradient: Linear 135deg from `#0F172A` to `#1E293B`
- Card hover: Subtle blue gradient overlay
- Button gradient: Primary color with subtle gradient

### Typography

**Font Family:**
- Primary: Inter (modern, clean, tech-oriented)
- Fallback: system-ui, -apple-system, sans-serif
- Alternative: Keep Roboto if preferred

**Font Sizes:**
- Logo: 1.5rem / 24px
- H1: 2rem / 32px
- H2: 1.5rem / 24px
- H3: 1.25rem / 20px
- Body: 1rem / 16px
- Small: 0.875rem / 14px
- Caption: 0.75rem / 12px

**Font Weights:**
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Line Heights:**
- Tight: 1.25 (headings)
- Normal: 1.5 (body)
- Relaxed: 1.75 (large text)

### Spacing System

**Scale (8px base):**
- XS: 4px
- SM: 8px
- MD: 16px
- LG: 24px
- XL: 32px
- 2XL: 48px
- 3XL: 64px

**Usage:**
- Card padding: MD (16px)
- Card gap: LG (24px)
- Section spacing: 2XL (48px)
- Element spacing: SM (8px)

### Shadows

**Card Shadow:**
- Light: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`
- Medium: `0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)`
- Large: `0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)`
- Hover: `0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04)`

**Elevation Levels:**
- Header: Medium
- Cards: Small → Medium on hover
- Dialogs: Large
- Buttons: Small

### Border Radius

**Scale:**
- XS: 4px (tags, small elements)
- SM: 8px (buttons, inputs)
- MD: 12px (cards)
- LG: 16px (containers)
- XL: 24px (large containers)
- Full: 9999px (circles, pills)

**Usage:**
- Cards: MD (12px)
- Buttons: SM (8px)
- Tags: Full (9999px)
- Dialogs: LG (16px)

---

## Implementation Phases

### Phase 1: CSS Variables & Theme Foundation

**Objective:** Establish CSS variables for theming and implement light/dark mode toggle.

**Files to Modify:**
- `src/app/styles.css` - Add CSS variables for colors, spacing, shadows, typography
- `src/app/layout.js` - Add ThemeProvider wrapper
- `src/context/ThemeContext.jsx` - Create theme context (NEW)
- `src/components/ThemeToggle.jsx` - Create theme toggle component (NEW)
- `src/components/Header.jsx` - Add theme toggle button

**CSS Variables Structure:**
```css
:root {
  /* Colors */
  --bg-primary: #F8FAFC;
  --bg-secondary: #FFFFFF;
  --bg-header: #0F172A;
  --bg-card: #FFFFFF;
  --text-primary: #1E293B;
  --text-secondary: #64748B;
  --accent-primary: #3B82F6;
  --accent-secondary: #10B981;
  --accent-tertiary: #F59E0B;
  --border: #E2E8F0;
  --hover: #F1F5F9;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  
  /* Typography */
  --font-family: 'Inter', system-ui, sans-serif;
  --font-size-logo: 1.5rem;
  --font-size-h1: 2rem;
  --font-size-h2: 1.5rem;
  --font-size-h3: 1.25rem;
  --font-size-body: 1rem;
  --font-size-small: 0.875rem;
  --font-size-caption: 0.75rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05);
  --shadow-hover: 0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04);
  
  /* Border Radius */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
}

[data-theme="dark"] {
  --bg-primary: #0F172A;
  --bg-secondary: #1E293B;
  --bg-header: #020617;
  --bg-card: #1E293B;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --accent-primary: #60A5FA;
  --accent-secondary: #34D399;
  --accent-tertiary: #FBBF24;
  --border: #334155;
  --hover: #334155;
}
```

**Implementation Steps:**
1. Add Inter font to Google Fonts import
2. Define CSS variables in `styles.css`
3. Create `ThemeContext.jsx` with React context
4. Create `ThemeToggle.jsx` component (sun/moon icon)
5. Wrap app in ThemeProvider in `layout.js`
6. Add theme toggle to Header
7. Persist theme in localStorage

**Verification:**
- ✅ Toggle between light/dark mode works
- ✅ Theme persists on page refresh
- ✅ No functionality broken

---

### Phase 2: Header Redesign

**Objective:** Modernize header with new colors, spacing, and typography.

**Files to Modify:**
- `src/app/styles.css` - Update `.header`, `.logo`, `.menu`, `.profile` classes
- `src/components/Header.jsx` - No functional changes, only verify classes match

**Design Changes:**
- Background: Gradient or solid `--bg-header`
- Height: Increased from 0.8rem to 3rem (48px)
- Padding: Increased from 0.8rem to 0 2rem
- Logo: Larger font size, better spacing
- Menu dropdown: Modern shadow, better border radius
- Profile: Circular avatar with ring effect
- Links: Better hover states with transitions

**CSS Updates:**
```css
header {
  background: linear-gradient(135deg, var(--bg-header), #1E293B);
  color: var(--text-primary);
  height: 64px;
  padding: 0 2rem;
  align-items: center;
  box-shadow: var(--shadow-md);
  
  & img {
    height: 32px;
  }
}

.logo {
  font-size: var(--font-size-logo);
  font-weight: 700;
  letter-spacing: -0.025em;
  
  & img {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    opacity: 0.9;
  }
}

.menu ul {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
  
  & li {
    border-bottom: 1px solid var(--border);
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      background: var(--hover);
    }
  }
}
```

**Verification:**
- ✅ Header displays correctly
- ✅ Dropdown menu works
- ✅ Theme toggle functional
- ✅ Sign in/out still works

---

### Phase 3: Tool Cards Redesign

**Objective:** Modernize tool cards with new shadows, spacing, and visual hierarchy.

**Files to Modify:**
- `src/app/styles.css` - Update `.restaurants` (rename to `.tools`), `.image-cover`, `.restaurant__details` (rename to `.tool__details`), `.restaurant__meta` (rename to `.tool__meta`), `.restaurant__rating` (rename to `.tool__rating`)
- `src/components/ToolListings.jsx` - Update class names to match CSS

**Design Changes:**
- Grid: Better responsive behavior
- Card shadow: Small → Medium on hover
- Card border: Subtle border using `--border`
- Card padding: Increased from 20px to 24px
- Image: Remove fixed height, use aspect-ratio
- Rating: Modern star styling
- Metadata: Better typography and spacing
- Comparison checkbox: Styled as modern toggle

**CSS Updates:**
```css
.tools {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  
  & li {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: all 0.3s ease;
    overflow: hidden;
    
    &:hover {
      box-shadow: var(--shadow-hover);
      transform: translateY(-4px);
    }
  }
  
  & a {
    color: var(--text-primary);
  }
}

.image-cover {
  aspect-ratio: 16/9;
  background: var(--bg-secondary);
  overflow: hidden;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  & a:hover img {
    transform: scale(1.05);
  }
}

.tool__details {
  padding: var(--spacing-md);
}

.tool__meta {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-small);
  color: var(--text-secondary);
  font-weight: 500;
}

.tool__rating {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
  
  & ul {
    display: flex;
    gap: 2px;
  }
  
  & svg {
    width: 16px;
    height: 16px;
    color: var(--accent-tertiary);
  }
  
  & span {
    font-size: var(--font-size-small);
    color: var(--text-secondary);
  }
}
```

**Verification:**
- ✅ Cards display correctly
- ✅ Hover effects work
- ✅ Comparison checkbox visible and functional
- ✅ All metadata displays
- ✅ Ratings display correctly

---

### Phase 4: Filters Redesign

**Objective:** Modernize filter dropdown and tags with new styling.

**Files to Modify:**
- `src/app/styles.css` - Update `.filter`, `.filter-menu`, `.tags`

**Design Changes:**
- Filter dropdown: Modern border, better padding, smooth animation
- Tags: Better colors, improved hover states
- Select dropdowns: Modern styling with custom arrow
- Better spacing and typography

**CSS Updates:**
```css
.filter-menu {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  
  & summary {
    padding: var(--spacing-md);
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: var(--text-primary);
  }
  
  & form {
    padding: var(--spacing-md);
  }
  
  & select {
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    color: var(--text-primary);
    font-size: var(--font-size-body);
    cursor: pointer;
  }
}

.tags {
  & span {
    background: var(--accent-primary);
    color: white;
    border-radius: var(--radius-full);
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: var(--font-size-small);
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background: var(--accent-primary);
      opacity: 0.9;
    }
  }
  
  & button {
    color: white;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }
}
```

**Verification:**
- ✅ Filter dropdown opens/closes
- ✅ All filters work
- ✅ Tags display correctly
- ✅ Tag removal works

---

### Phase 5: Tool Detail Page Redesign

**Objective:** Modernize tool detail page with new layout and styling.

**Files to Modify:**
- `src/app/styles.css` - Update `.img__section`, `.details`, `.details__container`, `.reviews`, `.actions`
- `src/components/ToolDetails.jsx` - Verify class names match

**Design Changes:**
- Hero image: Full width, better gradient overlay
- Details section: Better spacing, card layout
- Reviews: Modern review cards with better typography
- Actions: Floating FAB (Floating Action Button) style
- Rating picker: Modern star picker
- Favorite button: Heart icon with animation

**CSS Updates:**
```css
.img__section {
  height: 400px;
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.details__container {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.6));
  backdrop-filter: blur(10px);
}

.details {
  padding: var(--spacing-xl);
}

.reviews {
  & .review__item {
    padding: var(--spacing-xl);
    border-bottom: 1px solid var(--border);
    
    &:last-child {
      border-bottom: none;
    }
  }
}

.actions {
  .review, .add {
    border-radius: var(--radius-full);
    padding: var(--spacing-md) var(--spacing-xl);
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}
```

**Verification:**
- ✅ Detail page loads
- ✅ Image displays correctly
- ✅ Reviews display
- ✅ Review submission works
- ✅ Favorite button works
- ✅ All interactions preserved

---

### Phase 6: Comparison Table Redesign

**Objective:** Modernize comparison table with better styling and responsiveness.

**Files to Modify:**
- `src/components/ComparisonTable.jsx` - Update inline styles to use CSS classes or CSS variables
- `src/app/styles.css` - Add new classes for comparison table

**Design Changes:**
- Table: Modern borders, better cell padding
- Header row: Sticky header with gradient background
- Responsive: Scrollable on mobile
- Better contrast and readability

**CSS Updates:**
```css
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  
  & th {
    background: var(--bg-header);
    color: var(--text-primary);
    padding: var(--spacing-md);
    text-align: left;
    font-weight: 600;
    position: sticky;
    top: 0;
  }
  
  & td {
    padding: var(--spacing-md);
    border-bottom: 1px solid var(--border);
  }
  
  & tr:last-child td {
    border-bottom: none;
  }
}
```

**Verification:**
- ✅ Comparison page loads
- ✅ Table displays correctly
- ✅ All data fields show
- ✅ Responsive on mobile

---

### Phase 7: Favorites Page Redesign

**Objective:** Modernize favorites page to match tool listings design.

**Files to Modify:**
- `src/components/FavoritesList.jsx` - Update inline styles to use CSS classes
- `src/app/styles.css` - Add classes matching tool listings

**Design Changes:**
- Same styling as tool listings
- Empty state: Modern empty state illustration
- Remove button: Modern trash icon button

**CSS Updates:**
Reuse tool listing styles, add empty state:
```css
.empty-state {
  text-align: center;
  padding: var(--spacing-3xl);
  color: var(--text-secondary);
  
  & h3 {
    font-size: var(--font-size-h3);
    margin-bottom: var(--spacing-sm);
  }
}
```

**Verification:**
- ✅ Favorites page loads
- ✅ Favorites display
- ✅ Remove works
- ✅ Empty state shows when no favorites

---

### Phase 8: Responsive Design Refinement

**Objective:** Ensure all pages work well on mobile, tablet, and desktop.

**Files to Modify:**
- `src/app/styles.css` - Add responsive breakpoints and mobile-specific styles

**Breakpoints:**
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

**Responsive Updates:**
```css
@media (max-width: 640px) {
  header {
    padding: 0 var(--spacing-md);
  }
  
  .tools {
    grid-template-columns: 1fr;
  }
  
  article {
    width: 100%;
    padding: var(--spacing-md);
  }
  
  .filter-menu {
    width: 100%;
  }
}
```

**Verification:**
- ✅ Test on mobile viewport
- ✅ Test on tablet viewport
- ✅ Test on desktop viewport
- ✅ All features work on all sizes

---

## CSS Class Renaming Map

**To clean up old restaurant naming:**
- `.restaurants` → `.tools`
- `.restaurant__details` → `.tool__details`
- `.restaurant__meta` → `.tool__meta`
- `.restaurant__rating` → `.tool__rating`
- `.restaurant__review_summary` → `.tool__review_summary`
- `.main__restaurant` → `.main__tool`

**Files to Update Class Names:**
- `src/components/ToolListings.jsx`
- `src/components/ToolDetails.jsx`
- `src/components/FavoritesList.jsx`
- `src/app/styles.css`

---

## New Components to Create

### ThemeContext.jsx
```jsx
// src/context/ThemeContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

### ThemeToggle.jsx
```jsx
// src/components/ThemeToggle.jsx
"use client";
import { useTheme } from '@/src/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
```

---

## Implementation Order

1. **Phase 1:** CSS Variables & Theme Foundation (infrastructure)
2. **Phase 2:** Header Redesign (top navigation)
3. **Phase 3:** Tool Cards Redesign (main content)
4. **Phase 4:** Filters Redesign (navigation/filtering)
5. **Phase 5:** Tool Detail Page Redesign (detail view)
6. **Phase 6:** Comparison Table Redesign (comparison view)
7. **Phase 7:** Favorites Page Redesign (favorites view)
8. **Phase 8:** Responsive Design Refinement (mobile/tablet)

---

## Verification Strategy

**After Each Phase:**
1. Run `npm run build` - Ensure no build errors
2. Run `npm run dev` - Test locally
3. Test all component interactions
4. Test light/dark mode toggle
5. Test responsive breakpoints

**Final Verification:**
- ✅ All pages load correctly
- ✅ All features work (browse, filter, detail, review, favorites, compare)
- ✅ Light/dark mode works on all pages
- ✅ Responsive design works on all screen sizes
- ✅ No functionality broken
- ✅ Build succeeds
- ✅ No console errors

---

## Success Criteria

**Visual Design:**
- ✅ Modern, polished appearance
- ✅ Tech-oriented color scheme
- ✅ Consistent spacing and typography
- ✅ Smooth transitions and animations
- ✅ Light/dark mode implemented

**Functionality:**
- ✅ All existing features work exactly as before
- ✅ No breaking changes to component interactions
- ✅ Data structures unchanged
- ✅ Firebase integration unchanged
- ✅ Authentication flow unchanged

**User Experience:**
- ✅ Improved visual hierarchy
- ✅ Better readability
- ✅ Enhanced discoverability
- ✅ Smoother interactions
- ✅ Professional appearance

---

## Risks & Considerations

**Breaking Changes:**
- CSS class renaming may cause temporary visual issues if not updated everywhere
- CSS variables may not work in very old browsers (but Next.js targets modern browsers)

**Performance:**
- Additional CSS variables and transitions minimal impact
- Inter font loaded from Google Fonts (consider self-hosting for production)

**Browser Compatibility:**
- CSS variables: Supported in all modern browsers
- Custom properties: Safari 14+, Chrome 49+, Firefox 31+
- Fallback: Consider adding media query for older browsers if needed

**Unknowns:**
- Whether user prefers specific design direction
- Whether brand guidelines exist
- Whether specific color palette is required