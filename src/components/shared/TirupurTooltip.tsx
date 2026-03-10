import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TirupurTooltipProps {
  className?: string;
}

export function TirupurTooltip({ className }: TirupurTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <span className={`relative inline-block ${className || ""}`}>
      <span
        ref={triggerRef}
        className="underline decoration-dotted underline-offset-4 cursor-pointer font-medium text-foreground"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        திருப்பூர்
      </span>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.95, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50"
          >
            <div className="relative bg-foreground text-background px-4 py-2 rounded-full whitespace-nowrap shadow-lg">
              <span className="text-sm font-semibold font-sans">Tirupur in Tamil Language</span>
              {/* Triangle pointer */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-foreground" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
