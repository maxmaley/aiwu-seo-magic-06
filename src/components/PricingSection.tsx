import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";

export const PricingSection = () => {
  const features = [
    "Unlimited keyword research",
    "Complete content strategy",
    "AI article generation",
    "Automatic publishing",
    "Social media sharing", 
    "Internal link building",
    "Traffic analytics",
    "Priority support"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle" id="pricing">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Simple pricing. <span className="text-primary">Big results.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            One price. Everything included. No hidden fees or surprises.
          </p>
        </div>

        {/* Horizontal pricing card */}
        <Card className="p-8 border-2 border-primary shadow-warm bg-card">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            
            {/* Price section */}
            <div className="text-center lg:text-left space-y-4">
              <Badge className="bg-primary text-white px-4 py-1">
                per project
              </Badge>
              <div className="space-y-2">
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-4xl font-bold text-foreground">$49</span>
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                <p className="font-medium text-foreground">Try it free for 1 day</p>
                <p className="text-sm text-muted-foreground">No credit card required</p>
              </div>
            </div>

            {/* Features section */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA section */}
            <div className="space-y-4">
              <Button variant="hero" size="xl" className="w-full group">
                Start free trial
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="w-full">
                Buy now - $49/mo
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Cancel anytime. No contracts.
              </p>
            </div>
          </div>
        </Card>

        {/* Value prop */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Compare that to hiring a freelancer ($500/month) or an agency ($2,000/month)
          </p>
          <p className="text-2xl font-semibold text-foreground">
            You get better results for <span className="text-primary">90% less cost</span>
          </p>
        </div>

        {/* Money back guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-card rounded-lg border border-border shadow-soft">
            <h3 className="font-semibold text-foreground mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-muted-foreground">
              Not happy with your results? We'll refund every penny. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};