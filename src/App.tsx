import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import About from "./pages/About";
import Manifesto from "./pages/Manifesto";
import Contact from "./pages/Contact";
import People from "./pages/People";
import Handbook from "./pages/Handbook";
import Blogs from "./pages/Blogs";
import DigitalStore from "./pages/DigitalStore";
import Fashion from "./pages/fashion/Fashion";
import Kickstarter from "./pages/fashion/Kickstarter";
import WePixStudio from "./pages/fashion/WePixStudio";
import CaseStudies from "./pages/fashion/CaseStudies";
import BookACall from "./pages/fashion/BookACall";
import Academy from "./pages/academy/Academy";
import MetaAdsCourse from "./pages/academy/MetaAdsCourse";
import Webinar from "./pages/academy/Webinar";
import Community from "./pages/academy/Community";
import Business from "./pages/business/Business";
import AIAgents from "./pages/business/AIAgents";
import Mentorship from "./pages/business/Mentorship";
import BusinessContact from "./pages/business/BusinessContact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/handbook" element={<Handbook />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/digital-store" element={<DigitalStore />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/fashion/kickstarter" element={<Kickstarter />} />
          <Route path="/fashion/wepixstudio" element={<WePixStudio />} />
          <Route path="/fashion/case-studies" element={<CaseStudies />} />
          <Route path="/fashion/book" element={<BookACall />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy/meta-ads-course" element={<MetaAdsCourse />} />
          <Route path="/academy/webinar" element={<Webinar />} />
          <Route path="/academy/community" element={<Community />} />
          <Route path="/business" element={<Business />} />
          <Route path="/business/ai-agents" element={<AIAgents />} />
          <Route path="/business/mentorship" element={<Mentorship />} />
          <Route path="/business/contact" element={<BusinessContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
