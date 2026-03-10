import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check, ArrowRight } from "lucide-react";

const includes = [
  "Weekly 1:1 calls with WePix founders",
  "Custom growth strategy",
  "Ad account audits and optimization",
  "Team training and skill development",
  "Access to premium Skool community",
  "Priority support via WhatsApp",
  "Quarterly business reviews",
];

export default function Mentorship() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-item"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-list"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Mentorship</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Premium 1:1 Business Mentorship</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Strategy, accountability, and hands-on execution support.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border gsap-list">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
            <div className="space-y-3 mb-10">
              {includes.map((item) => (
                <div key={item} className="gsap-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-16">How It Works</h2>
            <p className="text-lg text-muted-foreground mb-6">Application-based program with limited spots. Apply below and we'll schedule a fit call.</p>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-lg font-medium gap-2">Apply for Mentorship <ArrowRight size={16} /></Button>
            </a>
          </div>
        </section>
      </div>
      <CTABanner headline="Serious about growth?" subtext="Limited spots available." ctaLabel="Apply Now" ctaHref="https://cal.com" />
    </Layout>
  );
}
