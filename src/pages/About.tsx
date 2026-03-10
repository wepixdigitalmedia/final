import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, Target, Heart } from "lucide-react";
import { useGSAP, heroReveal, scrollFadeIn, gsap } from "@/hooks/useGSAP";

const values = [
  { icon: Target, title: "Execution Over Theory", description: "We've burnt our own money on bad ads. We've stayed up at 3 AM optimizing campaigns. We teach and deliver from experience, not from a textbook we read once. 💪" },
  { icon: Lightbulb, title: "Innovation First", description: "While other agencies are still figuring out Reels, we're already using AI tools, testing new platforms, and breaking things. We adopt what works before it becomes a LinkedIn thought leader cliché. ⚡" },
  { icon: Users, title: "Client as Partner", description: "We don't do 'vendor relationships.' You're part of the crew. We celebrate your wins, stress about your numbers, and argue about your brand colors at 11 PM. That's just how we roll. 🤝" },
  { icon: Heart, title: "Built in Tirupur", description: "Born in the textile capital of India. We understand manufacturing margins, seasonal inventory nightmares, and the beautiful chaos of the garment industry. It's in our DNA. 🧵" },
];

const timeline = [
  { year: "2019", event: "Two friends from Tirupur said 'we can do marketing better than these agencies' and WePix was born. (Spoiler: they were right.)" },
  { year: "2020", event: "First D2C fashion clients came in. We burned through a lot of trial-and-error (and chai) figuring out what actually works in fashion marketing." },
  { year: "2021", event: "Launched WePixStudio — our AI-powered content creation tool. Because hiring photographers for 200 SKUs is insane." },
  { year: "2022", event: "Expanded to Bangalore because we needed better coffee. (Also, the business vertical launched. That too.)" },
  { year: "2023", event: "Academy launched — because people kept DM-ing us 'bro teach me Meta Ads' so we made a whole course out of it." },
  { year: "2024", event: "50+ brands served. AI Agents division created. At this point, we're basically a tech company that happens to be really good at marketing." },
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
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">About Us</span>
                <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] opacity-0">
                  Two guys from Tirupur who got tired of trash marketing and decided to fix it. 🛠️
                </h1>
                <p className="gsap-hero-desc mt-6 text-lg text-muted-foreground opacity-0">
                  WePix started because we were frustrated. Frustrated with agencies charging lakhs for mediocre work. Frustrated with marketers who couldn't tell the difference between reach and revenue. So we thought, "How hard can it be?" Turns out, very hard — but we figured it out anyway, and now we're helping 50+ brands do the same.
                </p>
              </div>
              <ImagePlaceholder label="Team photo" aspectRatio="square" className="gsap-hero-cta opacity-0" />
            </div>
          </div>
        </section>

        {/* Team Gallery */}
        <section className="py-16 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ImagePlaceholder label="Office life 1" aspectRatio="square" />
              <ImagePlaceholder label="Office life 2" aspectRatio="square" />
              <ImagePlaceholder label="Team meeting" aspectRatio="square" />
              <ImagePlaceholder label="Behind the scenes" aspectRatio="square" />
            </div>
          </div>
        </section>

        <section className="gsap-timeline-section py-24 border-t border-border">
          <div className="container max-w-3xl">
            <SectionHeading tag="Our Journey" title="The plot so far" align="left" />
            <div className="space-y-0">
              {timeline.map((item) => (
                <div key={item.year} className="gsap-timeline-item flex gap-6 py-5 border-b border-border last:border-0 opacity-0">
                  <span className="font-display text-xl font-semibold text-foreground shrink-0 w-14">{item.year}</span>
                  <p className="text-muted-foreground">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Culture" title="Things we'd fight for" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {values.map((v) => (
                <div key={v.title} className="gsap-value-card opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <v.icon className="text-foreground mb-3" size={24} />
                      <h3 className="font-display text-lg font-semibold">{v.title}</h3>
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
            <SectionHeading tag="Offices" title="Where the magic happens" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="rounded-xl border-border overflow-hidden">
                <ImagePlaceholder label="Tirupur office photo" aspectRatio="video" className="rounded-none border-0 border-b-2" />
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold">Tirupur, Tamil Nadu 🏠</h3>
                  <p className="text-sm text-muted-foreground">HQ — Where it all started (and where the best filter coffee is)</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-border overflow-hidden">
                <ImagePlaceholder label="Bangalore office photo" aspectRatio="video" className="rounded-none border-0 border-b-2" />
                <CardContent className="p-4">
                  <h3 className="font-display font-semibold">Bangalore, Karnataka ☕</h3>
                  <p className="text-sm text-muted-foreground">Business & B2B division (the fancy one)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <CTABanner headline="Wanna be part of the story? 📖" subtext="We're always looking for brands that are done with mediocre marketing and ready to build something people actually care about." ctaLabel="Get in Touch" ctaHref="https://cal.com" />
    </Layout>
  );
}
