

## Plan: Fix typewriter layout shift

The h1 resizes as the typewriter text grows/shrinks because it naturally reflows. Fix by giving the h1 a fixed `min-height` so the container stays stable.

### Change

**`src/pages/Index.tsx` (line 73)**

Set a `min-height` on the `h1` to accommodate the longest phrase (roughly 3 lines on mobile, 2 on desktop):

```tsx
<h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] min-h-[4.6em] md:min-h-[3.45em] lg:min-h-[2.3em]">
```

This reserves space for the tallest state of the typewriter text, preventing the container from jumping as text is typed/erased.

### Files changed

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Add `min-h-[...]` to h1 element |

