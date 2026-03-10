import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function BusinessContact() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Business Inquiries</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Let's grow your business.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              Tell us about your business goals and we'll figure out the right approach.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Book a Strategy Call</h2>
              <p className="text-muted-foreground mb-6">
                30-minute consultation with our business team. We'll discuss your goals, challenges, and how WePix can help.
              </p>
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-display font-semibold w-full">
                  Schedule on Cal.com →
                </Button>
              </a>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={16} className="text-primary" /> +91 98765 43210
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={16} className="text-primary" /> business@wepix.in
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <p>WePix Business, Bangalore, Karnataka, India</p>
                </div>
              </div>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="font-display text-2xl font-bold mb-4">Send a Brief</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Company name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="service">Service of Interest</Label>
                    <Input id="service" placeholder="e.g., AI Agents, Lead Gen, Google Ads" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Tell us about your goals</Label>
                    <Textarea id="message" placeholder="What are you looking to achieve?" rows={4} className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full font-display font-semibold">
                    Submit Brief
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    This form is for display only. Please use the booking link or WhatsApp.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
