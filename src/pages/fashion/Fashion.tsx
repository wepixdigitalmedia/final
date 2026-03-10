import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ArrowRight, Camera, Rocket, BarChart3, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { icon: Rocket, title: "Kickstarter Program", description: "60-day launch program for new D2C fashion brands. Store, content, ads — everything from zero to selling.", href: "/fashion/kickstarter" },
  { icon: Camera, title: "WePixStudio", description: "AI-powered content creation. Professional product shoots, lifestyle content, and ad creatives at scale.", href: "/fashion/wepixstudio" },
  { icon: BarChart3, title: "Meta Ads Management", description: "Full-funnel ad management built on our MCS Framework. Strategy, creative, media — all in-house.", href: "/fashion/book" },
];

const mcsSteps = [
  { step: "M", title: "Media", description: "Platform strategy, audience targeting, budget allocation, and campaign architecture." },
  { step: "C", title: "Creative", description: "Scroll-stopping ad creatives, UGC, product shoots, and dynamic formats." },
  { step: "S", title: "Strategy", description: "Full-funnel approach: awareness → consideration → conversion → retention." },
  { step: "4", title: "Iterate", description: "Weekly data reviews, creative refreshes, and continuous optimization loops." },
];

export default function Fashion() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-primary/5" />
        <div className="container relative max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">WePix Fashion</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Your product is fire.{" "}
              <span className="text-gradient">Your marketing shouldn't be mid.</span>
            </h1>
            <p className="mt-6 text-lg text-hero-foreground/60">
              We help D2C fashion brands build real presence, create scroll-stopping content, and run ads that actually convert. End to end.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/fashion/kickstarter">
                <Button size="lg" className="font-display font-semibold gap-2">
                  Start with Kickstarter <ArrowRight size={18} />
                </Button>
              </Link>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-display font-semibold border-hero-foreground/20 text-hero-foreground hover:bg-hero-foreground/10">
                  Book a Call
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            You've got a great product. So why aren't you selling?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Because having a great product isn't enough anymore. You need content that stops the scroll, ads that convert, a store that doesn't leak money, and a strategy that compounds. That's where we come in.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading tag="Services" title="Everything your fashion brand needs" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={s.href}>
                  <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-border/50 group">
                    <CardContent className="p-6">
                      <s.icon className="text-primary mb-4" size={28} />
                      <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight size={14} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MCS Framework */}
      <section className="py-20">
        <div className="container">
          <SectionHeading tag="Our Framework" title="The MCS Framework" description="The system behind every successful campaign we run. Media, Creative, Strategy — and constant iteration." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {mcsSteps.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to make your fashion brand unforgettable?"
        subtext="Book a free strategy call. Let's figure out what's holding your brand back."
        ctaLabel="Book a Free Call"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
}
