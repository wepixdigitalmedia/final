import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  "Brand Verticals": [
    { label: "Fashion", href: "/fashion" },
    { label: "Academy", href: "/academy" },
    { label: "Business", href: "/business" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Case Studies", href: "/fashion/case-studies" },
    { label: "Community", href: "/academy/community" },
    { label: "Webinar", href: "/academy/webinar" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-bold tracking-tight">
              We<span className="text-primary">Pix</span>
            </Link>
            <p className="mt-3 text-hero-foreground/60 text-sm max-w-xs">
              Digital Media. Built Different.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/wepix" target="_blank" rel="noopener noreferrer" className="text-hero-foreground/50 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@wepix" target="_blank" rel="noopener noreferrer" className="text-hero-foreground/50 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://linkedin.com/company/wepix" target="_blank" rel="noopener noreferrer" className="text-hero-foreground/50 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm text-hero-foreground/40 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-hero-foreground/60 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Addresses */}
        <div className="mt-12 pt-8 border-t border-hero-foreground/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs text-hero-foreground/40 uppercase tracking-wider font-display mb-2">Tirupur Office</p>
            <p className="text-sm text-hero-foreground/60">WePix Digital Media, Tirupur, Tamil Nadu, India</p>
          </div>
          <div>
            <p className="text-xs text-hero-foreground/40 uppercase tracking-wider font-display mb-2">Bangalore Office</p>
            <p className="text-sm text-hero-foreground/60">WePix Digital Media, Bangalore, Karnataka, India</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-hero-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-hero-foreground/40">
            © {new Date().getFullYear()} WePix Digital Media Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-hero-foreground/40">Privacy Policy</span>
            <span className="text-xs text-hero-foreground/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
