import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [website, setWebsite] = useState("");
  const navigate = useNavigate();
  const particlesRef = useRef<HTMLDivElement>(null);
  const seoIconsRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/onboarding?website=${encodeURIComponent(website)}`);
  };

  // Create particles effect
  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const interval = setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesRef.current?.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 25000);
      }, 3000);

      return interval;
    };

    const particleInterval = createParticles();
    return () => clearInterval(particleInterval);
  }, []);

  // Create SEO icons effect
  useEffect(() => {
    const createSEOIcons = () => {
      if (!seoIconsRef.current) return;
      
      const icons = ['📈', '🔍', '📊', '💡', '⚡', '🎯', '📝', '🚀'];
      
      const interval = setInterval(() => {
        const icon = document.createElement('div');
        icon.className = 'hero-seo-icon';
        icon.textContent = icons[Math.floor(Math.random() * icons.length)];
        icon.style.left = Math.random() * 100 + '%';
        icon.style.animationDuration = (Math.random() * 15 + 20) + 's';
        seoIconsRef.current?.appendChild(icon);
        
        setTimeout(() => {
          icon.remove();
        }, 40000);
      }, 8000);

      return interval;
    };

    const iconInterval = createSEOIcons();
    return () => clearInterval(iconInterval);
  }, []);

  // Mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const shapes = document.querySelectorAll('.hero-bg-shape');
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        const x = mouseX * speed * 20;
        const y = mouseY * speed * 20;
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)'
      }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-bg-shape"></div>
        <div className="hero-bg-shape"></div>
        <div className="hero-bg-shape"></div>
      </div>

      {/* Grid overlay */}
      <div className="hero-grid-overlay"></div>

      {/* SEO icons container */}
      <div ref={seoIconsRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Light beam */}
      <div className="hero-light-beam"></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              Grow your <span className="hero-highlight">SEO</span><br />
              while you sleep
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
              We analyze your website and competitors, plan what to write, and automatically publish SEO content and social media posts that bring traffic.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="hero-input-wrapper bg-white/95 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden transition-all duration-300 hover:border-white/40 hover:-translate-y-1 focus-within:border-primary focus-within:shadow-2xl" 
                 style={{ 
                   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
                 }}>
              <div className="flex">
                <Input
                  type="url"
                  placeholder="yoursite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="flex-1 h-20 px-6 text-lg bg-transparent border-none text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 font-medium"
                  required
                />
                <Button 
                  type="submit" 
                  className="h-20 px-8 bg-gradient-to-r from-[#ff7a59] to-[#ff5722] text-white hover:from-[#ff5722] hover:to-[#e64100] transition-all duration-300 border-none font-semibold text-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    <ArrowRight className="w-6 h-6" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff5722] to-[#e64100] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};