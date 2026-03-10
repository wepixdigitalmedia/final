import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTABanner } from "@/components/shared/CTABanner";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const includes = [
  "Weekly 1:1 calls with WePix founders",
  "Custom growth strategy for your business",
  "Ad account audits and optimization",
  "Team training and skill development",
  "Access to premium Skool community",
  "Priority support via WhatsApp",
  "Quarterly business reviews",
];

export default function Mentorship() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Mentorship</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Premium 1:1 Business Mentorship
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              For founders and marketing leaders who want direct access to our team. Strategy, accountability, and hands-on execution support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
          <div className="space-y-3 mb-10">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 mt-16">How It Works</h2>
          <p className="text-lg text-muted-foreground mb-6">
            This is an application-based program. We work with a limited number of mentees at any time to ensure quality. Apply below and we'll schedule a fit call to see if we're the right match.
          </p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-display font-semibold gap-2">
              Apply for Mentorship <ArrowRight size={18} />
            </Button>
          </a>
        </div>
      </section>

      <CTABanner
        headline="Serious about growth?"
        subtext="Apply for our mentorship program. Limited spots available."
        ctaLabel="Apply Now"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
}
