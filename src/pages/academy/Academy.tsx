import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, GraduationCap, Video, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const offerings = [
  { icon: GraduationCap, title: "Meta Ads Mastery Course", description: "The complete course on running profitable Meta Ads for fashion and D2C brands.", href: "/academy/meta-ads-course" },
  { icon: Video, title: "Live Webinars", description: "Weekly live sessions on ads, content, and growth. Free to join, packed with value.", href: "/academy/webinar" },
  { icon: Users, title: "Skool Community", description: "Join 500+ marketers and brand owners. Daily discussions, case studies, and support.", href: "/academy/community" },
];

const whoItsFor = [
  "D2C brand founders who want to run their own ads",
  "Marketing managers who need to level up their Meta Ads game",
  "Freelancers who want to offer ad services to clients",
  "Agency owners building or scaling their ad teams",
  "Anyone tired of generic marketing courses that don't work",
];

export default function Academy() {
  const containerRef = useGSAP((ctx, container) => {
    heroReveal(container.querySelector(".gsap-hero-section")!);
    scrollFadeIn(".gsap-offering-card", container, { stagger: 0.12, y: 50 });

    // Checklist items stagger
    gsap.fromTo(
      container.querySelectorAll(".gsap-check-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-checklist"),
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
          <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-blue-500/5" />
          <div className="container relative max-w-3xl">
            <span className="gsap-hero-tag inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4 opacity-0">WePix Academy</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              Learn from people who actually{" "}
              <span className="text-gradient">run the ads.</span>
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-hero-foreground/60 opacity-0">
              No theory. No fluff. Learn Meta Ads, content strategy, and digital marketing from practitioners who manage crores in ad spend.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/academy/meta-ads-course" className="gsap-hero-cta opacity-0">
                <Button size="lg" className="font-display font-semibold gap-2">
                  Explore the Course <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/academy/webinar" className="gsap-hero-cta opacity-0">
                <Button size="lg" variant="outline" className="font-display font-semibold border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10">
                  Join a Free Webinar
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Offerings */}
        <section className="py-20">
          <div className="container">
            <SectionHeading tag="What We Offer" title="Three ways to learn" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {offerings.map((o) => (
                <div key={o.title} className="gsap-offering-card opacity-0">
                  <Link to={o.href}>
                    <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border/50 group">
                      <CardContent className="p-6">
                        <o.icon className="text-primary mb-4" size={28} />
                        <h3 className="font-display text-xl font-bold mb-2">{o.title}</h3>
                        <p className="text-sm text-muted-foreground">{o.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more <ArrowRight size={14} className="ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-20 bg-muted/50">
          <div className="container max-w-3xl gsap-checklist">
            <SectionHeading tag="Is this for you?" title="Who WePix Academy is for" align="left" />
            <div className="space-y-3">
              {whoItsFor.map((item) => (
                <div key={item} className="gsap-check-item flex items-start gap-3 opacity-0">
                  <Check className="text-primary shrink-0 mt-0.5" size={20} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Ready to learn from the best?" subtext="Start with our Meta Ads course or join a free webinar." ctaLabel="Get Started" ctaHref="https://cal.com" />
    </Layout>
  );
}
