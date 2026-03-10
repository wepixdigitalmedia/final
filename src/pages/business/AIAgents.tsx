import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Bot, MessageSquare, Users, BarChart3, Clock } from "lucide-react";

const useCases = [
  { icon: MessageSquare, title: "Customer Support", description: "24/7 AI agents across WhatsApp, web, and email." },
  { icon: Users, title: "Lead Qualification", description: "Qualify inbound leads and route hot leads to sales." },
  { icon: BarChart3, title: "Data Analysis", description: "Pull insights from campaigns, sales, and feedback." },
  { icon: Clock, title: "Workflow Automation", description: "Automate follow-ups, reporting, scheduling." },
  { icon: Bot, title: "Internal Knowledge Base", description: "AI trained on your company docs and SOPs." },
];

const industries = ["SaaS & Tech", "Manufacturing", "E-commerce", "Healthcare", "Education", "Professional Services"];

export default function AIAgents() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-usecase", container, { stagger: 0.08, y: 25 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">AI Agents</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">AI agents that work while you sleep.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Custom-built for support, lead qualification, and automation.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-4">What AI Agents Actually Do</h2>
            <p className="text-lg text-muted-foreground">Unlike basic chatbots, our AI agents understand context, learn, and take actions. Built on your data, integrated with your tools.</p>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Use Cases" title="5 ways to deploy AI agents" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="gsap-usecase opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <uc.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-bold">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-3xl">
            <SectionHeading tag="Industries" title="Industries we serve" align="left" />
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span key={ind} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium border border-border">{ind}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Ready to deploy AI agents?" subtext="Let's discuss your use case." ctaLabel="Book a Consultation" ctaHref="https://cal.com" />
    </Layout>
  );
}
