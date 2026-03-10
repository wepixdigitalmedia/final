import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, animateCounter, gsap } from "@/hooks/useGSAP";

const brandCards = [
  { icon: ShoppingBag, title: "Fashion", description: "D2C fashion brands. Content, ads, and growth — end to end.", href: "/fashion" },
  { icon: GraduationCap, title: "Academy", description: "Learn Meta Ads and digital marketing from practitioners.", href: "/academy" },
  { icon: Briefcase, title: "Business", description: "B2B growth, AI agents, lead gen, and enterprise marketing.", href: "/business" },
  { icon: Sparkles, title: "Sourcing", description: "Tirupur-based garment sourcing for global brands.", href: "/contact" },
];

const caseStudies = [
  { brand: "Taasza", stat: "3x ROAS in 60 days", description: "Scaled a Tirupur-based ethnic wear brand from ₹0 to ₹5L/month revenue." },
  { brand: "BoonBabies", stat: "₹10L+ monthly revenue", description: "Built and launched a kids' fashion brand from scratch." },
  { brand: "Nutmeg", stat: "2.5x revenue growth", description: "Repositioned a premium menswear brand and doubled their online presence." },
];

const counters = [
  { end: 50, suffix: "+", prefix: "", label: "Brands Served" },
  { end: 2, suffix: "Cr+", prefix: "₹", label: "Ad Spend Managed" },
  { end: 10, suffix: "K+", prefix: "", label: "Creatives Made" },
  { end: 3, suffix: "x", prefix: "", label: "Avg. ROAS" },
];

const Index = () => {
  const containerRef = useGSAP((container) => {
    heroReveal(container);

    container.querySelectorAll<HTMLElement>(".gsap-counter-value").forEach((el) => {
      const end = Number(el.dataset.end);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      animateCounter(el, end, prefix, suffix, 2);
    });

    scrollFadeIn(".gsap-brand-card", container, { stagger: 0.08, y: 30 });
    scrollFadeIn(".gsap-case-card", container, { stagger: 0.1, y: 30 });

    gsap.fromTo(
      container.querySelectorAll(".gsap-founder-card"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.querySelector(".gsap-founders-section"),
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero — Cal.com style: white bg, large text, clean layout */}
        <section className="gsap-hero-section py-24 md:py-36 relative">
          <div className="container max-w-4xl text-center">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-6 opacity-0 px-4 py-1.5 rounded-full border border-border bg-muted">
              Digital Media Group
            </span>
            <h1 className="gsap-hero-title font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] opacity-0">
              We don't just run ads. We build brands.
            </h1>
            <p className="gsap-hero-desc mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0">
              Fashion. Education. Business. One crew that does content, ads, stores, and strategy — so you don't have to juggle five agencies.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <Link to="/fashion" className="gsap-hero-cta opacity-0">
                <Button size="lg" className="rounded-lg font-medium text-base gap-2 px-6">
                  Explore WePix <ArrowRight size={16} />
                </Button>
              </Link>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="gsap-hero-cta opacity-0">
                <Button size="lg" variant="outline" className="rounded-lg font-medium text-base px-6">
                  Book a Free Strategy Call
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Numbers Bar */}
        <section className="py-16 border-y border-border bg-muted/30">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((c) => (
              <div key={c.label} className="text-center">
                <p
                  className="gsap-counter-value font-display text-3xl md:text-4xl font-bold"
                  data-end={c.end}
                  data-prefix={c.prefix}
                  data-suffix={c.suffix}
                >
                  {c.prefix}0{c.suffix}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Navigator */}
        <section className="py-24">
          <div className="container">
            <SectionHeading
              tag="What We Do"
              title="Four verticals. One vision."
              description="WePix operates across fashion, education, business, and sourcing — each with dedicated teams."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {brandCards.map((card) => (
                <div key={card.title} className="gsap-brand-card opacity-0">
                  <Link to={card.href}>
                    <Card className="group h-full hover:shadow-md transition-all duration-200 rounded-xl border-border">
                      <CardContent className="p-6">
                        <card.icon className="text-foreground mb-4" size={24} />
                        <h3 className="font-display text-lg font-bold mb-2">{card.title}</h3>
                        <p className="text-sm text-muted-foreground">{card.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                          Explore <ArrowRight size={14} className="ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading
              tag="Results"
              title="Real brands. Real numbers."
              description="Here's what happened when brands trusted us with their growth."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseStudies.map((study) => (
                <div key={study.brand} className="gsap-case-card opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{study.brand}</span>
                      <p className="font-display text-2xl font-bold mt-2">{study.stat}</p>
                      <p className="text-sm text-muted-foreground mt-3">{study.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/fashion/case-studies">
                <Button variant="outline" className="rounded-lg font-medium gap-2">
                  View All Case Studies <ArrowRight size={14} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Manifesto Teaser */}
        <section className="py-24">
          <div className="container max-w-2xl text-center">
            <SectionHeading tag="Our Philosophy" title="We have opinions." />
            <p className="text-lg text-muted-foreground -mt-6">
              "We don't believe in cookie-cutter marketing. We believe in building brands that people actually care about — and we wrote a whole manifesto about it."
            </p>
            <Link to="/manifesto">
              <Button variant="outline" className="mt-8 rounded-lg font-medium gap-2">
                Read the Manifesto <ArrowRight size={14} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Founders */}
        <section className="gsap-founders-section py-24 border-t border-border">
          <div className="container">
            <SectionHeading tag="The Crew" title="Built by practitioners, not theorists." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                {
                  name: "Abdul Navas",
                  role: "Co-Founder & CEO",
                  bio: "Ex-textile industry. Turned a Tirupur garment background into a digital media powerhouse.",
                },
                {
                  name: "Santhosh",
                  role: "Co-Founder & COO",
                  bio: "The ops brain. Runs the machine that makes everything work — from ad accounts to client delivery.",
                },
              ].map((founder) => (
                <div key={founder.name} className="gsap-founder-card opacity-0">
                  <Card className="rounded-xl border-border">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <span className="font-display text-lg font-bold">{founder.name[0]}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{founder.role}</p>
                      <p className="text-sm text-muted-foreground mt-3">{founder.bio}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner
        headline="Ready to stop winging it?"
        subtext="Book a free strategy call. No pitch decks, no BS — just a conversation about your brand."
        ctaLabel="Book a Free Call"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
};

export default Index;
