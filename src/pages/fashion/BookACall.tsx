import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const covers = [
  "Your brand's current challenges and goals",
  "Which WePix services are the right fit",
  "A rough roadmap for the first 60 days",
  "Budget expectations and timeline",
  "Q&A — ask us anything",
];

export default function BookACall() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Fashion</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Book a Free Strategy Call
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              30 minutes. No obligations. Just a real conversation about your fashion brand.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-2xl">
          <h2 className="font-display text-2xl font-bold mb-6">What we'll cover:</h2>
          <div className="space-y-4 mb-10">
            {covers.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-display font-semibold text-base gap-2 w-full md:w-auto">
              Schedule Your Call <ArrowRight size={18} />
            </Button>
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            You'll be redirected to our Cal.com booking page.
          </p>
        </div>
      </section>
    </Layout>
  );
}
