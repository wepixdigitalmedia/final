import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export function Layout({ children, hideNav }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideNav && <Navbar />}
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
