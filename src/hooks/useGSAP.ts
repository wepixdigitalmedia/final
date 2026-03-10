import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Hook to run a GSAP animation inside a container with automatic cleanup.
 */
export function useGSAP(callback: (ctx: gsap.Context, container: HTMLElement) => void, deps: any[] = []) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      callback(ctx as any, containerRef.current!);
    }, containerRef.current);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return containerRef;
}

/**
 * Scroll-triggered fade-in-up for multiple elements.
 */
export function scrollFadeIn(selector: string, container: HTMLElement, options?: { stagger?: number; y?: number; delay?: number; duration?: number }) {
  gsap.fromTo(
    container.querySelectorAll(selector),
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.12,
      delay: options?.delay ?? 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.querySelector(selector),
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}

/**
 * Hero text split-reveal animation (lines sliding up).
 */
export function heroReveal(container: HTMLElement) {
  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  
  tl.fromTo(
    container.querySelectorAll(".gsap-hero-tag"),
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.6 }
  )
  .fromTo(
    container.querySelectorAll(".gsap-hero-title"),
    { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
    { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", duration: 1 },
    "-=0.3"
  )
  .fromTo(
    container.querySelectorAll(".gsap-hero-desc"),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7 },
    "-=0.5"
  )
  .fromTo(
    container.querySelectorAll(".gsap-hero-cta"),
    { opacity: 0, y: 20, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
    "-=0.3"
  );

  return tl;
}

/**
 * Magnetic hover effect for buttons/cards.
 */
export function addMagneticHover(elements: NodeListOf<Element> | Element[]) {
  (elements as Element[]).forEach((el) => {
    const htmlEl = el as HTMLElement;
    const handleMove = (e: MouseEvent) => {
      const rect = htmlEl.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(htmlEl, { x: x * 0.15, y: y * 0.15, duration: 0.3, ease: "power2.out" });
    };
    const handleLeave = () => {
      gsap.to(htmlEl, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    };
    htmlEl.addEventListener("mousemove", handleMove);
    htmlEl.addEventListener("mouseleave", handleLeave);
  });
}

/**
 * Parallax background on scroll.
 */
export function parallaxBg(selector: string, container: HTMLElement, speed: number = 0.3) {
  gsap.to(container.querySelectorAll(selector), {
    yPercent: -30 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: container.querySelector(selector),
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
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

/**
 * Horizontal line draw animation.
 */
export function lineReveal(selector: string, container: HTMLElement) {
  gsap.fromTo(
    container.querySelectorAll(selector),
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1,
      ease: "power3.inOut",
      transformOrigin: "left center",
      scrollTrigger: {
        trigger: container.querySelector(selector),
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}
