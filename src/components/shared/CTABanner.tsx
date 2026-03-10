import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useGSAP, gsap } from "@/hooks/useGSAP";
import { BookingFormDialog } from "./BookingFormDialog";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref?: string;
  useDialog?: boolean;
}

export function CTABanner({ headline, subtext, ctaLabel, ctaHref, useDialog = true }: CTABannerProps) {
  const containerRef = useGSAP((container) => {
    gsap.fromTo(
      container.querySelectorAll(".gsap-cta-el"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <section ref={containerRef} className="border-t border-border py-24">
      <div className="container text-center">
        <h2 className="gsap-cta-el font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl mx-auto opacity-0">
          {headline}
        </h2>
        {subtext && <p className="gsap-cta-el mt-4 text-muted-foreground text-lg max-w-xl mx-auto opacity-0">{subtext}</p>}
        <div className="gsap-cta-el mt-8 opacity-0">
          {useDialog ? (
            <BookingFormDialog triggerLabel={ctaLabel} showArrow triggerSize="lg" />
          ) : ctaHref ? (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-medium gap-2 rounded-lg">
                {ctaLabel} <ArrowRight size={16} />
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
