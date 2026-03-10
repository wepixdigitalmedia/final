import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Bot, Target, BarChart3, Globe, Monitor, Video, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const services = [
  { icon: Target, title: "Organic Lead Gen", description: "LinkedIn, email, and content-driven lead generation." },
  { icon: BarChart3, title: "Meta Ads (B2B)", description: "Lead gen campaigns tailored for B2B funnels." },
  { icon: Globe, title: "Google Ads", description: "Search, display, and YouTube campaigns." },
  { icon: Zap, title: "Enterprise Ads", description: "Large-scale campaigns for complex funnels." },
  { icon: Monitor, title: "Websites", description: "High-converting websites and landing pages." },
  { icon: Bot, title: "AI Agents", description: "Custom AI agents for support and automation." },
  { icon: Video, title: "Video Production", description: "Corporate videos, explainers, and social content." },
];

export default function Business() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-service-card", container, { stagger: 0.06, y: 25 });

    gsap.fromTo(container.querySelector(".gsap-spotlight"), { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-spotlight"), start: "top 80%", toggleActions: "play none none none" },
    });

    gsap.fromTo(container.querySelector(".gsap-mentorship"), { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-mentorship"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-36">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Business</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              B2B growth that's actually measurable.
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground opacity-0">
              Lead gen, ads, websites, AI agents, and video — everything your B2B company needs to grow.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/business/contact" className="gsap-hero-cta opacity-0">
                <Button size="lg" className="rounded-lg font-medium gap-2">Get Started <ArrowRight size={16} /></Button>
              </Link>
              <Link to="/business/ai-agents" className="gsap-hero-cta opacity-0">
                <Button size="lg" variant="outline" className="rounded-lg font-medium">Explore AI Agents</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <SectionHeading tag="Services" title="7 ways we help B2B companies grow" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((s) => (
                <div key={s.title} className="gsap-service-card opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <s.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-bold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container max-w-3xl text-center gsap-spotlight opacity-0">
            <SectionHeading tag="Spotlight" title="AI Agents: The future of business ops" description="Custom-built AI agents that handle support, qualify leads, and automate workflows." />
            <Link to="/business/ai-agents">
              <Button size="lg" className="rounded-lg font-medium gap-2">Learn About AI Agents <ArrowRight size={16} /></Button>
            </Link>
          </div>
        </section>

        <section className="py-24">
          <div className="container max-w-3xl text-center gsap-mentorship opacity-0">
            <SectionHeading tag="Premium" title="1:1 Business Mentorship" description="Strategy, accountability, and execution support." />
            <Link to="/business/mentorship">
              <Button variant="outline" className="rounded-lg font-medium gap-2">Learn More <ArrowRight size={14} /></Button>
            </Link>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to grow your B2B business?" subtext="Let's have a conversation about your goals." ctaLabel="Contact Business Team" ctaHref="https://cal.com" />
    </Layout>
  );
}
