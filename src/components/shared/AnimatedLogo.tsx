import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  "Fashion",
  "Business",
  "Academy",
  "Ai",
  "Media",
  "Garment Tech",
  "Digital Media",
];

export function AnimatedLogo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Link to="/" className="flex items-baseline font-display text-xl font-semibold tracking-[0.04em] text-foreground">
      <span>WePix.</span>
      <span className="relative inline-flex overflow-hidden h-[1.5em] items-end pb-0.5 ml-1">
        <AnimatePresence mode="wait">
          <motion.span
            key={categories[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            className="inline-block text-primary whitespace-nowrap font-medium"
          >
            {categories[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </Link>
  );
}
