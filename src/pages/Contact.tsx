import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-hero text-hero-foreground py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-xs font-display font-semibold uppercase tracking-widest text-primary mb-4">Contact</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Let's talk.
            </h1>
            <p className="mt-4 text-lg text-hero-foreground/60">
              Book a free strategy call or drop us a message. No pitch decks, no BS.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Book a call */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-4">Book a Strategy Call</h2>
              <p className="text-muted-foreground mb-6">
                30 minutes. No obligations. We'll talk about your brand, your goals, and whether we're the right fit.
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
                  <Mail size={16} className="text-primary" /> hello@wepix.in
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p>Tirupur, Tamil Nadu (HQ)</p>
                    <p>Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form (static) */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="font-display text-2xl font-bold mb-4">Drop a Message</h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@brand.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="brand">Brand / Company</Label>
                    <Input id="brand" placeholder="Your brand name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your brand and what you need help with..." rows={4} className="mt-1" />
                  </div>
                  <Button type="submit" className="w-full font-display font-semibold">
                    Send Message
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    This form is for display only. Please use the booking link or WhatsApp to reach us.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40721379252!2d77.2813462!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0754cb741%3A0x60a0b7a69e3e25e8!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Tirupur"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908809!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Bangalore"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
