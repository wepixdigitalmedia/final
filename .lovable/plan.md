

## Plan: Multi-page content build + Footer overhaul + Homepage additions

This is a large scope covering 8 areas. Here's the implementation plan:

---

### 1. Footer: Legal CTA section (above footer)

Create a new `LegalSection` component rendered inside `Footer.tsx` above the main footer content. Two-column layout:

- **Left**: `ImagePlaceholder` with "abstract legal illustration"
- **Right**: "Sexy Legal Documents" heading, links (Privacy Policy, Terms & Conditions, Cookie Policy), legal contact emails (legal@wepix.in, hello@wepix.in, hr@wepix.in)
- Section title: "Need clarity before working with us" with body text above the columns
- Mobile: stacks to single column

### 2. Footer: Copyright + Social links update

- Replace copyright with: `© 2026 WePix Digital Media LLP (India) | Perennial Group (A Consortium)`
- Add social icons row: LinkedIn, Instagram, Medium (custom SVG), YouTube, X/Twitter (`Twitter` from lucide), Facebook (`Facebook` from lucide)
- Remove flag emojis from location entries
- Add Careers and Perennial links to Company column

### 3. Homepage: "Founder Content and Insights" section

Add below "The Crew" section on `Index.tsx`. Three stacked containers:

**Container 1 — Instagram Reels**: ImagePlaceholder (phone screen), title "From the Founder", description about short-form insights, mentions @abdul_navas and @wepixindia

**Container 2 — LinkedIn Articles**: ImagePlaceholder (article card), title "Long Form Thoughts", description about articles, 3 placeholder article cards (thumbnail, title, snippet, "Read article" link)

**Container 3 — Testimonials**: Title "What People Say About Working With Us", placeholder testimonial cards (profile photo, name, role, company, testimonial text), mention sayabout.us embed

### 4. Create `/careers` page

New file `src/pages/Careers.tsx` with sub-tab navigation at top (Why Join WePix, Culture, Open Positions, Pay and Perks) linking to anchor sections on the same page. The last 3 tabs (Handbook, People, Manifesto) link to their respective routes.

**Sections:**
- **Why Join WePix** — ImagePlaceholder + body text from content
- **Culture** — "The Way We Work" headline, three principle cards (Ownership, Learning, Momentum), Media Wall grid of 9 ImagePlaceholders with captions
- **Open Positions** — 4 job tiles in grid (Performance Marketer, Social Media Manager, Shopify Developer, Video Editor), each with ImagePlaceholder, role title, description, "Apply Now" mailto button
- **Pay and Perks** — 4 cards (Compensation, Share Options, Benefits, Time Off) with provided content

### 5. Rewrite `/handbook`

Replace current 15 GenZ chapters with professional handbook content from the provided PDF/content:

- Welcome section with company intro
- Work Schedule (Mon-Sat, 9:30-7:00, breaks, grace period)
- Leave System (12 CL, 12 SL)
- Workplace Conduct (POSH compliance)
- Confidentiality

Keep Card layout with icons, update to 5 clean sections.

### 6. Rewrite `/manifesto`

Replace current 10 GenZ chapters with concise editorial content:

- Short hero: "The WePix Manifesto"
- Single-flow body text (no sidebar TOC needed — content is much shorter)
- Key lines: "Growth is not a campaign. It is a process." etc.
- Clean, minimal layout

### 7. Update `/people` page

Keep existing grid layout. Update team member cards to include short bio field. Add ImagePlaceholder banner at top. Group by department (Founder, CFO, Design, Marketing, Shopify, Video).

### 8. Create `/perennial` page

New file `src/pages/Perennial.tsx`:

- Hero with "Perennial" headline, brand narrative from PDF
- 15 doctrine principles displayed as numbered blocks with headings and descriptions from the Perennial Consortium PDF
- Footer CTA: "Build systems that last" with BookingFormDialog labeled "Contact WePix"

### 9. Routing & Navigation updates

- `App.tsx`: Add routes for `/careers` and `/perennial`
- `Navbar.tsx`: Add "Careers" to main nav links
- `Footer.tsx`: Add Careers and Perennial to Company column links

---

### File changes summary

| File | Action |
|------|--------|
| `src/pages/Careers.tsx` | Create |
| `src/pages/Perennial.tsx` | Create |
| `src/pages/Handbook.tsx` | Rewrite |
| `src/pages/Manifesto.tsx` | Rewrite |
| `src/pages/People.tsx` | Update |
| `src/pages/Index.tsx` | Add founder content section |
| `src/components/layout/Footer.tsx` | Legal section + copyright + social icons + links |
| `src/App.tsx` | Add 2 routes |
| `src/components/layout/Navbar.tsx` | Add Careers link |

