import { Search, Calendar, Zap, Share2 } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Understand your business",
      description: "We dive deep into your niche, study your competitors, and identify your ideal audience. Then we uncover high-traffic keywords that your competitors missed."
    },
    {
      icon: Calendar,
      title: "Build your content roadmap",
      description: "Get a strategic 30-day content plan where every article targets keywords with maximum potential for your specific business goals."
    },
    {
      icon: Zap,
      title: "Watch your blog grow",
      description: "We create and publish SEO-optimized articles automatically. Your blog stays active and grows while you focus on running your business."
    },
    {
      icon: Share2,
      title: "Amplify your reach",
      description: "Every article automatically gets shared across social media with optimized posts that drive engagement and bring new readers to your content."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            How we make <span className="bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">magic happen</span>
          </h2>
        </div>

        <div className="relative">
          {/* Background connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative group opacity-0 animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card with equal height */}
                <div className="bg-card p-6 rounded-2xl text-center relative transition-all duration-500 hover:translate-y-[-8px] hover:shadow-warm border border-primary/10 hover:border-primary/30 h-full flex flex-col">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Step number - positioned above card */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-warm z-20">
                    {index + 1}
                  </div>
                  
                  {/* Icon container */}
                  <div className="relative w-16 h-16 mx-auto mb-6 mt-4 bg-gradient-to-br from-primary/10 to-orange-600/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <step.icon className="w-8 h-8 text-primary relative z-10" />
                  </div>
                  
                  {/* Content - flex-grow to fill available space */}
                  <div className="relative space-y-4 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};