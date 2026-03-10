import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Check, Star, ArrowRight } from "lucide-react";

const curriculum = [
  { module: "Module 1", title: "Meta Ads Fundamentals", topics: "Account structure, pixel setup, conversion API, campaign objectives" },
  { module: "Module 2", title: "Audience Strategy", topics: "Custom audiences, lookalikes, interest stacking, exclusions" },
  { module: "Module 3", title: "Creative That Converts", topics: "Ad formats, hooks, UGC, carousel strategy, video ads" },
  { module: "Module 4", title: "Campaign Architecture", topics: "CBO vs ABO, testing frameworks, scaling strategies" },
  { module: "Module 5", title: "Funnel Building", topics: "Awareness → consideration → conversion, retargeting, retention" },
  { module: "Module 6", title: "Analytics & Optimization", topics: "Reading data, attribution, ROAS optimization" },
  { module: "Module 7", title: "Scaling Playbook", topics: "Horizontal scaling, vertical scaling, creative refresh cycles" },
  { module: "Module 8", title: "Advanced Strategies", topics: "Dynamic creative, catalog ads, Advantage+ campaigns, AI tools" },
];

const faqs = [
  { q: "Is this course for beginners?", a: "Yes and no. Beginners learn from scratch. Advanced users skip to strategies." },
  { q: "How long do I have access?", a: "Lifetime access with continuous updates." },
  { q: "Is there a community?", a: "Yes. Private Skool community with daily discussions." },
  { q: "What if I'm not in fashion?", a: "The strategies work for any D2C brand." },
  { q: "Is there a refund policy?", a: "7-day money-back guarantee, no questions asked." },
];

export default function MetaAdsCourse() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-mod", container, { stagger: 0.06, y: 20 });
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <WhatsAppButton />

      <section className="gsap-hero-section py-24 md:py-36 border-b border-border">
        <div className="container max-w-3xl text-center">
          <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Academy</span>
          <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Meta Ads Mastery Course</h1>
          <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground max-w-xl mx-auto opacity-0">The complete playbook on running profitable Meta Ads.</p>
          <div className="gsap-hero-cta mt-8 flex flex-col items-center gap-4 opacity-0">
            <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="text-foreground" />)}</div>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-lg font-medium text-base gap-2 px-8">Enroll Now <ArrowRight size={16} /></Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Tired of wasting money on ads that don't convert?</h2>
          <p className="mt-6 text-lg text-muted-foreground">This course changes that.</p>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-10">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {["8 in-depth modules", "Lifetime access + updates", "Private Skool community", "Real campaign breakdowns", "Templates & frameworks", "Direct instructor access", "Weekly live Q&A", "7-day money-back guarantee"].map((item) => (
              <div key={item} className="flex items-start gap-3"><Check className="text-foreground shrink-0 mt-0.5" size={18} /><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Curriculum</h2>
          <div className="space-y-3">
            {curriculum.map((mod) => (
              <div key={mod.module} className="gsap-mod opacity-0">
                <Card className="rounded-xl border-border">
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{mod.module}</span>
                    <h3 className="font-display text-base font-bold mt-1">{mod.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{mod.topics}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-10">FAQ</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display font-semibold">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Stop guessing. Start scaling.</h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">Join hundreds of marketers who've transformed their ad game.</p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-8 rounded-lg font-medium text-base gap-2 px-8">Enroll Now <ArrowRight size={16} /></Button>
          </a>
        </div>
      </section>
    </div>
  );
}
