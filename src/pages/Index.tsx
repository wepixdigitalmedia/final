import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const brandCards = [
  {
    icon: ShoppingBag,
    title: "Fashion",
    description: "D2C fashion brands. Content, ads, and growth — end to end.",
    href: "/fashion",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Learn Meta Ads, content strategy, and digital marketing from practitioners.",
    href: "/academy",
    color: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "B2B growth, AI agents, lead gen, and enterprise-grade marketing.",
    href: "/business",
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    icon: Sparkles,
    title: "Sourcing",
    description: "Tirupur-based garment sourcing for global brands.",
    href: "/contact",
    color: "from-orange-500/20 to-orange-500/5",
  },
];

const caseStudies = [
  { brand: "Taasza", stat: "3x ROAS in 60 days", description: "Scaled a Tirupur-based ethnic wear brand from ₹0 to ₹5L/month revenue." },
  { brand: "BoonBabies", stat: "₹10L+ monthly revenue", description: "Built and launched a kids' fashion brand from scratch — content, store, and ads." },
  { brand: "Nutmeg", stat: "2.5x revenue growth", description: "Repositioned a premium menswear brand and doubled their online presence." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-primary/10" />
        <div className="container relative py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-6">
              Digital Media Group
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              We don't just run ads.{" "}
              <span className="text-gradient">We build brands.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-hero-foreground/60 max-w-xl">
              Fashion. Education. Business. One crew that does content, ads, stores, and strategy — so you don't have to juggle five agencies.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/fashion">
                <Button size="lg" className="font-display font-semibold text-base gap-2 px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/80 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                  Explore WePix <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-display font-semibold text-base px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-200">
                  Book a Free Strategy Call
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers Bar */}
      <section className="py-16 border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={50} suffix="+" label="Brands Served" />
          <AnimatedCounter end={2} suffix="Cr+" prefix="₹" label="Ad Spend Managed" />
          <AnimatedCounter end={10} suffix="K+" label="Creatives Made" />
          <AnimatedCounter end={3} suffix="x" label="Avg. ROAS" />
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
            {brandCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
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
              </motion.div>
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
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <span className="text-xs font-display font-semibold uppercase tracking-widest text-primary">{study.brand}</span>
                    <p className="font-display text-2xl font-bold mt-2">{study.stat}</p>
                    <p className="text-sm text-muted-foreground mt-3">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
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
        <div className="container max-w-3xl text-center">
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
      <section className="py-20 bg-muted/50">
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
              <Card key={founder.name} className="border-border/50">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="font-display text-xl font-bold text-primary">{founder.name[0]}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{founder.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mt-3">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
