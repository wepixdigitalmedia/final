import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Sparkles, Image, Zap, Sliders, Camera, Sun, Monitor, Award, ArrowRight, Check, X } from "lucide-react";
import { motion } from "framer-motion";

const REGISTER_URL = "https://wepixstudio.app/register";
const APP_URL = "https://wepixstudio.app";

const features = [
  { icon: Sparkles, title: "AI-Powered Generation", desc: "Leverage cutting-edge AI to create stunning product photos without a studio, model, or camera." },
  { icon: Monitor, title: "Multiple Output Formats", desc: "Export in 1K, 2K, or 4K resolutions across various formats." },
  { icon: Camera, title: "Model Selection", desc: "Choose from diverse AI models that match your brand identity." },
  { icon: Sun, title: "Lighting Control", desc: "Fine-tune lighting to match your aesthetic — studio, natural, dramatic." },
  { icon: Zap, title: "Fast Generation", desc: "Get results in minutes, not weeks. Launch faster than your competitors." },
  { icon: Award, title: "Studio Quality", desc: "Professional-grade images every single time. Consistent and on-brand." },
];

const plans = [
  {
    name: "Basic",
    price: "₹999",
    yearly: "₹10,999/year",
    credits: "100 Free Credits",
    badge: null,
    pricing: [
      { res: "1K", price: "₹30" },
      { res: "2K", price: "₹50" },
      { res: "4K", price: "₹70" },
    ],
  },
  {
    name: "Standard",
    price: "₹1,499",
    yearly: "₹14,999/year",
    credits: "200 Free Credits",
    badge: "10% OFF",
    pricing: [
      { res: "1K", price: "₹27" },
      { res: "2K", price: "₹45" },
      { res: "4K", price: "₹63" },
    ],
  },
  {
    name: "Premium",
    price: "₹1,799",
    yearly: "₹17,999/year",
    credits: "300 Free Credits",
    badge: "20% OFF",
    pricing: [
      { res: "1K", price: "₹24" },
      { res: "2K", price: "₹40" },
      { res: "4K", price: "₹56" },
    ],
  },
];

const problems = [
  { icon: X, text: "Model cancellations & scheduling nightmares" },
  { icon: X, text: "Budget overruns & hidden costs" },
  { icon: X, text: "25+ days per photoshoot cycle" },
  { icon: X, text: "₹50,000+ per shoot for basic photos" },
];

const solutions = [
  { icon: Check, text: "Generate photos instantly, anytime" },
  { icon: Check, text: "Fixed monthly pricing, no surprises" },
  { icon: Check, text: "From concept to product page in minutes" },
  { icon: Check, text: "Starting at just ₹999/month" },
];

const galleryImages = [
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-130/znav8nak21rmt0cwmdm9rarw04.png", alt: "Blue Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-129/ceq06y9sa1rmy0cw37c9nyhq18.png", alt: "White Kurta" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-137/fffkzkpqmsrmw0cwttbaw2zdpm.png", alt: "Fashion Shoot" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-111/psx6ren1ssrmy0cvyhdvv9hc4w.png", alt: "Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-120/bhk54xxt4nrmr0cvyjgaa1x674.png", alt: "Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-132/g3rp0xh9nnrmr0cwtd1953dx4c.png", alt: "Deep Sea Lines" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-113/p404vez341rmt0cvyhxrfvt8zr.png", alt: "Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-133/18x9cgm4s5rmw0cwtd3bksmsx0.png", alt: "Deep Sea Lines" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-118/c8d6aafdfhrmr0cvyjbsj1vpqr.png", alt: "Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-123/n5p2jbxy89rmt0cvyjxv74qqf8.png", alt: "Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-116/ccn7ez7vgdrmt0cvyj49v6fwmc.png", alt: "Saree" },
  { src: "https://fls-a09d31ea-741a-41e1-896a-304e50c6988e.laravel.cloud/results/photoshoot-121/1pmsjwrpv9rmw0cvyjkr2awv14.png", alt: "Saree" },
];

