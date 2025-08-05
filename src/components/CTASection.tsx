import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export const CTASection = () => {
  const [website, setWebsite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle website submission and start onboarding
    console.log("Starting analysis for:", website);
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8 text-white">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Join 500+ growing businesses
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold">
              Ready to grow your SEO traffic?
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Stop struggling with content. Stop watching competitors rank above you. 
              Let AIWU handle your SEO content while you focus on what you do best.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex gap-3">
              <Input
                type="url"
                placeholder="Enter your website URL..."
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="flex-1 h-12 text-base bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white/40"
                required
              />
              <Button 
                type="submit" 
                variant="secondary"
                size="xl"
                className="px-6 bg-white text-primary hover:bg-white/90"
              >
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-white/80">
              Enter your site and we'll take it from there
            </p>
          </form>

          <div className="flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              ✓ 1-day free trial
            </div>
            <div className="flex items-center gap-2">
              ✓ No card required
            </div>
            <div className="flex items-center gap-2">
              ✓ Setup in minutes
            </div>
          </div>

          <div className="pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm">
              Questions? Email us at{" "}
              <a href="mailto:support@aiwu.com" className="text-white underline hover:no-underline">
                support@aiwu.com
              </a>{" "}
              or chat with our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};