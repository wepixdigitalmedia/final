import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin, MapPin } from "lucide-react";

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
    { label: "Handbook", href: "/handbook" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Blog", href: "/blogs" },
    { label: "Case Studies", href: "/fashion/case-studies" },
    { label: "Community", href: "/academy/community" },
    { label: "Webinar", href: "/academy/webinar" },
  ],
};

export function Footer() {
  return (
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
              <a href="https://instagram.com/wepix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@wepix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://linkedin.com/company/wepix" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
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
            { city: "Tirupur", flag: "🇮🇳", address: "Sheriff Colony, Tirupur" },
            { city: "Bangalore", flag: "🇮🇳", address: "HSR Layout, Bangalore" },
            { city: "Chennai", flag: "🇮🇳", address: "Casagrand Amberly, Navalur, Chennai" },
            { city: "Dubai", flag: "🇦🇪", address: "Al Safa St - Downtown Dubai" },
          ].map((loc) => (
            <div key={loc.city} className="flex items-start gap-2.5">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center mt-0.5">
                <MapPin size={14} className="text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5 flex items-center gap-1.5">
                  {loc.city} <span className="text-sm">{loc.flag}</span>
                </p>
                <p className="text-sm text-muted-foreground">{loc.address}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} WePix Digital Media Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
