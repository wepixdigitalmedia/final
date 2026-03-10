import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Camera, Rocket, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const services = [
  { icon: Rocket, title: "Kickstarter Program", description: "60-day launch program for new D2C fashion brands.", href: "/fashion/kickstarter" },
  { icon: Camera, title: "WePixStudio", description: "AI-powered content creation at scale.", href: "/fashion/wepixstudio" },
  { icon: BarChart3, title: "Meta Ads Management", description: "Full-funnel ad management built on our MCS Framework.", href: "/fashion/book" },
];

const mcsSteps = [
  { step: "M", title: "Media", description: "Platform strategy, audience targeting, budget allocation." },
  { step: "C", title: "Creative", description: "Scroll-stopping ad creatives, UGC, product shoots." },
  { step: "S", title: "Strategy", description: "Full-funnel approach: awareness → conversion → retention." },
  { step: "4", title: "Iterate", description: "Weekly data reviews and continuous optimization." },
];

export default function Fashion() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-service-card", container, { stagger: 0.1, y: 30 });

    gsap.fromTo(
      container.querySelectorAll(".gsap-mcs-step"),
      { opacity: 0, scale: 0.9, y: 20 },
      {
        opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.2)",
        scrollTrigger: { trigger: container.querySelector(".gsap-mcs-section"), start: "top 75%", toggleActions: "play none none none" },
      }
    );

    gsap.fromTo(container.querySelector(".gsap-problem"), { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-problem"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-36">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Fashion</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              Your product is fire. Your marketing shouldn't be mid.
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground opacity-0">
              We help D2C fashion brands build real presence, create scroll-stopping content, and run ads that actually convert.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/fashion/kickstarter" className="gsap-hero-cta opacity-0">
                <Button size="lg" className="rounded-lg font-medium gap-2">Start with Kickstarter <ArrowRight size={16} /></Button>
              </Link>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="gsap-hero-cta opacity-0">
                <Button size="lg" variant="outline" className="rounded-lg font-medium">Book a Call</Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl text-center gsap-problem opacity-0">
            <h2 className="font-display text-3xl md:text-4xl font-bold">You've got a great product. So why aren't you selling?</h2>
            <p className="mt-6 text-lg text-muted-foreground">Because having a great product isn't enough anymore. You need content, ads, a store, and strategy. That's where we come in.</p>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Services" title="Everything your fashion brand needs" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {services.map((s) => (
                <div key={s.title} className="gsap-service-card opacity-0">
                  <Link to={s.href}>
                    <Card className="h-full hover:shadow-md transition-all rounded-xl border-border group">
                      <CardContent className="p-6">
                        <s.icon className="text-foreground mb-4" size={24} />
                        <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={14} className="ml-1" /></div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="gsap-mcs-section py-24">
          <div className="container">
            <SectionHeading tag="Our Framework" title="The MCS Framework" description="Media, Creative, Strategy — and constant iteration." />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {mcsSteps.map((step) => (
                <div key={step.step} className="gsap-mcs-step text-center opacity-0">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-display text-base font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to make your fashion brand unforgettable?" subtext="Book a free strategy call." ctaLabel="Book a Free Call" ctaHref="https://cal.com" />
    </Layout>
  );
}
