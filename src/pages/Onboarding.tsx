import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CompanyInfoStep } from "@/components/onboarding/CompanyInfoStep";
import { CompetitorsStep } from "@/components/onboarding/CompetitorsStep";
import { CurrentContentStep } from "@/components/onboarding/CurrentContentStep";
import { ArticleSettingsStep } from "@/components/onboarding/ArticleSettingsStep";
import { KeywordsStep } from "@/components/onboarding/KeywordsStep";
import { SocialMediaStep } from "@/components/onboarding/SocialMediaStep";
import { IntegrationsStep } from "@/components/onboarding/IntegrationsStep";
import { useNavigate } from "react-router-dom";

const steps = [
  { id: 1, title: "Расскажите о себе", component: CompanyInfoStep },
  { id: 2, title: "Конкуренты", component: CompetitorsStep },
  { id: 3, title: "Текущий контент", component: CurrentContentStep },
  { id: 4, title: "Настройка статей", component: ArticleSettingsStep },
  { id: 5, title: "Ключевые слова", component: KeywordsStep },
  { id: 6, title: "Соцсети", component: SocialMediaStep },
  { id: 7, title: "Интеграции", component: IntegrationsStep },
];

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Get website from URL params if user came from hero form
  const urlParams = new URLSearchParams(window.location.search);
  const websiteFromUrl = urlParams.get('website');

  const progress = (currentStep / steps.length) * 100;
  const CurrentStepComponent = steps[currentStep - 1].component;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding and redirect to dashboard
      toast({
        title: "Онбординг завершен!",
        description: "Перенаправляем в личный кабинет...",
      });
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const updateFormData = (stepData: any) => {
    setFormData({ ...formData, ...stepData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-primary">AIWU</h1>
            <div className="text-sm text-muted-foreground">
              Шаг {currentStep} из {steps.length}
            </div>
          </div>
          
          {/* Progress bar */}
          <Progress value={progress} className="h-2 mb-6" />
          
          {/* Step indicator */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`flex flex-col items-center space-y-2 transition-all duration-200 ${
                  step.id <= currentStep 
                    ? 'text-primary cursor-pointer hover:scale-105' 
                    : 'text-muted-foreground cursor-default'
                }`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                    step.id === currentStep
                      ? 'bg-primary text-white scale-110'
                      : step.id < currentStep
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step.id}
                </div>
                <span className="text-xs font-medium max-w-16 text-center leading-tight">
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <CurrentStepComponent 
            formData={formData}
            updateFormData={updateFormData}
            websiteFromUrl={websiteFromUrl}
          />
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Назад
          </Button>
          
          <Button
            onClick={handleNext}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            {currentStep === steps.length ? 'Завершить' : 'Далее'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}