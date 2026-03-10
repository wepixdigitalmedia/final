import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import { Video, Calendar, ArrowRight } from "lucide-react";

const pastWebinars = [
  { title: "Meta Ads in 2024: What Actually Works", date: "March 2024", attendees: "250+" },
  { title: "Content Strategy for D2C Fashion Brands", date: "February 2024", attendees: "180+" },
  { title: "From ₹0 to ₹10L/month: A Case Study Breakdown", date: "January 2024", attendees: "300+" },
  { title: "AI Tools Every Marketer Should Be Using", date: "December 2023", attendees: "200+" },
];

export default function Webinar() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Webinars</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Free live sessions. Real insights.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              Join our weekly webinars on Meta Ads, content strategy, and growth. Free to attend, packed with value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Next Webinar */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8 text-center">
              <Calendar className="text-primary mx-auto mb-4" size={32} />
              <span className="text-xs font-display font-semibold uppercase tracking-widest text-primary">Next Webinar</span>
              <h2 className="font-display text-2xl md:text-3xl font-bold mt-3">Scaling Meta Ads: The 2024 Playbook</h2>
              <p className="text-muted-foreground mt-2">Friday, 7 PM IST • Free to Join</p>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="mt-6 font-display font-semibold gap-2">
                  Register Now <ArrowRight size={18} />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <SectionHeading tag="Past Sessions" title="Recordings available" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pastWebinars.map((w, i) => (
              <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Video className="text-primary" size={16} />
                      <span className="text-xs text-muted-foreground">{w.date} • {w.attendees} attendees</span>
                    </div>
                    <h3 className="font-display text-lg font-bold">{w.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
