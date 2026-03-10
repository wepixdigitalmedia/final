import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Target, Users, Lightbulb, Heart, Rocket, DollarSign, Globe, Shield, Zap, Coffee, TrendingUp, Layers, Award, Compass } from "lucide-react";

const chapters = [
  { icon: Compass, num: "01", title: "Why WePix Exists", desc: "We started because we saw brands with incredible products getting absolutely terrible marketing. The gap between product quality and marketing quality in India was criminal — so we decided to fix it." },
  { icon: BookOpen, num: "02", title: "How We Got Here", desc: "Two guys from Tirupur, a laptop, and an unreasonable amount of ambition. From managing ₹10K ad budgets to ₹2Cr+ — here's the full, unfiltered story." },
  { icon: Target, num: "03", title: "Who We Build For", desc: "D2C fashion brands, course creators, B2B companies, and ambitious founders who are tired of 'just boost the post' advice. If you care about quality, we care about you." },
  { icon: Users, num: "04", title: "How We Work Together", desc: "No hierarchy theatre. Ideas win on merit, not seniority. We argue about ad creatives at 11 PM and celebrate ROAS wins at 8 AM. It's chaotic and beautiful." },
  { icon: Heart, num: "05", title: "What We Value", desc: "Radical honesty, execution speed, client obsession, and the courage to say 'this ad creative is trash, let's redo it' — even if it's uncomfortable." },
  { icon: Rocket, num: "06", title: "How We Ship", desc: "Fast iteration > perfect planning. We'd rather launch 10 ad creatives and kill 8 than spend a month perfecting one. Data beats opinions, always." },
  { icon: DollarSign, num: "07", title: "How We Price Things", desc: "Transparent pricing. No hidden fees. No 'let me check with my manager.' If we can't deliver ROI at a price point, we'll tell you upfront instead of wasting your time." },
  { icon: Globe, num: "08", title: "Remote & Office Culture", desc: "HQ in Tirupur, office in Bangalore, team members across India and UAE. We don't care where you sit — we care about what you ship." },
  { icon: Shield, num: "09", title: "Client Data & Privacy", desc: "Your ad account data, strategies, and results are sacred. We sign NDAs, use encrypted tools, and never share client information. Period." },
  { icon: Zap, num: "10", title: "Tools We Use", desc: "Meta Business Suite, Google Analytics, Shopify, AI tools we've built ourselves, Slack for chaos, Notion for sanity, and way too many Chrome tabs." },
  { icon: Coffee, num: "11", title: "How We Hire", desc: "Skills > degrees. Hunger > experience. We look for people who've built things on their own — side projects, freelance work, that random Instagram page they grew to 10K." },
  { icon: TrendingUp, num: "12", title: "Growth Philosophy", desc: "Sustainable growth > vanity spikes. We'd rather build a brand that does ₹5L/month consistently than one that hits ₹20L once and crashes. Compounding wins." },
  { icon: Layers, num: "13", title: "Our Tech Stack", desc: "AI-first approach. We build custom tools, automate repetitive work, and use technology to do in 2 hours what agencies take 2 weeks to do. Efficiency is non-negotiable." },
  { icon: Award, num: "14", title: "Quality Standards", desc: "Every piece of content, every ad creative, every strategy deck goes through review. We'd rather delay a deliverable than send something we're not proud of." },
  { icon: Lightbulb, num: "15", title: "Where We're Going", desc: "100 brands. Pan-India presence. AI tools that democratize great marketing for small brands. And maybe, just maybe, a WePix office with a proper espresso machine." },
];

export default function Handbook() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionHeading
            tag="Handbook"
            title="How we work at WePix"
            description="This handbook explains how we think, build, and operate. It's not a corporate policy document gathering dust — it's a living guide that every team member actually reads (and occasionally argues about)."
            align="left"
          />
          <div className="space-y-4">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.4 }}
              >
                <Card className="border-border/50 hover:border-border transition-colors">
                  <CardContent className="p-5 flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <ch.icon size={18} className="text-foreground" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-medium">{ch.num}</span>
                      <h3 className="font-display text-base font-semibold leading-tight">{ch.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{ch.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
