import { Button } from "@/components/ui/button";
import { TrendingUp, Link2, BarChart3 } from "lucide-react";

export const ResultsSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Your rankings improve automatically",
      description: "Every article we publish is optimized for search engines. Your domain authority grows stronger with each piece of content."
    },
    {
      icon: Link2,
      title: "Smart internal linking boosts everything",
      description: "We connect your content strategically. When one article ranks, it lifts your entire site with it."
    },
    {
      icon: BarChart3,
      title: "Traffic that converts to customers",
      description: "We target keywords your ideal customers actually search for. More visitors means more business."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--dark-bg)) 0%, hsl(var(--dark-card)) 50%, hsl(var(--dark-bg)) 100%)'
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Real traffic that <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">actually grows</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch your website climb the rankings while you sleep
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features list */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white/5 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:translate-x-2 hover:border-primary/40 hover:shadow-warm relative overflow-hidden opacity-0 animate-slide-in-left group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover effect */}
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-all duration-700 group-hover:left-[100%]" />
                
                <div className="flex items-start gap-6 relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Results panel */}
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/8 backdrop-blur-xl border border-primary/30 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Animated border glow */}
              <div className="absolute inset-[-2px] bg-gradient-to-r from-primary via-orange-600 to-primary bg-[length:200%_200%] rounded-3xl opacity-50 animate-border-glow -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl" />
              
              <div className="relative">
                <div className="text-6xl lg:text-7xl font-black text-white mb-4 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]" style={{ textShadow: '0 4px 20px rgba(255, 122, 89, 0.6)' }}>
                  +127%
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  Average traffic increase
                </div>
                <div className="text-gray-300 mb-10">
                  in the first 90 days
                </div>

                {/* Testimonial */}
                <div className="bg-black/20 border-l-4 border-primary rounded-2xl p-8 mb-10">
                  <p className="text-gray-200 italic text-lg leading-relaxed mb-4">
                    "Our organic traffic tripled in 3 months. I wish I found AIWU sooner."
                  </p>
                  <p className="text-gray-400 text-sm">
                    — Mark Sullivan, SaaS Founder
                  </p>
                </div>

                <Button variant="hero" size="lg" className="w-full group">
                  Start growing your traffic
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};