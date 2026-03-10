

## Plan: Add "Implement Your AI Agent Today" section to AI Agents page

Add a new section before the CTA banner with a 3-column grid (2x2 on mobile) showcasing 4 specific AI agents, each as a card tile with image placeholder, title, description, and a CTA link.

### Changes

**`src/pages/business/AIAgents.tsx`**

1. Add a new `agents` data array with 4 items:
   - Sales Call Setter Agent
   - Lead Qualifier Agent
   - WhatsApp Chat Agent
   - Instagram DM Agent
   
   Each with a title, description, and image placeholder.

2. Add a new section after the Industries section (before `CTABanner`), with:
   - `SectionHeading` — tag: "Our Agents", title: "Implement your AI Agent today"
   - 2x2 grid on mobile, 3-col on desktop (4 cards, last row centered or spanning)
   - Each card: `ImagePlaceholder` on top, title, short description, and an "Implement Today →" link (`<a href="#">`)
   - Cards get `.gsap-agent` class for scroll animation

3. Add `scrollFadeIn(".gsap-agent", ...)` to the existing `useGSAP` callback.

### Files changed

| File | Change |
|------|--------|
| `src/pages/business/AIAgents.tsx` | Add agents array + new grid section with 4 agent tiles |

