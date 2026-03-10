import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, GraduationCap, Video, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const offerings = [
  { icon: GraduationCap, title: "Meta Ads Mastery Course", description: "The complete course on running profitable Meta Ads.", href: "/academy/meta-ads-course" },
  { icon: Video, title: "Live Webinars", description: "Weekly live sessions on ads, content, and growth.", href: "/academy/webinar" },
  { icon: Users, title: "Skool Community", description: "Join 500+ marketers and brand owners.", href: "/academy/community" },
];

const whoItsFor = [
  "D2C brand founders who want to run their own ads",
  "Marketing managers who need to level up their Meta Ads game",
  "Freelancers who want to offer ad services to clients",
  "Agency owners building or scaling their ad teams",
  "Anyone tired of generic marketing courses that don't work",
];

export default function Academy() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-offering-card", container, { stagger: 0.1, y: 30 });

    gsap.fromTo(
      container.querySelectorAll(".gsap-check-item"),
      { opacity: 0, x: -20 },
      {
        opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
        scrollTrigger: { trigger: container.querySelector(".gsap-checklist"), start: "top 80%", toggleActions: "play none none none" },
      }
    );
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-36">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePix Academy</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              Learn from people who actually run the ads.
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground opacity-0">
              No theory. No fluff. Learn Meta Ads and digital marketing from practitioners who manage crores in ad spend.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/academy/meta-ads-course" className="gsap-hero-cta opacity-0">
                <Button size="lg" className="rounded-lg font-medium gap-2">Explore the Course <ArrowRight size={16} /></Button>
              </Link>
              <Link to="/academy/webinar" className="gsap-hero-cta opacity-0">
                <Button size="lg" variant="outline" className="rounded-lg font-medium">Join a Free Webinar</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <SectionHeading tag="What We Offer" title="Three ways to learn" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {offerings.map((o) => (
                <div key={o.title} className="gsap-offering-card opacity-0">
                  <Link to={o.href}>
                    <Card className="h-full hover:shadow-md transition-all rounded-xl border-border group">
                      <CardContent className="p-6">
                        <o.icon className="text-foreground mb-4" size={24} />
                        <h3 className="font-display text-lg font-bold mb-2">{o.title}</h3>
                        <p className="text-sm text-muted-foreground">{o.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRight size={14} className="ml-1" /></div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container max-w-3xl gsap-checklist">
            <SectionHeading tag="Is this for you?" title="Who WePix Academy is for" align="left" />
            <div className="space-y-3">
              {whoItsFor.map((item) => (
                <div key={item} className="gsap-check-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
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
