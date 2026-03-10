import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useGSAP, gsap } from "@/hooks/useGSAP";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTABanner({ headline, subtext, ctaLabel, ctaHref }: CTABannerProps) {
  const containerRef = useGSAP((ctx, container) => {
    gsap.fromTo(
      container.querySelector(".gsap-cta-headline"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      container.querySelector(".gsap-cta-sub"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      container.querySelector(".gsap-cta-btn"),
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        delay: 0.4,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section ref={containerRef} className="bg-hero text-hero-foreground py-20">
      <div className="container text-center">
        <h2 className="gsap-cta-headline font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto opacity-0">
          {headline}
        </h2>
        {subtext && <p className="gsap-cta-sub mt-4 text-hero-foreground/60 text-lg max-w-xl mx-auto opacity-0">{subtext}</p>}
        <a href={ctaHref} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="gsap-cta-btn mt-8 font-display font-semibold text-base gap-2 opacity-0">
            {ctaLabel} <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </section>
  );
}
