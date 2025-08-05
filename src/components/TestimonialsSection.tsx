import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I got more SEO content in 2 weeks than I did in a whole year. AIWU actually gets what I need. It just works.",
      author: "Sarah Chen",
      role: "SaaS Founder",
      company: "DataFlow",
      initials: "SC",
      rating: 5
    },
    {
      quote: "Finally, something that doesn't require me to become an SEO expert. The articles it writes are better than what I was paying freelancers for.",
      author: "Marcus Rodriguez",
      role: "E-commerce Owner",
      company: "TechGear Pro",
      initials: "MR",
      rating: 5
    },
    {
      quote: "My organic traffic doubled in 3 months. The content feels authentic and actually helps my customers. This is what I've been looking for.",
      author: "Emma Thompson",
      role: "Consultant",
      company: "Growth Partners",
      initials: "ET",
      rating: 5
    },
    {
      quote: "I was skeptical about AI content, but AIWU changed my mind. It understands my industry and writes like I would. Game changer.",
      author: "David Kim",
      role: "Agency Owner",
      company: "Digital Solutions",
      initials: "DK",
      rating: 5
    },
    {
      quote: "The automatic publishing feature alone is worth it. I literally don't think about content anymore - it just happens.",
      author: "Lisa Parker",
      role: "Small Business Owner",
      company: "Local Services Co",
      initials: "LP",
      rating: 5
    },
    {
      quote: "Best investment I've made for my business this year. ROI was positive within the first month.",
      author: "James Wilson",
      role: "SaaS Founder",
      company: "ProjectFlow",
      initials: "JW",
      rating: 5
    }
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="text-center space-y-6 mb-16 px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
          Don't take our word for it
        </h2>
        <p className="text-xl text-muted-foreground">
          Here's what real people are saying about AIWU:
        </p>
      </div>

      {/* Full-width scrolling cards */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee hover:pause-marquee">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex-shrink-0 w-80 p-6 hover:shadow-soft transition-all duration-200 bg-card border-border">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-orange-100 text-primary font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
          {/* Duplicate set for seamless scrolling */}
          {testimonials.map((testimonial, index) => (
            <Card key={`duplicate-${index}`} className="flex-shrink-0 w-80 p-6 hover:shadow-soft transition-all duration-200 bg-card border-border">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-orange-100 text-primary font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center px-4">
        <div className="inline-block p-6 bg-orange-50 rounded-lg border border-orange-100">
          <p className="text-lg font-medium text-foreground mb-2">
            Join 500+ businesses growing with AIWU
          </p>
          <p className="text-muted-foreground">
            Average traffic increase: <span className="font-semibold text-primary">+180%</span> in 90 days
          </p>
        </div>
      </div>
    </section>
  );
};