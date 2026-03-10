

## Plan: Rewrite `/manifesto` with full content

Replace the current minimal 6-line manifesto with the complete 21-principle manifesto content provided by the user.

### Structure

**Hero section** — Keep existing hero with "Our Philosophy" tag and "Our Manifesto" title. Add intro line: "Here's our manifesto, shaped by years of experience..."

**Body** — Replace the short lines + image layout with a scrollable list of 21 manifesto principles, each rendered as a card/block:
- Numbered principle (01–21)
- Bold title
- Body paragraph(s)
- Some principles have bullet lists (Singular Focus, Productive Paranoia) — render as `<ul>`

Use `motion.div` with staggered `whileInView` animations matching existing site patterns. Cards styled with border-bottom separators or subtle card backgrounds for readability.

Keep the `ImagePlaceholder` at top (move to hero area or keep as sidebar on desktop).

### File changes

| File | Action |
|------|--------|
| `src/pages/Manifesto.tsx` | Rewrite with all 21 principles |

