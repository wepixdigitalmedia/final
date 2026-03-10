import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check, ArrowRight } from "lucide-react";

const includes = [
  "Weekly 1:1 calls with WePix founders — not some junior account manager, the actual founders 🎯",
  "Custom growth strategy built specifically for YOUR business — no templates, no generic advice 📋",
  "Ad account audits and optimization — we'll go through your campaigns with a magnifying glass 🔍",
  "Team training and skill development — because your team should be dangerous (at marketing) 💪",
  "Access to premium Skool community — 500+ marketers sharing real insights daily 👥",
  "Priority support via WhatsApp — we reply faster than your team's Slack messages 💬",
  "Quarterly business reviews — big picture strategy sessions where we plan world domination 🌍",
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
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Premium 1:1 Business Mentorship. For founders who are done with guesswork. 🧭</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Let's be real — running a business can feel like you're driving blindfolded while everyone on LinkedIn pretends they have it all figured out. This mentorship program gives you a copilot who's actually been on the road. Strategy, accountability, and hands-on execution support from people who've built what you're building.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border gsap-list">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">What's Included (it's a lot) ✨</h2>
            <div className="space-y-3 mb-10">
              {includes.map((item) => (
                <div key={item} className="gsap-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 mt-16">How It Works 🎬</h2>
            <p className="text-lg text-muted-foreground mb-6">This is an application-based program with limited spots because — plot twist — we actually want to give each founder real attention, not just collect payments. Apply below and we'll schedule a fit call to see if we're the right match. Think of it as a vibe check, but for business.</p>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-lg font-medium gap-2">Apply for Mentorship <ArrowRight size={16} /></Button>
            </a>
          </div>
        </section>
      </div>
      <CTABanner headline="Serious about growth? We're serious about helping. 🚀" subtext="Limited spots available. Apply now before we close applications (yes, we actually do that)." ctaLabel="Apply Now" ctaHref="https://cal.com" />
    </Layout>
  );
}
