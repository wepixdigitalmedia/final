import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, MapPin, Facebook, Twitter, Mail } from "lucide-react";
import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { SectionHeading } from "@/components/shared/SectionHeading";

const footerLinks = {
  "Brand Verticals": [
    { label: "Fashion", href: "/fashion" },
    { label: "Academy", href: "/academy" },
    { label: "Business", href: "/business" },
    { label: "Digital Store", href: "/digital-store" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "People", href: "/people" },
    { label: "Careers", href: "/careers" },
    { label: "Handbook", href: "/handbook" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Perennial", href: "/perennial" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blogs" },
    { label: "Case Studies", href: "/fashion/case-studies" },
    { label: "Community", href: "/academy/community" },
    { label: "Webinar", href: "/academy/webinar" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/wepix", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/wepix", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@wepix", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/wepix", label: "X" },
  { icon: Facebook, href: "https://facebook.com/wepix", label: "Facebook" },
];

// Medium icon (not in lucide)
function MediumIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42zm2.04 0c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75c.66 0 1.19 2.58 1.19 5.75z" />
    </svg>
  );
}

export function Footer() {
  return (
    <>
      {/* Legal CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="container py-16">
          <SectionHeading
            tag="Legal"
            title="Need clarity before working with us"
            description="If you want to understand our policies, privacy rules, or agreements before working with us, you can access our legal documents here. These explain how we handle data, privacy, and responsibilities when working with clients and partners."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mt-10">
            <ImagePlaceholder label="Abstract legal illustration" aspectRatio="video" className="rounded-xl" />
            <div>
              <h3 className="font-display text-xl font-semibold mb-6">Sexy Legal Documents</h3>
              <div className="space-y-2 mb-8">
                <p className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</p>
                <p className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms & Conditions</p>
                <p className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Cookie Policy</p>
              </div>

              <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-4">Legal Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Legal Email</p>
                    <a href="mailto:legal@wepix.in" className="text-sm hover:text-foreground transition-colors">legal@wepix.in</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">General Email</p>
                    <a href="mailto:hello@wepix.in" className="text-sm hover:text-foreground transition-colors">hello@wepix.in</a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">HR Email</p>
                    <a href="mailto:hr@wepix.in" className="text-sm hover:text-foreground transition-colors">hr@wepix.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link to="/" className="font-display text-2xl font-bold tracking-tight">
                WePix
              </Link>
              <p className="mt-3 text-muted-foreground text-sm max-w-xs">
                Digital Media. Built Different.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={social.label}>
                    <social.icon size={18} />
                  </a>
                ))}
                <a href="https://medium.com/@wepix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Medium">
                  <MediumIcon size={18} />
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Tirupur", address: "Sheriff Colony, Tirupur" },
              { city: "Bangalore", address: "HSR Layout, Bangalore" },
              { city: "Chennai", address: "Casagrand Amberly, Navalur, Chennai" },
              { city: "Dubai", address: "Al Safa St - Downtown Dubai" },
            ].map((loc) => (
              <div key={loc.city} className="flex items-start gap-2.5">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center mt-0.5">
                  <MapPin size={14} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{loc.city}</p>
                  <p className="text-sm text-muted-foreground">{loc.address}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 WePix Digital Media LLP (India) | Perennial Group (A Consortium)
            </p>
            <div className="flex gap-6">
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
