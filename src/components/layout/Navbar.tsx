import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Fashion", href: "/fashion" },
  { label: "Academy", href: "/academy" },
  { label: "Business", href: "/business" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const subNavs: Record<string, { label: string; href: string }[]> = {
  "/fashion": [
    { label: "Overview", href: "/fashion" },
    { label: "Kickstarter", href: "/fashion/kickstarter" },
    { label: "WePixStudio", href: "/fashion/wepixstudio" },
    { label: "Case Studies", href: "/fashion/case-studies" },
    { label: "Book a Call", href: "/fashion/book" },
  ],
  "/academy": [
    { label: "Overview", href: "/academy" },
    { label: "Meta Ads Course", href: "/academy/meta-ads-course" },
    { label: "Webinar", href: "/academy/webinar" },
    { label: "Community", href: "/academy/community" },
  ],
  "/business": [
    { label: "Overview", href: "/business" },
    { label: "AI Agents", href: "/business/ai-agents" },
    { label: "Mentorship", href: "/business/mentorship" },
    { label: "Contact", href: "/business/contact" },
  ],
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const activeSection = Object.keys(subNavs).find((key) =>
    location.pathname.startsWith(key)
  );
  const subLinks = activeSection ? subNavs[activeSection] : null;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-hero/95 backdrop-blur-md border-b border-border/10">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-display text-2xl font-bold text-hero-foreground tracking-tight">
            We<span className="text-primary">Pix</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors text-hero-foreground/70 hover:text-hero-foreground",
                  (location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href))) &&
                    "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="ml-4 font-display font-semibold">
                Book a Call
              </Button>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-hero-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-hero border-t border-border/10 pb-4">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block px-6 py-3 text-sm font-medium text-hero-foreground/70 hover:text-hero-foreground",
                  (location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href))) &&
                    "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 pt-2">
              <a href="https://cal.com" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="w-full font-display font-semibold">
                  Book a Call
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Context subnav */}
      {subLinks && (
        <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container flex items-center gap-1 overflow-x-auto py-2">
            {subLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors text-muted-foreground hover:text-foreground",
                  location.pathname === link.href && "bg-primary/10 text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
