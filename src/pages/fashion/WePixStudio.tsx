import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTABanner } from "@/components/shared/CTABanner";
import { motion } from "framer-motion";
import { Sparkles, Image, Video, Palette } from "lucide-react";

const useCases = [
  { icon: Image, title: "Product Shoots", description: "AI-enhanced product photography that looks like a ₹2L shoot but costs a fraction." },
  { icon: Palette, title: "Ad Creatives", description: "Scroll-stopping ad designs generated and iterated at speed. Test 10x more creatives." },
  { icon: Video, title: "Lifestyle Content", description: "Model-on-product, flat-lays, and lifestyle shots generated with AI assistance." },
  { icon: Sparkles, title: "Brand Consistency", description: "Maintain visual identity across hundreds of SKUs with AI-guided styling." },
];

export default function WePixStudio() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">WePixStudio</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              AI-powered content. Human-quality results.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              Create professional product content at scale. Before/after magic that turns basic shots into brand-ready assets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Demo */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <SectionHeading tag="The Magic" title="See the transformation" description="Basic product photos in, brand-ready content out. Powered by AI, directed by humans." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border/50 overflow-hidden">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-display mb-2">Before</p>
                  <div className="w-32 h-32 mx-auto bg-border rounded-lg flex items-center justify-center">
                    <Image className="text-muted-foreground" size={48} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Raw product photo on white background</p>
                </div>
              </div>
            </Card>
            <Card className="border-primary/30 overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-sm text-primary uppercase tracking-wider font-display mb-2">After</p>
                  <div className="w-32 h-32 mx-auto bg-primary/20 rounded-lg flex items-center justify-center">
                    <Sparkles className="text-primary" size={48} />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Styled, enhanced, brand-ready creative</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading tag="Use Cases" title="What you can create" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <uc.icon className="text-primary mb-3" size={28} />
                    <h3 className="font-display text-lg font-bold">{uc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{uc.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to see WePixStudio in action?"
        subtext="Book a demo call. We'll show you real before/after results from our clients."
        ctaLabel="Book a Demo"
        ctaHref="https://cal.com"
      />
    </Layout>
  );
}
