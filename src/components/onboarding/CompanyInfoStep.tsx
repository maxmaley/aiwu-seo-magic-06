import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Wand2, Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CompanyInfoStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  websiteFromUrl?: string | null;
}

export function CompanyInfoStep({ formData, updateFormData, websiteFromUrl }: CompanyInfoStepProps) {
  const { toast } = useToast();
  const [isAIFilling, setIsAIFilling] = useState(false);
  const [company, setCompany] = useState(formData.company || "");
  const [industry, setIndustry] = useState(formData.industry || "");
  const [description, setDescription] = useState(formData.description || "");
  const [solutions, setSolutions] = useState(formData.solutions || [""]);
  const [targetAudience, setTargetAudience] = useState(formData.targetAudience || "");
  const [website, setWebsite] = useState(formData.website || websiteFromUrl || "");

  useEffect(() => {
    updateFormData({
      company,
      industry,
      description,
      solutions: solutions.filter(s => s.trim() !== ""),
      targetAudience,
      website
    });
  }, [company, industry, description, solutions, targetAudience, website]);

  const handleAIFill = async () => {
    if (!website) {
      toast({
        title: "Ошибка",
        description: "Введите сайт для автозаполнения",
        variant: "destructive",
      });
      return;
    }

    setIsAIFilling(true);
    
    // Simulate AI filling with fake data
    setTimeout(() => {
      setCompany("Innovative Tech Solutions");
      setIndustry("Информационные технологии");
      setDescription("Мы создаем инновационные программные решения для автоматизации бизнес-процессов и повышения эффективности работы компаний.");
      setSolutions([
        "CRM-системы для управления клиентами",
        "ERP-решения для управления ресурсами",
        "Мобильные приложения для бизнеса"
      ]);
      setTargetAudience("Малый и средний бизнес, стартапы, IT-компании");
      
      setIsAIFilling(false);
      toast({
        title: "Готово!",
        description: "Информация автоматически заполнена с помощью ИИ",
      });
    }, 2000);
  };

  const addSolution = () => {
    if (solutions.length < 10) {
      setSolutions([...solutions, ""]);
    }
  };

  const removeSolution = (index: number) => {
    setSolutions(solutions.filter((_, i) => i !== index));
  };

  const updateSolution = (index: number, value: string) => {
    const updated = solutions.map((solution, i) => i === index ? value : solution);
    setSolutions(updated);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Расскажите о своей компании</h2>
        <p className="text-muted-foreground">Заполните информацию вручную или используйте автозаполнение с ИИ</p>
      </div>

      <Card className="p-6 border-dashed border-primary/20 bg-primary/5">
        <div className="flex items-center justify-between mb-4">
          <Label htmlFor="website" className="text-sm font-medium">Сайт компании</Label>
          <Button
            onClick={handleAIFill}
            disabled={isAIFilling || !website}
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Wand2 className={`w-4 h-4 ${isAIFilling ? 'animate-spin' : ''}`} />
            {isAIFilling ? 'Заполняем...' : 'Автозаполнение с ИИ'}
          </Button>
        </div>
        <Input
          id="website"
          type="url"
          placeholder="yoursite.com"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="mb-4"
        />
      </Card>

      <div className="grid gap-6">
        <div>
          <Label htmlFor="company" className="text-sm font-medium mb-2 block">Название компании *</Label>
          <Input
            id="company"
            placeholder="Введите название компании"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="industry" className="text-sm font-medium mb-2 block">Индустрия *</Label>
          <Input
            id="industry"
            placeholder="Например: IT, Маркетинг, E-commerce"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-sm font-medium mb-2 block">Описание компании *</Label>
          <Textarea
            id="description"
            placeholder="Расскажите о том, чем занимается ваша компания"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
          />
        </div>

        <div>
          <Label className="text-sm font-medium mb-2 block">Описание решений компании</Label>
          <div className="space-y-3">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  placeholder={`Решение ${index + 1}`}
                  value={solution}
                  onChange={(e) => updateSolution(index, e.target.value)}
                  className="flex-1"
                />
                {solutions.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSolution(index)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            ))}
            {solutions.length < 10 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSolution}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Добавить решение
              </Button>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="targetAudience" className="text-sm font-medium mb-2 block">Целевая аудитория *</Label>
          <Textarea
            id="targetAudience"
            placeholder="Опишите вашу целевую аудиторию"
            value={targetAudience}
            onChange={(e) => setTargetAudience(e.target.value)}
            rows={3}
            required
          />
        </div>
      </div>
    </div>
  );
}