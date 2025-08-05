import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">AIWU</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Automated SEO content that grows your traffic without the hassle.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Examples
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                API Reference
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Status
              </a>
            </div>
          </div>

        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {currentYear} AIWU. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};