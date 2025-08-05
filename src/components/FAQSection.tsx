import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What if I already have a blog?",
      answer: "Perfect! AIWU works with existing blogs. We analyze your current content, identify gaps, and build upon what you already have. We can even improve your existing posts with better internal linking."
    },
    {
      question: "Do I need to connect Google Search Console?",
      answer: "Not required, but recommended. Connecting GSC helps us see which keywords you're already ranking for and find quick wins. But we can start generating content immediately without it."
    },
    {
      question: "What AI model do you use?",
      answer: "We use a combination of the latest AI models, including GPT-4 and Claude, plus our own proprietary training for SEO content. The result is articles that sound human and rank well."
    },
    {
      question: "Can I approve articles before they're published?",
      answer: "Absolutely. You can set AIWU to auto-publish or require your approval first. You'll get a preview of every article before it goes live, and you can edit anything you want."
    },
    {
      question: "How many articles do you publish per month?",
      answer: "It depends on your plan and competition, but typically 4-8 high-quality, long-form articles per month. We focus on quality over quantity — each article is designed to rank and convert."
    },
    {
      question: "Do you handle WordPress, Shopify, etc.?",
      answer: "Yes! AIWU integrates with WordPress, Shopify, Webflow, Ghost, and most major platforms. If you have a custom setup, we can work with your API or help you with manual publishing."
    },
    {
      question: "What about images and videos?",
      answer: "Every article includes relevant images, and we can generate custom graphics when needed. Video integration is coming soon — we'll embed relevant YouTube videos or create simple explainer videos."
    },
    {
      question: "How do you make content sound like my brand?",
      answer: "We analyze your existing content, website copy, and brand voice. Then we create a style guide that ensures every article matches your tone. You can also provide specific guidelines during setup."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, no contracts or commitments. Cancel anytime from your dashboard. You'll still get any articles we've already started working on."
    },
    {
      question: "What kind of businesses work best with AIWU?",
      answer: "Small to medium businesses, SaaS companies, consultants, agencies, and e-commerce stores see the best results. Basically, anyone who needs consistent, quality content but doesn't have time to create it."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Questions? We've got answers.
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about AIWU SEO Machine
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-orange-50 rounded-lg border border-orange-100">
            <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              We're here to help. Chat with our team and get answers in minutes.
            </p>
            <a 
              href="mailto:support@aiwu.com" 
              className="text-primary font-medium hover:underline"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};