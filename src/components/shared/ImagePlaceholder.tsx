import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspectRatio?: "video" | "square" | "wide" | "portrait";
}

export function ImagePlaceholder({ label = "Image coming soon", className, aspectRatio = "video" }: ImagePlaceholderProps) {
  const ratioClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    portrait: "aspect-[3/4]",
  }[aspectRatio];

  return (
    <div className={cn("rounded-xl border-2 border-dashed border-border bg-muted/40 flex flex-col items-center justify-center gap-3", ratioClass, className)}>
      <ImageIcon className="text-muted-foreground/40" size={40} />
      <p className="text-sm text-muted-foreground/60 font-medium">{label}</p>
    </div>
  );
}
