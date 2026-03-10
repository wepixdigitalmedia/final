

## Plan: Remove Legal CTA section, create legal pages, update footer

### Changes

**1. Remove the Legal CTA section from Footer (`src/components/layout/Footer.tsx`)**
- Delete the entire "Legal CTA Section" (lines 50-95) — the big two-column section with image, legal docs, and contact emails
- Remove unused imports (`ImagePlaceholder`, `SectionHeading`, `Mail`)

**2. Update footer link columns**
- Add a new "Sexy Legal Docx" column to `footerLinks` with:
  - Privacy Policy → `/privacy`
  - Terms of Service → `/terms`
  - Cookie Policy → `/cookie`
  - Legal Contact → `/legal`
- Remove multiple emails, add single `hello@wepix.in` below tagline or social icons

**3. Update footer copyright line**
- Make "Perennial Group (A Consortium)" a `<Link to="/perennial">` hyperlink
- Replace bottom privacy/terms `<span>` elements with actual `<Link>` to `/privacy` and `/terms`

**4. Create 4 new pages**

- `src/pages/Privacy.tsx` — Privacy Policy placeholder page with professional structure (data collection, usage, cookies, third parties, contact)
- `src/pages/Terms.tsx` — Terms of Service placeholder (acceptance, services, IP, liability, governing law)
- `src/pages/CookiePolicy.tsx` — Cookie Policy placeholder (what cookies, types, manage, consent)
- `src/pages/Legal.tsx` — Legal Contact page with hello@wepix.in, company registration info, office addresses

All pages use `<Layout>`, `SectionHeading`, and consistent styling.

**5. Add routes (`src/App.tsx`)**
- Import and add routes for `/privacy`, `/terms`, `/cookie`, `/legal`

### Files changed

| File | Action |
|------|--------|
| `src/components/layout/Footer.tsx` | Remove legal CTA section, add Sexy Legal Docx column, single email, Perennial hyperlink |
| `src/pages/Privacy.tsx` | Create |
| `src/pages/Terms.tsx` | Create |
| `src/pages/CookiePolicy.tsx` | Create |
| `src/pages/Legal.tsx` | Create |
| `src/App.tsx` | Add 4 routes |

