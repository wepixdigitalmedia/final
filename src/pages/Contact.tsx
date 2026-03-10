import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BookingFormDialog } from "@/components/shared/BookingFormDialog";
import { useGSAP, heroReveal } from "@/hooks/useGSAP";
import { Phone, Mail, MapPin } from "lucide-react";
import { TirupurTooltip } from "@/components/shared/TirupurTooltip";

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
            <h1 className="gsap-hero-title font-display text-4xl md:text-5xl lg:text-6xl font-semibold opacity-0">Let's talk. We promise we're friendly.</h1>
            <p className="gsap-hero-desc mt-4 text-lg text-muted-foreground opacity-0">Book a free strategy call (30 mins, no pitch decks, no awkward silences) or just drop us a message. We reply faster than most people reply to their family WhatsApp groups.</p>
          </div>
        </section>

        <section className="py-24 border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-2xl font-semibold mb-4">Book a Strategy Call</h2>
                <p className="text-muted-foreground mb-6">30 minutes. No obligations. No sales pitch. Just a genuine conversation about your brand, your goals, and whether we're the right fit. Think of it as a first date, but for marketing.</p>
                <BookingFormDialog triggerLabel="Schedule Your Call" triggerClassName="w-full" showArrow />
                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Phone size={16} /> +91 98765 43210</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground"><Mail size={16} /> hello@wepix.in</div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin size={16} className="shrink-0 mt-0.5" />
                    <div><p><TirupurTooltip />, Tamil Nadu (HQ — the OG)</p><p>Bangalore, Karnataka (the fancy one)</p></div>
                  </div>
                </div>
              </div>
              <Card className="rounded-xl border-border">
                <CardContent className="p-6">
                  <h2 className="font-display text-2xl font-semibold mb-4">Drop a Message</h2>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div><Label htmlFor="name">Name</Label><Input id="name" placeholder="What should we call you?" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@yourbrand.com" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="brand">Brand / Company</Label><Input id="brand" placeholder="Your brand's name" className="mt-1 rounded-lg" /></div>
                    <div><Label htmlFor="message">Message</Label><Textarea id="message" placeholder="Tell us about your brand and what you're looking for. The more detail, the better our first conversation will be!" rows={4} className="mt-1 rounded-lg" /></div>
                    <Button type="submit" className="w-full rounded-lg font-medium">Send Message</Button>
                    <p className="text-xs text-muted-foreground text-center">This form is for display only. Please use the booking link or WhatsApp — we're way faster there!</p>
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
