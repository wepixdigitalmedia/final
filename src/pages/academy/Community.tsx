import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
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
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-benefit"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-benefits"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Community</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Your marketing crew. Always online.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Join 500+ marketers in the WePix Skool community.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              {[
                { icon: Users, stat: "500+", label: "Members" },
                { icon: MessageSquare, stat: "50+", label: "Posts/week" },
                { icon: BookOpen, stat: "100+", label: "Resources" },
              ].map((s) => (
                <Card key={s.label} className="rounded-xl border-border text-center">
                  <CardContent className="p-6">
                    <s.icon className="text-foreground mx-auto mb-3" size={24} />
                    <p className="font-display text-3xl font-bold">{s.stat}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="gsap-benefits">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">What you get</h2>
              <div className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <div key={b} className="gsap-benefit flex items-start gap-3 opacity-0">
                    <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                    <p className="text-lg">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://www.skool.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-lg font-medium gap-2">Join the Community on Skool <ArrowRight size={16} /></Button>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
