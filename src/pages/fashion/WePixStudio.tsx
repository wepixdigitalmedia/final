import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { Sparkles, Image, Video, Palette } from "lucide-react";

const useCases = [
  { icon: Image, title: "Product Shoots", description: "AI-enhanced product photography that looks premium." },
  { icon: Palette, title: "Ad Creatives", description: "Scroll-stopping ad designs generated at speed." },
  { icon: Video, title: "Lifestyle Content", description: "Model-on-product and lifestyle shots with AI assistance." },
  { icon: Sparkles, title: "Brand Consistency", description: "Maintain visual identity across hundreds of SKUs." },
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
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">AI-powered content. Human-quality results.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Create professional product content at scale.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-4xl">
            <SectionHeading tag="The Magic" title="See the transformation" description="Basic product photos in, brand-ready content out." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="rounded-xl border-border overflow-hidden">
                <div className="aspect-square bg-muted/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Before</p>
                    <div className="w-28 h-28 mx-auto bg-muted rounded-xl flex items-center justify-center"><Image className="text-muted-foreground" size={40} /></div>
                    <p className="text-sm text-muted-foreground mt-4">Raw product photo</p>
                  </div>
                </div>
              </Card>
              <Card className="rounded-xl border-border overflow-hidden">
                <div className="aspect-square bg-muted/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-sm text-foreground font-medium uppercase tracking-wider mb-2">After</p>
                    <div className="w-28 h-28 mx-auto bg-muted rounded-xl flex items-center justify-center"><Sparkles className="text-foreground" size={40} /></div>
                    <p className="text-sm text-muted-foreground mt-4">Styled, brand-ready creative</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/30">
          <div className="container">
            <SectionHeading tag="Use Cases" title="What you can create" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {useCases.map((uc) => (
                <div key={uc.title} className="gsap-usecase opacity-0">
                  <Card className="h-full rounded-xl border-border">
                    <CardContent className="p-6">
                      <uc.icon className="text-foreground mb-3" size={22} />
                      <h3 className="font-display text-base font-bold">{uc.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Want to see WePixStudio in action?" subtext="Book a demo call." ctaLabel="Book a Demo" ctaHref="https://cal.com" />
    </Layout>
  );
}
