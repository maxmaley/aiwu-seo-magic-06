import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-primary">AIWU</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#examples" className="text-foreground hover:text-primary transition-colors">
            Writing Examples
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#blog" className="text-foreground hover:text-primary transition-colors">
            Blog
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Login
          </Button>
          <Button variant="hero" asChild>
            <Link to="/onboarding">Get started free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};