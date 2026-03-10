import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useGSAP, heroReveal } from "@/hooks/useGSAP";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const containerRef = useGSAP((container) => {
    heroReveal(container);
  });

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="gsap-hero-section py-24 md:py-32">
          <div className="container max-w-3xl">
            <span className="gsap-hero-tag inline-block text-sm font-medium text-muted-foreground mb-4 opacity-0 px-3 py-1 rounded-full border border-border bg-muted">Contact</span>
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0">Let's talk.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Book a free strategy call or drop us a message.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Book a Strategy Call</h2>
                <p className="text-muted-foreground mb-6">30 minutes. No obligations. We'll talk about your brand.</p>
                <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-lg font-medium w-full">Schedule on Cal.com →</Button>
                </a>
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Phone size={16} /> +91 98765 43210</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Mail size={16} /> hello@wepix.in</div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="shrink-0 mt-0.5" />
                    <div><p>Tirupur, Tamil Nadu (HQ)</p><p>Bangalore, Karnataka</p></div>
                  </div>
                </div>
              </div>
              <Card className="rounded-xl border-border">
                <CardContent className="p-6">
                  <h2 className="font-display text-2xl font-bold mb-4">Drop a Message</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="Your name" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@brand.com" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="brand">Brand / Company</Label><Input id="brand" placeholder="Your brand name" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us about your brand..." rows={4} className="mt-1 rounded-lg" /></div>
                    <Button type="submit" className="w-full rounded-lg font-medium">Send Message</Button>
                    <p className="text-xs text-muted-foreground text-center">This form is for display only. Please use the booking link or WhatsApp.</p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.40721379252!2d77.2813462!3d11.1085242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba907b0754cb741%3A0x60a0b7a69e3e25e8!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Tirupur" />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border border-border">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908809!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Bangalore" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
