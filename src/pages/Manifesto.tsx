import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";

const chapters = [
  { id: "why", title: "Why WePix Exists", content: "We started WePix because the digital marketing industry is broken. Agencies charge you ₹50K/month, run the same boring ads, send you a PDF report, and call it 'strategy.' We've been on the receiving end. We've seen brands waste lakhs on agencies that couldn't tell a ROAS from a reach metric. So we built something different — an agency that actually gives a damn about your brand." },
  { id: "no-cookie-cutter", title: "No Cookie-Cutter Marketing", content: "Every brand is different. Your audience is different. Your product is different. Your margins are different. So why would we run the same playbook for everyone? We don't. Every strategy is custom-built. Every creative is designed for YOUR customer." },
  { id: "content-first", title: "Content is the Product", content: "In 2024, your content IS your brand. Not your logo, not your tagline — your content. The reels, the shoots, the ad creatives, the product pages. That's what people see, judge, and buy from. We built WePixStudio because we believe content shouldn't be an afterthought." },
  { id: "ads-science", title: "Ads Are a Science, Not a Gamble", content: "We don't 'boost posts and hope for the best.' We build ad funnels. We test creatives systematically. We read the data, not just the dashboard. Our MCS Framework is built on thousands of hours of running ads for fashion brands." },
  { id: "fashion-dna", title: "Fashion is in Our DNA", content: "We're from Tirupur. We grew up around garment factories, textile markets, and people who make things with their hands. We understand fashion brands at a molecular level — the margins, the seasons, the inventory pressure, the Instagram game." },
  { id: "teach-everything", title: "We Teach Everything We Know", content: "Most agencies guard their 'secrets.' We share ours. Through our Academy, our courses, our webinars, and our Skool community — we teach everything. Because the industry gets better when more people know what they're doing." },
  { id: "ai-not-hype", title: "AI is a Tool, Not a Hype Train", content: "We use AI every day. WePixStudio is AI-powered. Our ad analysis uses AI. But we don't use AI to replace thinking — we use it to amplify execution. The strategy is still human. The creativity is still human." },
  { id: "results-or-nothing", title: "Results or Nothing", content: "We don't hide behind 'brand awareness' when you need sales. We measure what matters: revenue, ROAS, customer acquisition cost, lifetime value. If the numbers aren't working, we fix the strategy." },
  { id: "small-team", title: "Small Team, Big Impact", content: "We're not a 500-person agency with layers of account managers. You talk to the people who run your ads. You talk to the people who shoot your content. That's by design. Small teams move faster, care more, and deliver better." },
  { id: "built-different", title: "Built Different", content: "We build brands, not campaigns. We build relationships, not retainers. We build systems, not one-off deliverables. We're WePix. And we're just getting started." },
];

export default function Manifesto() {
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveChapter(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const containerRef = useGSAP((container) => {
    heroReveal(container);

    container.querySelectorAll(".gsap-chapter").forEach((el) => {
      gsap.fromTo(el, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
      });
    });

    gsap.fromTo(
      container.querySelectorAll(".gsap-toc-link"),
      { opacity: 0, x: -15 },
      { opacity: 1, x: 0, duration: 0.3, stagger: 0.04, ease: "power2.out", delay: 0.6 }
    );
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32 border-b border-border">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">The WePix Manifesto</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">
              What we believe in.
            </h1>
            <p className="gsap-hero-desc mt-4 text-muted-foreground text-lg opacity-0">10 principles that guide everything we do.</p>
          </div>
        </section>

        <div className="container py-16">
          <div className="flex gap-12">
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-36">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Chapters</p>
                <nav className="space-y-0.5">
                  {chapters.map((ch, i) => (
                    <a
                      key={ch.id}
                      href={`#${ch.id}`}
                      className={cn(
                        "gsap-toc-link block text-sm py-1.5 px-3 rounded-lg transition-colors opacity-0",
                        activeChapter === ch.id ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <span className="text-muted-foreground/50 mr-2">{String(i + 1).padStart(2, "0")}</span>
                      {ch.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div className="flex-1 max-w-2xl">
              {chapters.map((ch, i) => (
                <article key={ch.id} id={ch.id} className="gsap-chapter mb-16 scroll-mt-40 opacity-0">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                    Chapter {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">{ch.title}</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{ch.content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
