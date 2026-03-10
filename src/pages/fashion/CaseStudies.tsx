import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { TrendingUp } from "lucide-react";

const studies = [
  { brand: "Taasza", category: "Ethnic Wear", stat: "3x ROAS", description: "From local saree shop to thriving D2C brand with a gorgeous Shopify store and Meta Ads using our MCS Framework." },
  { brand: "BoonBabies", category: "Kids Fashion", stat: "₹10L+ / mo", description: "Complete brand refresh and premium content strategy targeting millennial parents. Consistency is king (or queen)." },
  { brand: "Nutmeg", category: "Premium Menswear", stat: "2.5x Growth", description: "Repositioned the brand from 'invisible' to 'irresistible.' Luxury content + conversion campaigns that actually convert." },
  { brand: "ThreadCraft", category: "Sustainable Fashion", stat: "4x ROAS", description: "Eco-conscious brand that needed the world to know about their mission. We made sustainability look as good as it feels." },
  { brand: "Kalakriti", category: "Handloom Sarees", stat: "₹8L+ / mo", description: "Heritage handloom brand taken digital. AI-generated model shots via WePixStudio turned raw product images into showstoppers." },
  { brand: "UrbanKnot", category: "Streetwear", stat: "5x ROAS", description: "Bold streetwear brand with zero paid strategy. We built a full Meta funnel and scaled from ₹0 to ₹1L/day ad spend profitably." },
  { brand: "LilBloom", category: "Baby Accessories", stat: "₹12L+ / mo", description: "Cute products, chaotic branding. We unified everything — content, store, ads — and turned them into a category leader." },
  { brand: "Maison Luxe", category: "Luxury Ethnic", stat: "3.8x ROAS", description: "High-ticket ethnic wear brand. Premium Shopify store + catalog ads targeting NRI audiences across the US and UK." },
  { brand: "DapperDen", category: "Men's Grooming", stat: "60% CPA ↓", description: "Grooming brand burning cash on ads. We restructured campaigns, refreshed creatives, and cut their CPA by more than half." },
];

export default function CaseStudies() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-study", container, { stagger: 0.06, y: 20 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Case Studies</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Real brands. Real money. Real receipts.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">No fluff, no vanity metrics, no 'we increased engagement by 500%' (engagement doesn't pay rent). Here's what actually happened when these brands trusted us with their growth.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {studies.map((study) => (
                <div key={study.brand} className="gsap-study opacity-0">
                  <Card className="rounded-xl border-border overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                    <ImagePlaceholder label={`${study.brand} brand imagery`} aspectRatio="square" className="rounded-none border-0" />
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{study.category}</span>
                        <span className="flex items-center gap-1 text-xs font-semibold text-foreground">
                          <TrendingUp size={12} /> {study.stat}
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2">{study.brand}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <CTABanner headline="Want your brand to be the next case study?" subtext="Book a call. We'll look at your brand and tell you honestly if we can help." ctaLabel="Book a Free Call" />
    </Layout>
  );
}
