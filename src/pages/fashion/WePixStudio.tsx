import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Sparkles, Image, Video, Palette } from "lucide-react";

const useCases = [
  { icon: Image, title: "Product Shoots", description: "AI-enhanced product photography that makes your ₹300 t-shirt look like a ₹3,000 one. Your competitors will start questioning their life choices. 📸" },
  { icon: Palette, title: "Ad Creatives", description: "Scroll-stopping ad designs generated at lightning speed. The kind of creatives that make people pause their doom-scrolling and actually tap 'Shop Now.' 🎨" },
  { icon: Video, title: "Lifestyle Content", description: "Model-on-product and lifestyle shots that tell a story. Because nobody buys a dress — they buy the 'me wearing this dress at brunch' fantasy. ✨" },
  { icon: Sparkles, title: "Brand Consistency", description: "Maintain your visual identity across hundreds of SKUs without losing your mind (or your brand guidelines). Consistency is key, and we've got the master key. 🔑" },
];

export default function WePixStudio() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-usecase", container, { stagger: 0.1, y: 25 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">WePixStudio</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">AI-powered content that makes your products look expensive. 💎</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Here's the problem: you've got 200 SKUs and a photographer who charges ₹500 per shot. That's ₹1 lakh just for basic photos. And they'll probably all have the same boring white background. WePixStudio uses AI to create professional, brand-ready product content at scale — for a fraction of the cost and time. It's basically a cheat code for fashion brands.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-4xl">
            <SectionHeading tag="The Magic" title="See the transformation ✨" description="You send us basic product photos. We send back content that looks like it belongs in a lookbook. It's basically magic, except it's AI and a lot of design expertise." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-xl border-border overflow-hidden">
                <ImagePlaceholder label="Before — Raw product photo" aspectRatio="square" className="rounded-none border-0" />
              </Card>
              <Card className="rounded-xl border-border overflow-hidden">
                <ImagePlaceholder label="After — Styled, brand-ready creative" aspectRatio="square" className="rounded-none border-0" />
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery of AI-generated content */}
        <section className="py-16">
          <div className="container max-w-5xl">
            <SectionHeading tag="Portfolio" title="Some of our AI-generated work" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <ImagePlaceholder key={i} label={`Sample ${i + 1}`} aspectRatio="portrait" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Use Cases" title="What you can create with WePixStudio" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="gsap-usecase opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <uc.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-semibold">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Want to see WePixStudio in action? 👀" subtext="Book a demo call. We'll transform one of your product photos live and blow your mind." ctaLabel="Book a Demo" ctaHref="https://cal.com" />
    </Layout>
  );
}
