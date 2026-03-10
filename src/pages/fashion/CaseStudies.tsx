import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { CTABanner } from "@/components/shared/CTABanner";
import { useGSAP, heroReveal, scrollFadeIn } from "@/hooks/useGSAP";
import { TrendingUp } from "lucide-react";

const studies = [
  { brand: "Taasza", category: "Ethnic Wear", problem: "Brand new. Zero online presence. The founder had amazing sarees but was selling them only through local shops. Classic 'great product, invisible brand' syndrome.", approach: "We went full send — built a gorgeous Shopify store, did a complete product shoot, and launched Meta Ads using our MCS Framework. Think of it as a brand makeover montage, but with spreadsheets.", results: [{ metric: "ROAS", value: "3x" }, { metric: "Monthly Revenue", value: "₹5L" }, { metric: "Timeline", value: "60 days" }] },
  { brand: "BoonBabies", category: "Kids Fashion", problem: "Adorable kids' clothing with zero brand consistency. Their Instagram looked like it was run by five different people (it was). Great products, but the marketing was giving 'we just started yesterday' energy.", approach: "Complete brand refresh from scratch. WePixStudio for consistent, premium content. Targeted Meta campaigns aimed at millennial parents who spend their weekends on Instagram while their kids nap.", results: [{ metric: "Monthly Revenue", value: "₹10L+" }, { metric: "Ad Creatives", value: "50+" }, { metric: "Content Pieces", value: "200+" }] },
  { brand: "Nutmeg", category: "Premium Menswear", problem: "A premium menswear brand with fabric quality that would make Italian tailors jealous — but their online presence? Let's just say their website was doing the heavy lifting of scaring customers away.", approach: "Repositioned the entire brand. Created chef's-kiss content that screamed 'luxury but approachable.' Ran conversion campaigns targeting men who actually care about what they wear (they exist, we found them).", results: [{ metric: "Revenue Growth", value: "2.5x" }, { metric: "CPA Reduction", value: "40%" }, { metric: "ROAS", value: "4.2x" }] },
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
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Real brands. Real money. Real receipts. 🧾</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">No fluff, no vanity metrics, no 'we increased engagement by 500%' (engagement doesn't pay rent). Here's what actually happened when these brands trusted us with their growth.</p>
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
                    <h2 className="font-display text-3xl font-semibold mb-6">{study.brand}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">The Problem 😩</p><p className="text-sm">{study.problem}</p></div>
                      <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">What We Did 🛠️</p><p className="text-sm">{study.approach}</p></div>
                      <div><p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">The Results 🎉</p>
                        <div className="space-y-2">{study.results.map((r) => (<div key={r.metric} className="flex justify-between"><span className="text-sm text-muted-foreground">{r.metric}</span><span className="font-display font-semibold">{r.value}</span></div>))}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
      <CTABanner headline="Want your brand to be the next case study? 📈" subtext="Book a call. We'll look at your brand and tell you honestly if we can help." ctaLabel="Book a Free Call" ctaHref="https://cal.com" />
    </Layout>
  );
}
