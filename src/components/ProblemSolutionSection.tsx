import { CheckCircle, X } from "lucide-react";

export const ProblemSolutionSection = () => {
  const problemPoints = [
    "You don't have time to research keywords",
    "You don't know what to write about", 
    "Your old blog posts are stale and forgotten",
    "You've tried ChatGPT but it sounds robotic",
    "You're inconsistent with publishing",
    "Your content doesn't rank anyway"
  ];

  const solutionPoints = [
    "We find what people are searching for in your niche",
    "We plan a full content calendar for you",
    "We write articles that actually sound like you", 
    "We publish them to your blog automatically",
    "We share them on your social media",
    "We link everything together for better rankings"
  ];

  return (
    <section className="relative py-16 px-5 overflow-hidden">
      {/* Static background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
        }}
      />
      
      {/* Subtle gradient overlays */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
          `
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Problem Column */}
          <div className="bg-white/5 backdrop-blur-[20px] rounded-2xl p-8 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(239,68,68,0.1)]">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                You know you need <span className="text-red-400">SEO...</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                But let's be honest about what's really happening:
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {problemPoints.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-xl border border-transparent hover:bg-red-400/10 hover:border-red-400/20 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed font-normal">{problem}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 rounded-[20px] p-8 border-l-4 border-red-400 relative overflow-hidden">
              <div className="absolute top-2 left-5 text-6xl text-white/10 font-bold pointer-events-none">
                "
              </div>
              <p className="text-slate-100 italic text-lg leading-relaxed mb-5 relative z-10">
                "I know I should be blogging more, but between running my business 
                and everything else... it just never happens."
              </p>
              <p className="text-slate-400 text-sm font-medium">
                — Every small business owner, ever
              </p>
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-white/5 backdrop-blur-[20px] rounded-2xl p-8 border border-green-400/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(34,197,94,0.1)]">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                We fix that. <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">All of it.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Just give us your site. We'll handle everything:
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {solutionPoints.map((solution, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3 p-4 bg-white/[0.03] rounded-xl border border-transparent hover:bg-green-400/10 hover:border-green-400/20 transition-all duration-300"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed font-normal">{solution}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-black/30 rounded-[20px] p-8 border-l-4 border-green-400 relative overflow-hidden">
              <div className="absolute top-2 left-5 text-6xl text-white/10 font-bold pointer-events-none">
                "
              </div>
              <p className="text-slate-100 italic text-lg leading-relaxed mb-5 relative z-10">
                "I got more SEO content in 2 weeks than I did in a whole year. 
                AIWU actually gets what I need. It just works."
              </p>
              <p className="text-slate-400 text-sm font-medium">
                — Sarah Chen, SaaS Founder
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};