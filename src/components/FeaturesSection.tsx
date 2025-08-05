import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, PenTool, Share2, Link2, Image, Zap, ArrowRight } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Smart keyword discovery that drives real traffic",
      description: "Stop guessing which keywords to target. We analyze your competitors, find gaps in your content, and identify the exact keywords your customers are searching for. Watch your rankings climb as we focus on what actually converts.",
      image: "feature-keyword.jpg"
    },
    {
      icon: PenTool,
      title: "Content that reads like a human wrote it",
      description: "No more robotic AI content. Our articles feel natural, provide real value to your readers, and include everything Google wants to see: proper structure, internal links, and engaging copy that keeps visitors on your page.",
      image: "feature-content.jpg"
    },
    {
      icon: Share2,
      title: "Your unique voice, amplified",
      description: "Share a few examples of your best content and we'll match your tone perfectly. Whether you're professional, casual, or somewhere in between, every article sounds authentically you.",
      image: "feature-voice.jpg"
    },
    {
      icon: Image,
      title: "Professional visuals without the designer fees",
      description: "Every article comes with custom images that match your brand colors and style. No more stock photos that scream 'generic' - get visuals that make your content stand out.",
      image: "feature-images.jpg"
    },
    {
      icon: Link2,
      title: "Social media marketing on autopilot",
      description: "Transform every blog post into social content automatically. We craft engaging posts for LinkedIn, Twitter, and Facebook that drive traffic back to your website without you lifting a finger.",
      image: "feature-social.jpg"
    },
    {
      icon: Zap,
      title: "Set it once, profit forever",
      description: "Connect your website once and watch fresh content appear like magic. Works with WordPress, Webflow, Shopify, and more. Your SEO grows while you focus on running your business.",
      image: "feature-publish.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background" id="features">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Unlock your <span className="text-primary">SEO growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get new SEO-optimized articles daily, effortlessly.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <Button variant="hero" className="group">
                  Get started free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Image placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-border flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <feature.icon className="w-12 h-12 text-primary/40 mx-auto" />
                    <p className="text-sm text-muted-foreground">Feature preview</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-6 bg-card rounded-lg border border-border shadow-soft">
            <p className="text-lg font-medium text-foreground mb-2">
              The best part? You don't have to learn anything.
            </p>
            <p className="text-muted-foreground">
              No dashboards to master. No prompts to write. No settings to configure. 
              <br />Just enter your website and we handle the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};