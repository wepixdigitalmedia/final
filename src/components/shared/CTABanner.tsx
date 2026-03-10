import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTABanner({ headline, subtext, ctaLabel, ctaHref }: CTABannerProps) {
  return (
    <section className="bg-hero text-hero-foreground py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mx-auto">
          {headline}
        </h2>
        {subtext && <p className="mt-4 text-hero-foreground/60 text-lg max-w-xl mx-auto">{subtext}</p>}
        <a href={ctaHref} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="mt-8 font-display font-semibold text-base gap-2">
            {ctaLabel} <ArrowRight size={18} />
          </Button>
        </a>
      </div>
    </section>
  );
}
