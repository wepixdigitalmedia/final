import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useGSAP, heroReveal, scrollFadeIn, animateCounter, parallaxBg, gsap } from "@/hooks/useGSAP";

const brandCards = [
  { icon: ShoppingBag, title: "Fashion", description: "D2C fashion brands. Content, ads, and growth — end to end.", href: "/fashion", color: "from-primary/20 to-primary/5" },
  { icon: GraduationCap, title: "Academy", description: "Learn Meta Ads, content strategy, and digital marketing from practitioners.", href: "/academy", color: "from-blue-500/20 to-blue-500/5" },
  { icon: Briefcase, title: "Business", description: "B2B growth, AI agents, lead gen, and enterprise-grade marketing.", href: "/business", color: "from-purple-500/20 to-purple-500/5" },
  { icon: Sparkles, title: "Sourcing", description: "Tirupur-based garment sourcing for global brands.", href: "/contact", color: "from-orange-500/20 to-orange-500/5" },
];

const caseStudies = [
  { brand: "Taasza", stat: "3x ROAS in 60 days", description: "Scaled a Tirupur-based ethnic wear brand from ₹0 to ₹5L/month revenue." },
  { brand: "BoonBabies", stat: "₹10L+ monthly revenue", description: "Built and launched a kids' fashion brand from scratch — content, store, and ads." },
  { brand: "Nutmeg", stat: "2.5x revenue growth", description: "Repositioned a premium menswear brand and doubled their online presence." },
];

const counters = [
  { end: 50, suffix: "+", prefix: "", label: "Brands Served" },
  { end: 2, suffix: "Cr+", prefix: "₹", label: "Ad Spend Managed" },
  { end: 10, suffix: "K+", prefix: "", label: "Creatives Made" },
  { end: 3, suffix: "x", prefix: "", label: "Avg. ROAS" },
];

const Index = () => {
  const containerRef = useGSAP((ctx, container) => {
    // Hero reveal
    heroReveal(container.querySelector(".gsap-hero-section")!);

    // Parallax on hero gradient
    parallaxBg(".gsap-hero-bg", container, 0.4);

    // Counter animations
    container.querySelectorAll<HTMLElement>(".gsap-counter-value").forEach((el) => {
      const end = Number(el.dataset.end);
      const prefix = el.dataset.prefix || "";
      const suffix = el.dataset.suffix || "";
      animateCounter(el, end, prefix, suffix, 2);
    });

    // Brand cards stagger
    scrollFadeIn(".gsap-brand-card", container, { stagger: 0.1, y: 50 });

    // Case study cards
    scrollFadeIn(".gsap-case-card", container, { stagger: 0.15, y: 40 });

    // Manifesto section
    scrollFadeIn(".gsap-manifesto", container, { y: 30, duration: 0.7 });

    // Founder cards
    gsap.fromTo(
      container.querySelectorAll(".gsap-founder-card"),
      { opacity: 0, x: (i: number) => (i === 0 ? -40 : 40) },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
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
        {/* Hero */}
        <section className="gsap-hero-section bg-hero text-hero-foreground relative overflow-hidden">
          <div className="gsap-hero-bg absolute inset-0 bg-gradient-to-br from-hero via-hero to-primary/10" />
          <div className="container relative py-24 md:py-36">
            <div className="max-w-3xl">
              <span className="gsap-hero-tag inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-6 opacity-0">
                Digital Media Group
              </span>
              <h1 className="gsap-hero-title font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] opacity-0">
                We don't just run ads.{" "}
                <span className="text-gradient">We build brands.</span>
              </h1>
              <p className="gsap-hero-desc mt-6 text-lg md:text-xl text-hero-foreground/60 max-w-xl opacity-0">
                Fashion. Education. Business. One crew that does content, ads, stores, and strategy — so you don't have to juggle five agencies.
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/fashion" className="gsap-hero-cta opacity-0">
                  <Button size="lg" className="font-display font-semibold text-base gap-2 px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                    Explore WePix <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="gsap-hero-cta opacity-0">
                  <Button size="lg" variant="outline" className="font-display font-semibold text-base px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200">
                    Book a Free Strategy Call
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Numbers Bar */}
        <section className="py-16 border-b border-border">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((c) => (
              <div key={c.label} className="text-center">
                <p
                  className="gsap-counter-value font-display text-3xl md:text-4xl font-bold text-primary"
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
        <section className="py-20 md:py-28">
          <div className="container">
            <SectionHeading
              tag="What We Do"
              title="Four verticals. One vision."
              description="We're not a one-trick agency. WePix operates across fashion, education, business, and sourcing — each with dedicated teams and strategies."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandCards.map((card) => (
                <div key={card.title} className="gsap-brand-card opacity-0">
                  <Link to={card.href}>
                    <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                          <card.icon className="text-foreground" size={24} />
                        </div>
                        <h3 className="font-display text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-sm text-muted-foreground">{card.description}</p>
                        <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Case Studies Teaser */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <SectionHeading
              tag="Results"
              title="Real brands. Real numbers."
              description="We don't do vanity metrics. Here's what happened when brands trusted us with their growth."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div key={study.brand} className="gsap-case-card opacity-0">
                  <Card className="h-full border-border/50">
                    <CardContent className="p-6">
                      <span className="text-xs font-display font-semibold uppercase tracking-widest text-primary">{study.brand}</span>
                      <p className="font-display text-2xl font-bold mt-2">{study.stat}</p>
                      <p className="text-sm text-muted-foreground mt-3">{study.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/fashion/case-studies">
                <Button variant="outline" className="font-display font-semibold gap-2">
                  View All Case Studies <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Manifesto Teaser */}
        <section className="py-20">
          <div className="container max-w-3xl text-center gsap-manifesto opacity-0">
            <SectionHeading tag="Our Philosophy" title="We have opinions." />
            <p className="text-lg text-muted-foreground -mt-6">
              "We don't believe in cookie-cutter marketing. We don't believe in 'just run ads.' We believe in building brands that people actually care about — and we wrote a whole manifesto about it."
            </p>
            <Link to="/manifesto">
              <Button variant="outline" className="mt-8 font-display font-semibold gap-2">
                Read the Manifesto <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </section>

        {/* Founders */}
        <section className="gsap-founders-section py-20 bg-muted/50">
          <div className="container">
            <SectionHeading tag="The Crew" title="Built by practitioners, not theorists." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Abdul Navas",
                  role: "Co-Founder & CEO",
                  bio: "Ex-textile industry. Turned a Tirupur garment background into a digital media powerhouse. Obsessed with D2C fashion and making brands that don't suck.",
                },
                {
                  name: "Santhosh",
                  role: "Co-Founder & COO",
                  bio: "The ops brain. Runs the machine that makes everything work — from ad accounts to client delivery. If something's running smoothly, it's probably because of him.",
                },
              ].map((founder) => (
                <div key={founder.name} className="gsap-founder-card opacity-0">
                  <Card className="border-border/50">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <span className="font-display text-xl font-bold text-primary">{founder.name[0]}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold">{founder.name}</h3>
                      <p className="text-sm text-primary font-medium mt-1">{founder.role}</p>
                      <p className="text-sm text-muted-foreground mt-3">{founder.bio}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Banner */}
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
