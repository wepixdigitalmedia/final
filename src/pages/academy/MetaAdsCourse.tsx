import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const curriculum = [
  { module: "Module 1", title: "Meta Ads Fundamentals", topics: "Account structure, pixel setup, conversion API, campaign objectives" },
  { module: "Module 2", title: "Audience Strategy", topics: "Custom audiences, lookalikes, interest stacking, exclusions" },
  { module: "Module 3", title: "Creative That Converts", topics: "Ad formats, hooks, UGC, carousel strategy, video ads" },
  { module: "Module 4", title: "Campaign Architecture", topics: "CBO vs ABO, testing frameworks, scaling strategies" },
  { module: "Module 5", title: "Funnel Building", topics: "Awareness → consideration → conversion, retargeting, retention" },
  { module: "Module 6", title: "Analytics & Optimization", topics: "Reading data, attribution, ROAS optimization, killing losers" },
  { module: "Module 7", title: "Scaling Playbook", topics: "Horizontal scaling, vertical scaling, creative refresh cycles" },
  { module: "Module 8", title: "Advanced Strategies", topics: "Dynamic creative, catalog ads, Advantage+ campaigns, AI tools" },
];

const faqs = [
  { q: "Is this course for beginners?", a: "Yes and no. If you've never opened Facebook Ads Manager, you'll learn everything from scratch. But if you're already running ads, you'll skip the basics and jump to advanced strategies." },
  { q: "How long do I have access?", a: "Lifetime access. The course is continuously updated with new strategies and platform changes." },
  { q: "Is there a community?", a: "Yes. Every course student gets access to our private Skool community with daily discussions, case studies, and direct access to instructors." },
  { q: "What if I'm not in fashion?", a: "The strategies work for any D2C brand. Fashion is our specialty, but the frameworks apply to any product-based business." },
  { q: "Is there a refund policy?", a: "Yes. 7-day money-back guarantee, no questions asked." },
];

export default function MetaAdsCourse() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      
      {/* Hero - Sales page style, no nav */}
      <section className="bg-hero text-hero-foreground py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-primary/10" />
        <div className="container relative max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">WePix Academy</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Meta Ads Mastery Course
            </h1>
            <p className="mt-6 text-lg text-hero-foreground/60 max-w-xl mx-auto">
              The complete playbook on running profitable Meta Ads for D2C and fashion brands. Built by practitioners who manage ₹2Cr+ in ad spend.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-display font-semibold text-lg gap-2 px-10">
                  Enroll Now <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Tired of wasting money on ads that don't convert?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            You've watched YouTube tutorials. You've boosted posts. You've tried "just increase the budget." And nothing works consistently. This course changes that.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-muted/50">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-10">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "8 in-depth modules with video lessons",
              "Lifetime access + updates",
              "Private Skool community access",
              "Real campaign breakdowns",
              "Templates & frameworks",
              "Direct access to instructors",
              "Weekly live Q&A sessions",
              "7-day money-back guarantee",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-0.5" size={20} />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-center mb-10">Curriculum</h2>
          <div className="space-y-4">
            {curriculum.map((mod) => (
              <Card key={mod.module} className="border-border/50">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-display font-semibold text-primary uppercase tracking-wider">{mod.module}</span>
                      <h3 className="font-display text-lg font-bold mt-1">{mod.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{mod.topics}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
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

      {/* Final CTA */}
      <section className="bg-hero text-hero-foreground py-20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Stop guessing. Start scaling.</h2>
          <p className="mt-4 text-hero-foreground/60 text-lg max-w-xl mx-auto">
            Join hundreds of marketers and brand owners who've transformed their ad game.
          </p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="mt-8 font-display font-semibold text-lg gap-2 px-10">
              Enroll Now <ArrowRight size={20} />
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
