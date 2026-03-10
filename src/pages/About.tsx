import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target, Heart } from "lucide-react";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const values = [
  { icon: Target, title: "Execution Over Theory", description: "We've run the ads, built the stores, shot the content. We teach and deliver from experience." },
  { icon: Lightbulb, title: "Innovation First", description: "AI tools, new platforms, fresh formats — we adopt what works before everyone else." },
  { icon: Users, title: "Client as Partner", description: "We don't do 'vendor relationships.' You're part of the crew." },
  { icon: Heart, title: "Built in Tirupur", description: "Born in the textile capital. We understand manufacturing, margins, and the grind." },
];

const timeline = [
  { year: "2019", event: "WePix founded in Tirupur by Abdul Navas and Santhosh" },
  { year: "2020", event: "First D2C fashion clients — figured out what works in fashion marketing" },
  { year: "2021", event: "Launched WePixStudio — AI-powered content creation" },
  { year: "2022", event: "Expanded to Bangalore. Business vertical launched" },
  { year: "2023", event: "Academy launched — Meta Ads course and Skool community" },
  { year: "2024", event: "50+ brands served. AI Agents division created." },
];

export default function About() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);

    gsap.fromTo(
      container.querySelectorAll(".gsap-timeline-item"),
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: container.querySelector(".gsap-timeline-section"), start: "top 75%", toggleActions: "play none none none" },
      }
    );

    scrollFadeIn(".gsap-value-card", container, { stagger: 0.1, y: 30 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">About Us</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              Two guys from Tirupur who decided marketing needed to be built different.
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground opacity-0">
              WePix started because we were tired of agencies that overpromise and underdeliver.
            </p>
          </div>
        </section>

        <section className="gsap-timeline-section py-24 border-t border-border">
          <div className="container max-w-3xl">
            <SectionHeading tag="Our Journey" title="How we got here" align="left" />
            <div className="space-y-0">
              {timeline.map((item) => (
                <div key={item.year} className="gsap-timeline-item flex gap-6 py-5 border-b border-border last:border-0 opacity-0">
                  <span className="font-display text-xl font-bold text-foreground shrink-0 w-14">{item.year}</span>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Culture" title="What we believe in" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="gsap-value-card opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <v.icon className="text-foreground mb-3" size={24} />
                      <h3 className="font-display text-lg font-bold">{v.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{v.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container">
            <SectionHeading tag="Offices" title="Where we work" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="rounded-xl border-border overflow-hidden">
                <div className="aspect-video bg-muted">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40721379252!2d77.2813462!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0754cb741%3A0x60a0b7a69e3e25e8!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Tirupur Office" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-bold">Tirupur, Tamil Nadu</h3>
                  <p className="text-sm text-muted-foreground">HQ — Where it all started</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-border overflow-hidden">
                <div className="aspect-video bg-muted">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908809!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Bangalore Office" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-bold">Bangalore, Karnataka</h3>
                  <p className="text-sm text-muted-foreground">Business & B2B division</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Want to work with us?" subtext="We're always looking for brands that want to build something real." ctaLabel="Get in Touch" ctaHref="https://cal.com" />
    </Layout>
  );
}