export default function WePixStudio() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-feature", container, { stagger: 0.08, y: 20 });
    scrollFadeIn(".gsap-plan", container, { stagger: 0.1, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="gsap-hero-section py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePixStudio</span>
            <h1 className="gsap-hero-title font-display text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] opacity-0">
              AI fashion photoshoots. Powerful, Customizable, Instant.
            </h1>
            <p className="gsap-hero-desc mt-4 text-base text-muted-foreground max-w-2xl mx-auto opacity-0">
              In fashion, time is money. Save both with WePix AI fashion studio. No studio, no model, no camera — just stunning product photos in minutes.
            </p>
            <div className="gsap-hero-cta mt-8 flex justify-center gap-4 opacity-0">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-medium gap-2">Get Started <ArrowRight size={16} /></Button>
              </a>
              <a href={`${APP_URL}/landing#features`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="font-medium">Learn More</Button>
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground opacity-60">Trusted by 500+ people · 119+ photoshoots generated</p>
          </div>
        </section>

        {/* Problem vs Solution */}
        <section className="py-16 border-t border-border">
          <div className="container max-w-4xl">
            <SectionHeading tag="The Problem" title="Traditional photoshoots are broken" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardContent className="p-6">
                  <h3 className="font-display text-base font-semibold mb-4 text-destructive">The Old Way</h3>
                  <div className="space-y-3">
                    {problems.map((p, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <X size={16} className="text-destructive shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{p.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <h3 className="font-display text-base font-semibold mb-4">With WePixStudio</h3>
                  <div className="space-y-3">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check size={16} className="text-foreground shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Two Modes */}
        <section className="py-16 border-t border-border">
          <div className="container max-w-4xl">
            <SectionHeading tag="Modes" title="Two modes. One goal." description="Choose the mode that fits your workflow." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={18} className="text-foreground" />
                    <h3 className="font-display text-base font-semibold">Easy Mode</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">For founders who want to get it done, quick.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check size={14} /> Preset-based generation</li>
                    <li className="flex items-center gap-2"><Check size={14} /> Quick setup in 3 steps</li>
                    <li className="flex items-center gap-2"><Check size={14} /> 4 images per photoshoot</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Sliders size={18} className="text-foreground" />
                    <h3 className="font-display text-base font-semibold">Pro Mode</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">For perfectionists who care about every detail.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check size={14} /> Full control over all parameters</li>
                    <li className="flex items-center gap-2"><Check size={14} /> 1–8 images per photoshoot</li>
                    <li className="flex items-center gap-2"><Check size={14} /> Custom scenarios & prompts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Features" title="Everything you need for stunning product photos" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {features.map((f) => (
                <div key={f.title} className="gsap-feature opacity-0">
                  <Card className="h-full border-border">
                    <CardContent className="p-5">
                      <f.icon className="text-foreground mb-2" size={20} />
                      <h3 className="font-display text-sm font-semibold">{f.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 border-t border-border">
          <div className="container">
            <SectionHeading tag="Pricing" title="Choose your plan" description="All plans include free credits and tier-based per-image pricing." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Card className={`h-full border-border ${i === 1 ? "ring-2 ring-primary" : ""}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                        {plan.badge && <Badge className="text-xs bg-primary text-primary-foreground">{plan.badge}</Badge>}
                      </div>
                      <div className="mb-1">
                        <span className="font-display text-2xl font-bold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/month</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">or {plan.yearly}</p>
                      <p className="text-sm font-medium mb-3">{plan.credits}</p>
                      <div className="space-y-2 mb-5">
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Per Image</p>
                        {plan.pricing.map((p) => (
                          <div key={p.res} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{p.res} Resolution</span>
                            <span className="font-medium">{p.price}</span>
                          </div>
                        ))}
                      </div>
                      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full font-medium" variant={i === 1 ? "default" : "outline"}>
                          {i === 0 ? "Get Started" : "Select Plan"}
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-muted/30 overflow-hidden">
          <div className="container">
            <SectionHeading tag="Gallery" title="See what our community is creating" />
          </div>
          <div className="relative">
            <div className="flex animate-marquee gap-3 w-max">
              {[...galleryImages, ...galleryImages].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-48 h-64 object-cover rounded-xl shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <CTABanner
        headline="Ready to transform your product photography?"
        subtext="Join 500+ brands already using WePixStudio. Start creating AI-powered photoshoots in minutes."
        ctaLabel="Get Started Free"
        ctaHref={REGISTER_URL}
        useDialog={false}
      />
    </Layout>
  );
}
