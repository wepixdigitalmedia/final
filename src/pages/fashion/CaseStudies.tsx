import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const studies = [
  {
    brand: "Taasza",
    category: "Ethnic Wear",
    problem: "New brand with zero online presence. No store, no content, no ad history.",
    approach: "Built Shopify store, ran full product shoot, launched Meta Ads with MCS Framework.",
    results: [
      { metric: "ROAS", value: "3x" },
      { metric: "Monthly Revenue", value: "₹5L" },
      { metric: "Timeline", value: "60 days" },
    ],
  },
  {
    brand: "BoonBabies",
    category: "Kids Fashion",
    problem: "Great products but inconsistent branding, low online sales, and generic content.",
    approach: "Complete brand refresh. New content strategy, WePixStudio assets, targeted Meta campaigns.",
    results: [
      { metric: "Monthly Revenue", value: "₹10L+" },
      { metric: "Ad Creative Tests", value: "50+" },
      { metric: "Content Pieces", value: "200+" },
    ],
  },
  {
    brand: "Nutmeg",
    category: "Premium Menswear",
    problem: "Strong product but underperforming online. Competing against bigger brands with bigger budgets.",
    approach: "Repositioned brand voice, created premium content, ran highly targeted conversion campaigns.",
    results: [
      { metric: "Revenue Growth", value: "2.5x" },
      { metric: "CPA Reduction", value: "40%" },
      { metric: "ROAS", value: "4.2x" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Case Studies</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Real brands. Real results.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              No fluff, no vanity metrics. Here's exactly what happened when brands trusted us.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl space-y-12">
          {studies.map((study, i) => (
            <motion.div
              key={study.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="border-border/50 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="text-primary" size={20} />
                    <span className="text-xs font-display font-semibold uppercase tracking-widest text-primary">{study.category}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-6">{study.brand}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-2">Problem</p>
                      <p className="text-sm">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-2">Approach</p>
                      <p className="text-sm">{study.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-2">Results</p>
                      <div className="space-y-2">
                        {study.results.map((r) => (
                          <div key={r.metric} className="flex justify-between">
                            <span className="text-sm text-muted-foreground">{r.metric}</span>
                            <span className="font-display font-bold text-primary">{r.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner
        headline="Want results like these?"
        subtext="Let's talk about your brand."
        ctaLabel="Book a Free Call"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
}
