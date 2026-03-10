import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const chapters = [
  { id: "why", title: "Why WePix Exists", content: "We started WePix because the digital marketing industry is broken. Agencies charge you ₹50K/month, run the same boring ads, send you a PDF report, and call it 'strategy.' We've been on the receiving end. We've seen brands waste lakhs on agencies that couldn't tell a ROAS from a reach metric. So we built something different — an agency that actually gives a damn about your brand." },
  { id: "no-cookie-cutter", title: "No Cookie-Cutter Marketing", content: "Every brand is different. Your audience is different. Your product is different. Your margins are different. So why would we run the same playbook for everyone? We don't. Every strategy is custom-built. Every creative is designed for YOUR customer. We study your brand like it's ours — because while we're working on it, it is." },
  { id: "content-first", title: "Content is the Product", content: "In 2024, your content IS your brand. Not your logo, not your tagline — your content. The reels, the shoots, the ad creatives, the product pages. That's what people see, judge, and buy from. We built WePixStudio because we believe content shouldn't be an afterthought. It should be the main thing. AI-assisted, human-directed, brand-specific content at scale." },
  { id: "ads-science", title: "Ads Are a Science, Not a Gamble", content: "We don't 'boost posts and hope for the best.' We build ad funnels. We test creatives systematically. We read the data, not just the dashboard. Our MCS Framework (Media, Creative, Strategy) is built on thousands of hours of running ads for fashion brands. It's not theory — it's pattern recognition from real money spent." },
  { id: "fashion-dna", title: "Fashion is in Our DNA", content: "We're from Tirupur. We grew up around garment factories, textile markets, and people who make things with their hands. We understand fashion brands at a molecular level — the margins, the seasons, the inventory pressure, the Instagram game. That's why fashion brands trust us. We're not outsiders pretending to understand fashion. We ARE fashion." },
  { id: "teach-everything", title: "We Teach Everything We Know", content: "Most agencies guard their 'secrets.' We share ours. Through our Academy, our courses, our webinars, and our Skool community — we teach everything. Why? Because we believe the industry gets better when more people know what they're doing. And honestly, the best clients are educated clients." },
  { id: "ai-not-hype", title: "AI is a Tool, Not a Hype Train", content: "We use AI every day. WePixStudio is AI-powered. Our ad analysis uses AI. Our content workflows use AI. But we don't use AI to replace thinking — we use it to amplify execution. The strategy is still human. The creativity is still human. AI just makes us faster and more consistent." },
  { id: "results-or-nothing", title: "Results or Nothing", content: "We don't hide behind 'brand awareness' when you need sales. We don't celebrate 'impressions' when your ROAS is tanking. We measure what matters: revenue, ROAS, customer acquisition cost, lifetime value. If the numbers aren't working, we fix the strategy. We don't send you a prettier report." },
  { id: "small-team", title: "Small Team, Big Impact", content: "We're not a 500-person agency with layers of account managers between you and the people doing the work. You talk to the people who run your ads. You talk to the people who shoot your content. That's by design. Small teams move faster, care more, and deliver better." },
  { id: "built-different", title: "Built Different", content: "We know 'built different' sounds like every tech bro's LinkedIn headline. But here's what it means for us: We build brands, not campaigns. We build relationships, not retainers. We build systems, not one-off deliverables. We're WePix. And we're just getting started." },
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

  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">The WePix Manifesto</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              What we believe in.
            </h1>
            <p className="mt-4 text-hero-foreground/60 text-lg">10 principles that guide everything we do.</p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        <div className="flex gap-12">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-36">
              <p className="text-xs font-display font-semibold uppercase tracking-widest text-muted-foreground mb-4">Chapters</p>
              <nav className="space-y-1">
                {chapters.map((ch, i) => (
                  <a
                    key={ch.id}
                    href={`#${ch.id}`}
                    className={cn(
                      "block text-sm py-1.5 px-3 rounded-md transition-colors",
                      activeChapter === ch.id
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="text-muted-foreground/50 mr-2">{String(i + 1).padStart(2, "0")}</span>
                    {ch.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 max-w-2xl">
            {chapters.map((ch, i) => (
              <motion.article
                key={ch.id}
                id={ch.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 scroll-mt-40"
              >
                <span className="text-xs font-display font-semibold text-primary uppercase tracking-widest">
                  Chapter {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">{ch.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">{ch.content}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
