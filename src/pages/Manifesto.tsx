import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useGSAP, heroReveal, gsap } from "@/hooks/useGSAP";

const chapters = [
  { id: "why", title: "Why WePix Exists", content: "Let us paint you a picture. You're a brand owner. You've poured your heart (and savings) into creating an amazing product. You hire a marketing agency. They charge you ₹50K/month, run the same boring carousel ads everyone else is running, send you a PDF report with lots of graphs (that say nothing), and call it 'strategy.' Sound familiar? Yeah, we've been on the receiving end too. We've watched brands waste LAKHS on agencies that couldn't tell a ROAS from a reach metric if their life depended on it. That's why we built WePix — an agency that actually gives a damn about your brand. Wild concept, right? 🤯" },
  { id: "no-cookie-cutter", title: "No Cookie-Cutter Marketing", content: "Every brand is different. Your audience is different. Your product is different. Your margins are different. Your founder's vibe is different. So why would we run the same playbook for everyone? Spoiler: we don't. Every strategy we build is custom-made from scratch. Every creative is designed for YOUR specific customer, not some generic 'millennials aged 25-35' targeting. Because here's the truth — the agencies using templates are the same ones wondering why their clients keep leaving. 🎨" },
  { id: "content-first", title: "Content is the Product", content: "Hot take incoming: In 2024, your content IS your brand. Not your logo. Not your tagline. Not that mission statement nobody reads. It's the reels, the product shoots, the ad creatives, the product pages, the stories. That's what people see first, judge instantly, and decide to buy from (or scroll past in 0.3 seconds). We built WePixStudio because we believe content shouldn't be an afterthought — it should be the FIRST thought. When your content slaps, everything else becomes easier. Trust us on this one. 📱" },
  { id: "ads-science", title: "Ads Are a Science, Not a Coin Toss", content: "We don't 'boost posts and hope for the best.' We don't 'throw spaghetti at the wall and see what sticks.' We build ad funnels with the precision of a Swiss watchmaker (okay, that's dramatic, but you get it). We test creatives systematically. We read the data like it's a thriller novel. Our MCS Framework wasn't invented overnight — it's built on thousands of hours of running ads, losing money, making money, and documenting everything. Science, baby. 🔬" },
  { id: "fashion-dna", title: "Fashion is in Our DNA", content: "We're from Tirupur — literally the textile capital of India. We grew up around garment factories, fabric markets, and people who stitch masterpieces with their hands. We understand fashion brands at a molecular level: the margins that keep you up at night, the seasonal inventory pressure, the Instagram algorithm that changes every Tuesday, and the pressure of launching a new collection when you're not sure if anyone will buy. We get it because we've lived it. 🧵" },
  { id: "teach-everything", title: "We Teach Everything We Know", content: "Most agencies guard their 'secrets' like they're protecting nuclear codes. Their secret? They don't actually have one. We're different — we share EVERYTHING. Through our Academy, our courses, our webinars, and our Skool community, we teach it all. The strategies, the frameworks, the mistakes, the wins. Because here's our hot take: the industry gets better when more people know what they're doing. Rising tide lifts all boats and all that jazz. 📚" },
  { id: "ai-not-hype", title: "AI is a Tool, Not a Hype Train", content: "Yes, we use AI. Every single day. WePixStudio is AI-powered. Our ad analysis uses AI. Our reporting uses AI. But here's the thing — we don't use AI to replace thinking. We use it to amplify execution. The strategy? Still human. The creativity? Still human. The relationship with your brand? Very much human. We're not replacing our team with ChatGPT (sorry, not sorry). AI is the tool, humans are the craftsmen. 🤖" },
  { id: "results-or-nothing", title: "Results or Nothing", content: "We don't hide behind 'brand awareness' when what you need is sales. We don't drown you in impressions when your bank account is crying. We measure what actually matters: revenue, ROAS, customer acquisition cost, lifetime value, repeat purchase rate. Real numbers. Real money. If the numbers aren't working, we don't blame the algorithm — we fix the strategy. Because at the end of the day, your business runs on money, not on 'engagement rate.' 💸" },
  { id: "small-team", title: "Small Team, Big Impact", content: "We're not a 500-person agency with seventeen layers of account managers where your message plays telephone before reaching the person who actually does the work. At WePix, you talk to the people who run your ads. You talk to the people who shoot your content. You talk to the people who build your strategy. That's by design. Small teams move faster, care more, remember your preferences, and deliver better work. Plus, our WhatsApp response time is probably faster than your ex's. 😄" },
  { id: "built-different", title: "Built Different", content: "We build brands, not campaigns. We build relationships, not retainers. We build systems, not one-off deliverables. We're not here to be your vendor — we're here to be the partner who makes your brand the one everyone's talking about. We're WePix. We started in Tirupur, we're growing across India, and honestly? We're just getting started. The best is yet to come, and if you're reading this, you might want to come along for the ride. 🚀" },
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
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">
              What we believe in. (Warning: strong opinions ahead) ✍️
            </h1>
            <p className="gsap-hero-desc mt-4 text-muted-foreground text-lg opacity-0">10 principles that guide everything we do. We wrote them down because we're that serious about this stuff. Also because manifestos sound cool.</p>
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
                  <h2 className="font-display text-2xl md:text-3xl font-semibold mt-2 mb-4">{ch.title}</h2>
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
