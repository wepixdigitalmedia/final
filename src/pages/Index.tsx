import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { ArrowRight, Sparkles, GraduationCap, Briefcase, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";

const brandCards = [
  {
    icon: ShoppingBag,
    title: "Fashion",
    description: "Your clothes deserve better than a boring Instagram grid. We do content, ads, and growth — the whole shebang. 🔥",
    href: "/fashion",
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: GraduationCap,
    title: "Academy",
    description: "Learn Meta Ads from people who've actually burned their own money figuring it out. No cap, just real playbooks. 📚",
    href: "/academy",
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Briefcase,
    title: "Business",
    description: "B2B doesn't have to be boring. AI agents, lead gen, and marketing that makes your competitors nervous. 💼",
    href: "/business",
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Sparkles,
    title: "Sourcing",
    description: "Straight from Tirupur — the garment capital. Quality fabrics, honest pricing, no middleman drama. 🧵",
    href: "/contact",
    color: "from-orange-500/20 to-orange-500/5"
  }
];

const caseStudies = [
  { brand: "Taasza", stat: "3x ROAS in 60 days", description: "They came to us with zero online presence and a prayer. We gave them a Shopify store, fire content, and Meta Ads that actually slapped. Two months later? ₹5L/month rolling in. 📈" },
  { brand: "BoonBabies", stat: "₹10L+ monthly revenue", description: "A kids' fashion brand with adorable products but zero marketing game. We built everything from scratch — branding, content, store, ads. Now their DMs are busier than a Mumbai local train. 🚂" },
  { brand: "Nutmeg", stat: "2.5x revenue growth", description: "Premium menswear brand that was criminally underperforming online. We repositioned them, created chef's-kiss content, and doubled their digital presence. The founder literally sent us biryani. 🍛" }
];

const Index = () => {
  const { displayText, showCursor } = useTypewriter();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hero via-hero to-primary/10" />
        <div className="container relative py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              
              <span className="inline-block text-xs font-display font-medium uppercase tracking-widest text-primary mb-6">
                Digital Media Group
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15]">
                We don't just run ads.{" "}
                <span className="text-gradient">{displayText}</span>
                <span className={`inline-block w-[3px] h-[0.85em] bg-foreground ml-0.5 align-middle rounded-sm transition-opacity duration-100 ${showCursor ? "opacity-100" : "opacity-0"}`} />
              </h1>
              <p className="mt-5 text-base md:text-lg text-hero-foreground/60">
                Picture this: you've got an amazing product, but your marketing looks like it was done by your cousin's friend who "knows Canva." Yeah, we fix that. Fashion, education, business — one crew that handles everything so you can stop losing sleep over your Instagram reach. 😮‍💨
              </p>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/fashion">
                  <Button size="lg" className="font-display font-medium text-base gap-2">
                    Explore WePix <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="font-display font-medium text-base bg-primary text-primary-foreground hover:bg-primary/90">
                    Book a Free Strategy Call
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/21eDkPqQcXCF2sJcyeMn/media/68a62b3d280b9e3bebb53f6c.gif"
                alt="WePix VSL"
                className="w-full h-auto"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers Bar */}
      <section className="py-16 border-b border-border">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={50} suffix="+" label="Brands Who Trust Us" />
          <AnimatedCounter end={2} suffix="Cr+" prefix="₹" label="Ad Spend We've Managed" />
          <AnimatedCounter end={10} suffix="K+" label="Creatives Crafted" />
          <AnimatedCounter end={3} suffix="x" label="Avg. ROAS (yeah, really)" />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground text-center mb-8">Trusted by brands like</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <ImagePlaceholder key={i} label={`Logo ${i + 1}`} aspectRatio="video" className="border border-border rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Navigator */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            tag="What We Do"
            title="Four verticals. One obsession."
            description="We're not your average agency that slaps a logo on everything and calls it a day. WePix runs four distinct verticals — each with its own team, strategy, and unhealthy amount of passion. Think of us as the Avengers of marketing, minus the capes (okay, sometimes capes)." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandCards.map((card, i) =>
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Link to={card.href}>
                  <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                    <ImagePlaceholder label={`${card.title} cover`} aspectRatio="video" className="rounded-t-xl rounded-b-none border-0 border-b-2" />
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                        <card.icon className="text-foreground" size={24} />
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{card.title}</h3>
                      <p className="text-sm text-muted-foreground">{card.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight size={14} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading
            tag="Results"
            title="Real brands. Real money. Real stories."
            description="We don't do vanity metrics. Nobody cares about your 'reach' when you can't pay rent. Here's what happened when brands stopped settling for mid agencies and trusted us with their growth." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) =>
              <motion.div
                key={study.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="h-full border-border/50">
                  <ImagePlaceholder label={`${study.brand} results`} aspectRatio="video" className="rounded-t-xl rounded-b-none border-0 border-b-2" />
                  <CardContent className="p-6">
                    <span className="text-xs font-display font-medium uppercase tracking-widest text-primary">{study.brand}</span>
                    <p className="font-display text-2xl font-semibold mt-2">{study.stat}</p>
                    <p className="text-sm text-muted-foreground mt-3">{study.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
          <div className="text-center mt-10">
            <Link to="/fashion/case-studies">
              <Button variant="outline" className="font-display font-medium gap-2">
                View All Case Studies <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Teaser */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <SectionHeading tag="Our Philosophy" title="We have opinions. Strong ones." />
          <p className="text-lg text-muted-foreground -mt-6">
            "We don't believe in cookie-cutter marketing. We don't believe in 'just boost the post bro.' We believe in building brands that people genuinely care about — the kind where customers slide into your DMs saying 'I NEED this.' We wrote a whole manifesto about it because we're dramatic like that." ✍️
          </p>
          <Link to="/manifesto">
            <Button variant="outline" className="mt-8 font-display font-medium gap-2">
              Read the Manifesto <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading tag="The Crew" title="Built by doers, not PowerPoint warriors." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Abdul Navas",
                role: "Co-Founder & CEO",
                bio: "Grew up surrounded by textile factories in Tirupur, where the air smells like cotton and hustle. Turned that garment background into a digital media powerhouse because he was tired of seeing amazing products marketed terribly. His superpower? Making D2C fashion brands go from 'meh' to 'take my money.' Also, he's weirdly good at predicting which ad creative will win. 🎯"
              },
              {
                name: "Santhosh",
                role: "Co-Founder & COO",
                bio: "The guy who makes sure nothing falls apart. While Abdul's out there dreaming big, Santhosh is the one building the engine that makes everything run. Ad accounts, client delivery, team ops — if something's working smoothly, it's because he lost sleep over it. Clients love him because he actually replies to messages. (A rare skill in this industry, apparently.) 😄"
              }
            ].map((founder) =>
              <Card key={founder.name} className="border-border/50 overflow-hidden">
                <ImagePlaceholder label={`${founder.name} photo`} aspectRatio="square" className="rounded-none border-0 border-b-2" />
                <CardContent className="p-8">
                  <h3 className="font-display text-xl font-semibold">{founder.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mt-3">{founder.bio}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to stop winging it? 🚀"
        subtext="Book a free strategy call. No pitch decks, no corporate jargon, no 'let me circle back' — just a real conversation about your brand over virtual chai."
        ctaLabel="Book a Free Call"
        ctaHref="https://cal.com" />
    </Layout>
  );
};

export default Index;
