import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { motion } from "framer-motion";

const lines = [
  "Most companies chase short term wins.",
  "WePix focuses on building systems that continue producing results over time.",
  "Marketing campaigns fade quickly. Strong digital infrastructure continues delivering value.",
  "The company believes in disciplined execution, ownership, and long term thinking.",
  "Ideas are valuable. Execution matters more.",
  "Growth is not a campaign. It is a process.",
];

export default function Manifesto() {
  return (
    <Layout>
      <section className="py-24 md:py-32 border-b border-border">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-sm font-medium text-muted-foreground mb-4 px-3 py-1 rounded-full border border-border bg-muted">Our Philosophy</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold">The WePix Manifesto</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <ImagePlaceholder label="Abstract philosophy" aspectRatio="portrait" className="rounded-xl" />
            </div>
            <div className="lg:col-span-3 space-y-6">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
