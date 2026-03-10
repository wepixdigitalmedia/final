import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Hook to run a GSAP animation inside a container with automatic cleanup.
 */
export function useGSAP(callback: (container: HTMLElement) => void, deps: any[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const ctx = gsap.context(() => {
      callback(container);
    }, container);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

/**
 * Scroll-triggered fade-in-up for multiple elements.
 */
export function scrollFadeIn(selector: string, container: HTMLElement, options?: { stagger?: number; y?: number; delay?: number; duration?: number }) {
  const elements = container.querySelectorAll(selector);
  if (!elements.length) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: options?.y ?? 30 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.7,
      stagger: options?.stagger ?? 0.1,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: elements[0],
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Hero text reveal animation.
 */
export function heroReveal(container: HTMLElement) {
  const section = container.querySelector(".gsap-hero-section") || container;
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

  const tag = section.querySelectorAll(".gsap-hero-tag");
  const title = section.querySelectorAll(".gsap-hero-title");
  const desc = section.querySelectorAll(".gsap-hero-desc");
  const cta = section.querySelectorAll(".gsap-hero-cta");

  if (tag.length) tl.fromTo(tag, { opacity: 0, y: -15 }, { opacity: 1, y: 0, duration: 0.5 });
  if (title.length) tl.fromTo(title, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.2");
  if (desc.length) tl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
  if (cta.length) tl.fromTo(cta, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.2");

  return tl;
}

/**
 * Counter animation using GSAP.
 */
export function animateCounter(el: HTMLElement, end: number, prefix = "", suffix = "", duration = 2) {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: end,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    onUpdate: () => {
      el.textContent = `${prefix}${Math.floor(obj.val)}${suffix}`;
    },
  });
}
