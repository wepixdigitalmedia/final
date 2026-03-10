import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";
import { Check, ArrowRight } from "lucide-react";

const covers = [
  "Your brand's current challenges and goals",
  "Which WePix services are the right fit",
  "A rough roadmap for the first 60 days",
  "Budget expectations and timeline",
  "Q&A — ask us anything",
];

export default function BookACall() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
    gsap.fromTo(container.querySelectorAll(".gsap-item"), { opacity: 0, x: -20 }, {
      opacity: 1, x: 0, duration: 0.4, stagger: 0.06, ease: "power2.out",
      scrollTrigger: { trigger: container.querySelector(".gsap-list"), start: "top 80%", toggleActions: "play none none none" },
    });
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Fashion</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Book a Free Strategy Call</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">30 minutes. No obligations.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container max-w-2xl gsap-list">
            <h2 className="font-display text-2xl font-bold mb-6">What we'll cover:</h2>
            <div className="space-y-4 mb-10">
              {covers.map((item) => (
                <div key={item} className="gsap-item flex items-start gap-3 opacity-0">
                  <Check className="text-foreground shrink-0 mt-0.5" size={18} />
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-lg font-medium gap-2 w-full md:w-auto">Schedule Your Call <ArrowRight size={16} /></Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">You'll be redirected to our Cal.com booking page.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
