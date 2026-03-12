import { cn } from "@/lib/utils";
import { useGSAP, gsap } from "@/hooks/useGSAP";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ tag, title, description, className, align = "center" }: SectionHeadingProps) {
  const containerRef = useGSAP((container) => {
    gsap.fromTo(
      container.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div ref={containerRef} className={cn(align === "center" ? "text-center" : "text-left", "mb-14", className)}>
      {tag && (
        <span className="inline-block text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3 opacity-0">
          {tag}
        </span>
      )}
      <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold opacity-0">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto opacity-0">{description}</p>
      )}
    </div>
  );
}
