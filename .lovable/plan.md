

## Plan: Remove scrollbar from sub-navigation

Add a CSS utility class to hide the scrollbar while keeping horizontal scroll functionality on the sub-navigation container.

### Changes

**`src/index.css`** — Add a utility class to hide scrollbars:
```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

**`src/components/layout/Navbar.tsx`** — Add `scrollbar-hide` class to the sub-nav scroll container (line 123):
```tsx
<div ref={subNavRef} className="container flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
```

