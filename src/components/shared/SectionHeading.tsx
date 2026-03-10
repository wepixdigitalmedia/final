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
  const containerRef = useGSAP((ctx, container) => {
    gsap.fromTo(
      container.children,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
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
    <div ref={containerRef} className={cn(align === "center" ? "text-center" : "text-left", "mb-12", className)}>
      {tag && (
        <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3 opacity-0">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight opacity-0">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">{description}</p>
      )}
    </div>
  );
}
