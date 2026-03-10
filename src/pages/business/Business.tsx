import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Bot, Target, BarChart3, Globe, Monitor, Video, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const services = [
  { icon: Target, title: "Organic Lead Gen", description: "LinkedIn, email, and content-driven lead generation for B2B companies." },
  { icon: BarChart3, title: "Meta Ads (B2B)", description: "Lead gen campaigns tailored for B2B funnels — not just clicks, qualified leads." },
  { icon: Globe, title: "Google Ads", description: "Search, display, and YouTube campaigns for high-intent B2B traffic." },
  { icon: Zap, title: "Enterprise Ads", description: "Large-scale campaigns for enterprises with complex funnels and multiple stakeholders." },
  { icon: Monitor, title: "Websites", description: "High-converting websites and landing pages built for B2B lead generation." },
  { icon: Bot, title: "AI Agents", description: "Custom AI agents for customer support, lead qualification, and workflow automation." },
  { icon: Video, title: "Video Production", description: "Corporate videos, explainers, case studies, and social content for B2B brands." },
];

export default function Business() {
  const containerRef = useGSAP((ctx, container) => {
    heroReveal(container.querySelector(".gsap-hero-section")!);
    scrollFadeIn(".gsap-service-card", container, { stagger: 0.08, y: 40 });

    // AI spotlight text
    gsap.fromTo(
      container.querySelector(".gsap-spotlight"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-spotlight"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Mentorship teaser
    gsap.fromTo(
      container.querySelector(".gsap-mentorship"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-mentorship"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section bg-hero text-hero-foreground py-24 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-purple-500/5" />
          <div className="container relative max-w-3xl">
            <span className="gsap-hero-tag inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4 opacity-0">WePix Business</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              B2B growth that's{" "}
              <span className="text-gradient">actually measurable.</span>
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-hero-foreground/60 opacity-0">
              Lead gen, ads, websites, AI agents, and video — everything your B2B company needs to grow. Based in Bangalore, working with businesses across India.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/business/contact" className="gsap-hero-cta opacity-0">
                <Button size="lg" className="font-display font-semibold gap-2">
                  Get Started <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/business/ai-agents" className="gsap-hero-cta opacity-0">
                <Button size="lg" variant="outline" className="font-display font-semibold border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10">
                  Explore AI Agents
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="container">
            <SectionHeading tag="Services" title="7 ways we help B2B companies grow" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((s) => (
                <div key={s.title} className="gsap-service-card opacity-0">
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <s.icon className="text-primary mb-3" size={24} />
                      <h3 className="font-display text-lg font-bold">{s.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{s.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents Spotlight */}
        <section className="py-20 bg-muted/50">
          <div className="container max-w-3xl text-center gsap-spotlight opacity-0">
            <SectionHeading tag="Spotlight" title="AI Agents: The future of business ops" description="Custom-built AI agents that handle customer support, qualify leads, automate workflows, and free up your team for high-value work." />
            <Link to="/business/ai-agents">
              <Button size="lg" className="font-display font-semibold gap-2">
                Learn About AI Agents <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Mentorship teaser */}
        <section className="py-20">
          <div className="container max-w-3xl text-center gsap-mentorship opacity-0">
            <SectionHeading tag="Premium" title="1:1 Business Mentorship" description="For founders and marketing leaders who want direct access to our team. Strategy, accountability, and execution support." />
            <Link to="/business/mentorship">
              <Button variant="outline" className="font-display font-semibold gap-2">
                Learn More <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to grow your B2B business?" subtext="Let's have a conversation about your goals." ctaLabel="Contact Business Team" ctaHref="https://cal.com" />
    </Layout>
  );
}
