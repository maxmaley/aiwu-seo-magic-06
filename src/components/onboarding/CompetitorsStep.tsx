import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Plus, X, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CompetitorsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export function CompetitorsStep({ formData, updateFormData }: CompetitorsStepProps) {
  const { toast } = useToast();
  const [competitors, setCompetitors] = useState(formData.competitors || [
    "competitor1.com",
    "competitor2.com",
    "competitor3.com",
    "competitor4.com",
    "competitor5.com"
  ]);

  useEffect(() => {
    updateFormData({
      competitors: competitors.filter(c => c.trim() !== "")
    });
  }, [competitors]);

  const addCompetitor = () => {
    if (competitors.length < 10) {
      setCompetitors([...competitors, ""]);
    }
  };

  const removeCompetitor = (index: number) => {
    if (competitors.length > 2) {
      setCompetitors(competitors.filter((_, i) => i !== index));
    } else {
      toast({
        title: "Минимум 2 конкурента",
        description: "Необходимо указать минимум 2 конкурентов",
        variant: "destructive",
      });
    }
  };

  const updateCompetitor = (index: number, value: string) => {
    const updated = competitors.map((competitor, i) => i === index ? value : competitor);
    setCompetitors(updated);
  };

  const validateUrl = (url: string) => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Ваши конкуренты</h2>
        <p className="text-muted-foreground">Мы предварительно подобрали потенциальных конкурентов. Вы можете изменить список (минимум 2, максимум 10)</p>
      </div>

      <Card className="p-6 bg-muted/30">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <p className="text-sm text-muted-foreground">
            Мы автоматически определили ваших конкурентов на основе анализа индустрии
          </p>
        </div>
      </Card>

      <div className="space-y-4">
        <Label className="text-sm font-medium">Сайты конкурентов *</Label>
        
        <div className="grid gap-3">
          {competitors.map((competitor, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Input
                  placeholder="competitor.com"
                  value={competitor}
                  onChange={(e) => updateCompetitor(index, e.target.value)}
                  className={`pr-10 ${
                    competitor && !validateUrl(competitor) 
                      ? 'border-destructive focus-visible:ring-destructive' 
                      : ''
                  }`}
                />
                {competitor && validateUrl(competitor) && (
                  <a
                    href={competitor.startsWith('http') ? competitor : `https://${competitor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              
              <div className="flex items-center gap-1">
                <span className="text-xs text-muted-foreground w-8">
                  {index + 1}
                </span>
                {competitors.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCompetitor(index)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {competitors.length < 10 && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={addCompetitor}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Добавить конкурента
          </Button>
        )}

        <div className="text-xs text-muted-foreground">
          Минимум: 2 конкурента | Максимум: 10 конкурентов
        </div>
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Совет:</strong> Включите как прямых, так и косвенных конкурентов для более полного анализа рынка. 
          Мы будем анализировать их контент-стратегию и ключевые слова.
        </p>
      </Card>
    </div>
  );
}