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
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Tirupur</p>
            <p className="text-sm text-muted-foreground">WePix Digital Media, Tirupur, Tamil Nadu, India</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Bangalore</p>
            <p className="text-sm text-muted-foreground">WePix Digital Media, Bangalore, Karnataka, India</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Chennai</p>
            <p className="text-sm text-muted-foreground">WePix Digital Media, Chennai, Tamil Nadu, India</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">UAE</p>
            <p className="text-sm text-muted-foreground">WePix Digital Media, Dubai, United Arab Emirates</p>
          </div>
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
