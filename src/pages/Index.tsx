import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { VideoSection } from "@/components/VideoSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ExamplesSection } from "@/components/ExamplesSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VideoSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ResultsSection />
      <TestimonialsSection />
      <ExamplesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
