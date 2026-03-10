import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Users, BarChart3, Clock, ArrowRight } from "lucide-react";

const useCases = [
  { icon: MessageSquare, title: "Customer Support", description: "24/7 AI agents that handle FAQs, ticket routing, and first-line support across WhatsApp, web, and email." },
  { icon: Users, title: "Lead Qualification", description: "AI agents that qualify inbound leads, ask the right questions, and route hot leads to your sales team." },
  { icon: BarChart3, title: "Data Analysis", description: "Agents that pull insights from your data — campaign performance, sales trends, customer feedback." },
  { icon: Clock, title: "Workflow Automation", description: "Automate repetitive tasks: follow-ups, reporting, scheduling, CRM updates." },
  { icon: Bot, title: "Internal Knowledge Base", description: "AI agents trained on your company docs, SOPs, and processes. Instant answers for your team." },
];

const industries = ["SaaS & Tech", "Manufacturing", "E-commerce", "Healthcare", "Education", "Professional Services"];

export default function AIAgents() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">AI Agents</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              AI agents that work while you sleep.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              Custom-built AI agents for customer support, lead qualification, and workflow automation. Not chatbots — actual intelligent agents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What they do */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl font-bold mb-4">What AI Agents Actually Do</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Unlike basic chatbots, our AI agents understand context, learn from interactions, and take actions. They're built on your data, trained on your processes, and integrated with your tools.
          </p>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading tag="Use Cases" title="5 ways to deploy AI agents" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <uc.icon className="text-primary mb-3" size={24} />
                    <h3 className="font-display text-lg font-bold">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <SectionHeading tag="Industries" title="Industries we serve" align="left" />
          <div className="flex flex-wrap gap-3">
            {industries.map((ind) => (
              <span key={ind} className="px-4 py-2 rounded-full bg-muted text-sm font-medium">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to deploy AI agents?"
        subtext="Let's discuss your use case and build something custom."
        ctaLabel="Book a Consultation"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
}
