import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { TrendingUp } from "lucide-react";

const studies = [
  { brand: "Taasza", category: "Ethnic Wear", problem: "New brand with zero online presence.", approach: "Built Shopify store, product shoot, Meta Ads with MCS Framework.", results: [{ metric: "ROAS", value: "3x" }, { metric: "Monthly Revenue", value: "₹5L" }, { metric: "Timeline", value: "60 days" }] },
  { brand: "BoonBabies", category: "Kids Fashion", problem: "Great products but inconsistent branding.", approach: "Complete brand refresh, WePixStudio assets, targeted Meta campaigns.", results: [{ metric: "Monthly Revenue", value: "₹10L+" }, { metric: "Ad Creatives", value: "50+" }, { metric: "Content Pieces", value: "200+" }] },
  { brand: "Nutmeg", category: "Premium Menswear", problem: "Strong product but underperforming online.", approach: "Repositioned brand, premium content, conversion campaigns.", results: [{ metric: "Revenue Growth", value: "2.5x" }, { metric: "CPA Reduction", value: "40%" }, { metric: "ROAS", value: "4.2x" }] },
];

export default function CaseStudies() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    scrollFadeIn(".gsap-study", container, { stagger: 0.12, y: 30 });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Case Studies</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Real brands. Real results.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">No fluff, no vanity metrics.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-4xl space-y-8">
            {studies.map((study) => (
              <div key={study.brand} className="gsap-study opacity-0">
                <Card className="rounded-xl border-border overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="text-foreground" size={18} />
                      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{study.category}</span>
                    </div>
                    <h2 className="font-display text-3xl font-bold mb-6">{study.brand}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Problem</p><p className="text-sm">{study.problem}</p></div>
                      <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Approach</p><p className="text-sm">{study.approach}</p></div>
                      <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Results</p>
                        <div className="space-y-2">{study.results.map((r) => (<div key={r.metric} className="flex justify-between"><span className="text-sm text-muted-foreground">{r.metric}</span><span className="font-display font-bold">{r.value}</span></div>))}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTABanner headline="Want results like these?" subtext="Let's talk about your brand." ctaLabel="Book a Free Call" ctaHref="https://cal.com" />
    </Layout>
  );
}
