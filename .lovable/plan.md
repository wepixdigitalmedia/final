

## Plan: Add VSL Opt-In Dialog to Hero Image

Make the hero GIF image clickable, opening a dialog with the embedded VSL opt-in form (`p4gfS3Vcg7tDEWAgjyYF`), following the same pattern as `BookingFormDialog`.

### Changes

**`src/pages/Index.tsx`** (lines 91-102):
- Wrap the hero image in a clickable container with a play/click overlay hint (e.g., subtle "Watch & Get Started" overlay or a play icon)
- Add `useState` for dialog open state
- Add a `Dialog` with the iframe form embedded, matching `BookingFormDialog` styling
- Import `Dialog`, `DialogContent`, `DialogTitle` from ui components
- Make the image show `cursor-pointer` and a subtle hover effect

**Dialog specs:**
- `sm:max-w-lg`, same as BookingFormDialog
- iframe src: `https://portal.wepix.in/widget/form/p4gfS3Vcg7tDEWAgjyYF`
- iframe height: 600px, width 100%, no border
- `DialogTitle` with sr-only "LP VSL Opt-In"
- Mobile responsive: max-h-[90vh] with overflow handling

### Files changed

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Add dialog state, wrap image as clickable trigger, add Dialog with iframe |

