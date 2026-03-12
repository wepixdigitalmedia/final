import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Play } from "lucide-react";

interface WistiaLeadFormProps {
  mediaId: string;
}

export function WistiaLeadForm({ mediaId }: WistiaLeadFormProps) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Here you would integrate with your backend/CRM API
    setIsSubmitting(false);
    setHasSubmitted(true);
  };

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl relative w-full aspect-video isolate bg-muted/20 border border-border/50">
      <AnimatePresence mode="wait">
        {!hasSubmitted ? (
          <motion.div
            key="lead-form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 flex flex-col justify-center items-center p-6 bg-background/95 backdrop-blur-sm"
          >
            <div className="max-w-md w-full text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                <Play className="w-5 h-5 ml-1 fill-current" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">Watch the Strategy Video</h3>
              <p className="text-muted-foreground text-sm mb-6">Enter your details below to get instant access to the video.</p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="space-y-1">
                  <Input required type="text" placeholder="Full Name" className="bg-background" />
                </div>
                <div className="space-y-1">
                  <Input required type="email" placeholder="Email Address" className="bg-background" />
                </div>
                <div className="space-y-1">
                  <Input required type="tel" placeholder="WhatsApp Number" className="bg-background" />
                </div>
                
                <Button type="submit" className="w-full font-medium" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Unlocking..." : "Watch Video Now"}
                </Button>
                
                <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-muted-foreground">
                  <Lock className="w-3 h-3" />
                  <span>We hate spam. Your information is safe and secure in our vault.</span>
                </div>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="wistia-player"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full h-full bg-black flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-background pointer-events-none z-[-1]" />
            <iframe 
              src={`https://fast.wistia.net/embed/iframe/${mediaId}?autoPlay=true&videoFoam=true&playbar=false&fullscreenButton=false&settingsControl=false&volumeControl=false&smallPlayButton=true&playButton=true&wistiaLogo=false&seo=false`} 
              title="WePix VSL" 
              allow="autoplay; fullscreen" 
              allowFullScreen
              className="w-[101%] h-[101%] -ml-[0.5%] -mt-[0.5%] border-none bg-transparent"
              name="wistia_embed"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
