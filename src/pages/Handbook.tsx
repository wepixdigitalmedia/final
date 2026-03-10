import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Clock, Calendar, Shield, Lock } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Welcome",
    content: (
      <div className="space-y-3">
        <p>Welcome to WePix Digital Media LLP.</p>
        <p>The company was founded to build digital growth systems for modern brands.</p>
        <p>Your role here matters. Creativity, responsibility, and curiosity are expected from every team member.</p>
      </div>
    ),
  },
  {
    icon: Clock,
    title: "Work Schedule",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-muted-foreground">Working Days</span><span>Monday to Saturday</span>
          <span className="text-muted-foreground">Working Hours</span><span>9:30 AM to 7:00 PM</span>
          <span className="text-muted-foreground">Lunch Break</span><span>1:15 PM to 2:00 PM</span>
          <span className="text-muted-foreground">Tea Break</span><span>4:00 PM to 4:15 PM</span>
        </div>
        <p className="text-sm text-muted-foreground">Grace check-in allowed until 9:45 AM.</p>
      </div>
    ),
  },
  {
    icon: Calendar,
    title: "Leave System",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <span className="text-muted-foreground">Casual Leave</span><span>12 days per year</span>
          <span className="text-muted-foreground">Sick Leave</span><span>12 days per year</span>
        </div>
        <p className="text-sm text-muted-foreground">Leave requests must follow the internal HR process.</p>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Workplace Conduct",
    content: (
      <div className="space-y-3">
        <p>Professional conduct is expected at all times.</p>
        <p>Harassment and discrimination are strictly prohibited.</p>
        <p>The company follows workplace safety and POSH regulations.</p>
      </div>
    ),
  },
  {
    icon: Lock,
    title: "Confidentiality",
    content: (
      <div className="space-y-3">
        <p>Employees must protect client data and internal systems.</p>
        <p>Sharing confidential information outside the company is prohibited.</p>
      </div>
    ),
  },
];

export default function Handbook() {
  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <SectionHeading
            tag="Handbook"
            title="How we work at WePix"
            description="This handbook covers the essential policies and expectations for every team member."
            align="left"
          />
          <ImagePlaceholder label="Company handbook" aspectRatio="wide" className="rounded-xl mb-12" />
          <div className="space-y-4">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <Card className="border-border/50 hover:border-border transition-colors">
                  <CardContent className="p-5 flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <section.icon size={18} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold leading-tight mb-2">{section.title}</h3>
                      <div className="text-sm text-muted-foreground">{section.content}</div>
                    </div>
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
