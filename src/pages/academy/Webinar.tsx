import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Video, Calendar, ArrowRight } from "lucide-react";

const pastWebinars = [
  { title: "Meta Ads in 2024: What Actually Works", date: "March 2024", attendees: "250+" },
  { title: "Content Strategy for D2C Fashion Brands", date: "February 2024", attendees: "180+" },
  { title: "From ₹0 to ₹10L/month: A Case Study", date: "January 2024", attendees: "300+" },
  { title: "AI Tools Every Marketer Should Be Using", date: "December 2023", attendees: "200+" },
];

export default function Webinar() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-webinar", container, { stagger: 0.08, y: 25 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Webinars</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Free live sessions. Real insights.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Join our weekly webinars. Free to attend, packed with value.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-3xl">
            <Card className="rounded-xl border-border">
              <CardContent className="p-8 text-center">
                <Calendar className="text-foreground mx-auto mb-4" size={28} />
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">Next Webinar</span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-3">Scaling Meta Ads: The 2024 Playbook</h2>
                <p className="text-muted-foreground mt-2">Friday, 7 PM IST • Free to Join</p>
                <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="mt-6 rounded-lg font-medium gap-2">Register Now <ArrowRight size={16} /></Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Past Sessions" title="Recordings available" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pastWebinars.map((w) => (
                <div key={w.title} className="gsap-webinar opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Video className="text-foreground" size={16} />
                        <span className="text-xs text-muted-foreground">{w.date} • {w.attendees} attendees</span>
                      </div>
                      <h3 className="font-display text-base font-bold">{w.title}</h3>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
