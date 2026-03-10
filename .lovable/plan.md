

## Plan: Add scroll-left nudge animation to mobile sub-navigation

When the sub-navigation appears on mobile, animate the scroll container to briefly scroll right (~80px) then back to 0, hinting that it's swipeable.

### Changes

**`src/components/layout/Navbar.tsx`**

1. Import `useRef`, `useEffect`, and `gsap` from the existing GSAP hook
2. Add a `ref` to the sub-nav scroll container (line 112)
3. Add a `useEffect` that fires when `activeSection` changes:
   - Skip if not mobile (`window.innerWidth >= 768`) or no ref
   - Use GSAP timeline: scroll right 80px over 0.4s, then back to 0 over 0.4s
   - Small delay (0.3s) so the page settles first

```tsx
const subNavRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (!subNavRef.current || window.innerWidth >= 768) return;
  const el = subNavRef.current;
  if (el.scrollWidth <= el.clientWidth) return; // no overflow, skip
  const tl = gsap.timeline({ delay: 0.3 });
  tl.to(el, { scrollLeft: 80, duration: 0.4, ease: "power2.inOut" })
    .to(el, { scrollLeft: 0, duration: 0.4, ease: "power2.inOut" });
  return () => { tl.kill(); };
}, [activeSection]);
```

Apply `ref={subNavRef}` to the inner `div` on line 112. This covers all section sub-headers (Fashion, Academy, Business) since they all render through the same component.

### Files changed

| File | Change |
|------|--------|
| `src/components/layout/Navbar.tsx` | Add ref, import gsap, add useEffect nudge animation |

