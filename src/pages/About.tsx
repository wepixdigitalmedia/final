import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target, Heart } from "lucide-react";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const values = [
  { icon: Target, title: "Execution Over Theory", description: "We've run the ads, built the stores, shot the content. We teach and deliver from experience." },
  { icon: Lightbulb, title: "Innovation First", description: "AI tools, new platforms, fresh formats — we adopt what works before everyone else catches on." },
  { icon: Users, title: "Client as Partner", description: "We don't do 'vendor relationships.' You're part of the crew, and we treat your brand like ours." },
  { icon: Heart, title: "Built in Tirupur", description: "Born in the textile capital. We understand manufacturing, margins, and the grind of building something real." },
];

const timeline = [
  { year: "2019", event: "WePix founded in Tirupur by Abdul Navas and Santhosh" },
  { year: "2020", event: "First D2C fashion clients — figured out what actually works in fashion marketing" },
  { year: "2021", event: "Launched WePixStudio — AI-powered content creation for fashion brands" },
  { year: "2022", event: "Expanded to Bangalore. Business vertical launched for B2B clients" },
  { year: "2023", event: "Academy launched — Meta Ads course and Skool community" },
  { year: "2024", event: "50+ brands served. AI Agents division created. Group structure formalized." },
];

export default function About() {
  const containerRef = useGSAP((ctx, container) => {
    heroReveal(container.querySelector(".gsap-hero-section")!);

    // Timeline items slide in from left with stagger
    gsap.fromTo(
      container.querySelectorAll(".gsap-timeline-item"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-timeline-section"),
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    // Timeline line draw
    gsap.fromTo(
      container.querySelectorAll(".gsap-timeline-line"),
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.inOut",
        transformOrigin: "top center",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-timeline-section"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Value cards
    scrollFadeIn(".gsap-value-card", container, { stagger: 0.12, y: 40 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="gsap-hero-section bg-hero text-hero-foreground py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4 opacity-0">About Us</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] opacity-0">
              Two guys from Tirupur who decided marketing needed to be{" "}
              <span className="text-gradient">built different.</span>
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg text-hero-foreground/60 opacity-0">
              WePix started because we were tired of agencies that overpromise and underdeliver. So we built one that actually does the work — content, ads, strategy, everything.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="gsap-timeline-section py-20">
          <div className="container max-w-3xl">
            <SectionHeading tag="Our Journey" title="How we got here" align="left" />
            <div className="relative">
              <div className="gsap-timeline-line absolute left-[31px] top-0 bottom-0 w-px bg-border" />
              <div className="space-y-0">
                {timeline.map((item) => (
                  <div key={item.year} className="gsap-timeline-item flex gap-6 py-6 border-b border-border last:border-0 opacity-0 relative">
                    <div className="relative z-10 w-3 h-3 rounded-full bg-primary mt-2 shrink-0 ml-[25px]" />
                    <div className="flex gap-4 items-start flex-1">
                      <span className="font-display text-2xl font-bold text-primary shrink-0 w-16">{item.year}</span>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <SectionHeading tag="Culture" title="What we actually believe in" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="gsap-value-card opacity-0">
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <v.icon className="text-primary mb-3" size={28} />
                      <h3 className="font-display text-lg font-bold">{v.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{v.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-20">
          <div className="container">
            <SectionHeading tag="Offices" title="Where we work" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-border/50 overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40721379252!2d77.2813462!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0754cb741%3A0x60a0b7a69e3e25e8!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    title="Tirupur Office"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-display font-bold">Tirupur, Tamil Nadu</h3>
                  <p className="text-sm text-muted-foreground">HQ — Where it all started</p>
                </CardContent>
              </Card>
              <Card className="border-border/50 overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908809!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                    title="Bangalore Office"
                  />
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
