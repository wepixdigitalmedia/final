import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
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
  { q: "Who is this for?", a: "New D2C fashion brands launching online for the first time, or existing brands that want a complete reset on their digital presence." },
  { q: "How long is the program?", a: "60 days. That's enough time to set up everything, launch campaigns, gather data, optimize, and see real results." },
  { q: "What if I don't have a Shopify store?", a: "We build it for you. Store setup is included in the Kickstarter Program." },
  { q: "What's the investment?", a: "Book a call and we'll give you a custom quote based on your brand's needs. No cookie-cutter pricing." },
  { q: "Do I need to provide products for the shoot?", a: "Yes. You send us the products, we handle everything else — styling, shooting, editing, and optimizing for ads." },
];

export default function Kickstarter() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Kickstarter Program</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              From zero to selling in 60 days.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              The all-in-one launch program for D2C fashion brands. Store, content, ads, strategy — we handle everything.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
          <div className="space-y-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-display font-semibold">
                Apply for Kickstarter →
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
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

      <CTABanner
        headline="Ready to launch your brand?"
        subtext="Book a call. We'll figure out if Kickstarter is right for you."
        ctaLabel="Book a Call"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
}
