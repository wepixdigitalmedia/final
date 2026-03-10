import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Bot, MessageSquare, Users, BarChart3, Clock } from "lucide-react";

const useCases = [
  { icon: MessageSquare, title: "Customer Support", description: "24/7 AI agents across WhatsApp, web, and email. They never sleep, never get grumpy, and never say 'let me check with my supervisor.' Your customers will think you hired a whole support army." },
  { icon: Users, title: "Lead Qualification", description: "Stop wasting your sales team's time on tire-kickers. Our AI agents qualify inbound leads, ask the right questions, and route the hot ones straight to your closers. It's like having a bouncer for your sales pipeline." },
  { icon: BarChart3, title: "Data Analysis", description: "Pull insights from campaigns, sales data, and customer feedback without hiring a data scientist (or learning Python). Ask questions in plain English, get answers that actually make sense." },
  { icon: Clock, title: "Workflow Automation", description: "Follow-ups, reporting, scheduling, reminders — all the stuff that's important but soul-crushingly boring. Our AI agents handle it so your team can focus on work that actually requires a brain." },
  { icon: Bot, title: "Internal Knowledge Base", description: "Train an AI on your company docs, SOPs, and processes. New employees ask the AI instead of bothering Karen from HR for the fifth time. Karen will thank you." },
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
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">AI Agents</span>
                <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">AI agents that work while you sleep. And while you're awake. Basically always.</h1>
                <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Forget basic chatbots that respond with 'sorry, I didn't understand that' every five seconds. Our AI agents are custom-built for YOUR business, trained on YOUR data, and integrated with YOUR tools. They understand context, learn from conversations, and actually take actions — not just pretend to be helpful.</p>
              </div>
              <ImagePlaceholder label="AI Agent interface demo" aspectRatio="square" className="gsap-hero-cta opacity-0" />
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="font-display text-3xl font-semibold mb-4">What makes our AI Agents different?</h2>
            <p className="text-lg text-muted-foreground mb-8">Most 'AI chatbots' are glorified FAQ pages with a text bubble. Ours are different. They're trained on your company data, they integrate with your CRM, email, and WhatsApp, they learn from every conversation, and they can actually DO things — book appointments, send follow-ups, update databases. They're basically the perfect employee minus the coffee breaks.</p>
            <ImagePlaceholder label="AI Agent architecture diagram" aspectRatio="wide" />
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Use Cases" title="5 ways AI agents will change your business" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="gsap-usecase opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <uc.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-semibold">{uc.title}</h3>
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
            <SectionHeading tag="Industries" title="Industries we've built agents for" align="left" />
            <div className="flex flex-wrap gap-2">
              {industries.map((ind) => (
                <span key={ind} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium border border-border">{ind}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Ready to deploy your AI army?" subtext="Book a consultation. We'll discuss your use case and show you exactly how an AI agent would work for your business." ctaLabel="Book a Consultation" />
    </Layout>
  );
}
