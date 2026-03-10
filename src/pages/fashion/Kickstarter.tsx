import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check } from "lucide-react";

const included = [
  "Shopify store setup & optimization",
  "Full product shoot (up to 50 SKUs)",
  "Ad creative production (10+ creatives)",
  "Meta Ads setup & management (60 days)",
  "Content calendar & strategy",
  "Weekly performance reviews",
  "WhatsApp & email support",
];

const faqs = [
  { q: "Who is this for?", a: "New D2C fashion brands launching online for the first time, or existing brands that want a complete reset." },
  { q: "How long is the program?", a: "60 days. Enough to set up everything, launch campaigns, gather data, optimize, and see real results." },
  { q: "What if I don't have a Shopify store?", a: "We build it for you. Store setup is included." },
  { q: "What's the investment?", a: "Book a call and we'll give you a custom quote." },
  { q: "Do I need to provide products for the shoot?", a: "Yes. You send us the products, we handle everything else." },
];

export default function Kickstarter() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-check"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-checklist"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Kickstarter Program</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">From zero to selling in 60 days.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">The all-in-one launch program for D2C fashion brands.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border gsap-checklist">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
            <div className="space-y-3">
              {included.map((item) => (
                <div key={item} className="gsap-check flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="rounded-lg font-medium">Apply for Kickstarter →</Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container max-w-3xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display font-semibold">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <CTABanner headline="Ready to launch your brand?" subtext="Book a call." ctaLabel="Book a Call" ctaHref="https://cal.com" />
    </Layout>
  );
}
