import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({ tag, title, description, className, align = "center" }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", "mb-12", className)}>
      {tag && (
        <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-3">
          {tag}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
