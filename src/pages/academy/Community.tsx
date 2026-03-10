import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, MessageSquare, BookOpen, ArrowRight, Check } from "lucide-react";

const benefits = [
  "Daily discussions on ads, content, and growth",
  "Real campaign breakdowns and case studies",
  "Direct access to WePix team members",
  "Weekly challenges and accountability",
  "Template library and resource vault",
  "Networking with 500+ marketers and founders",
];

export default function Community() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Community</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your marketing crew. Always online.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              Join 500+ marketers, brand owners, and freelancers in the WePix Skool community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Users, stat: "500+", label: "Members" },
              { icon: MessageSquare, stat: "50+", label: "Posts/week" },
              { icon: BookOpen, stat: "100+", label: "Resources" },
            ].map((s) => (
              <Card key={s.label} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <s.icon className="text-primary mx-auto mb-3" size={28} />
                  <p className="font-display text-3xl font-bold">{s.stat}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What you get</h2>
          <div className="space-y-3 mb-10">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3">
                <Check className="text-primary shrink-0 mt-0.5" size={20} />
                <p className="text-lg">{b}</p>
              </div>
            ))}
          </div>

          <a href="https://www.skool.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="font-display font-semibold gap-2">
              Join the Community on Skool <ArrowRight size={18} />
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
}
