import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Globe, FileText } from "lucide-react";

interface KeywordsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export function KeywordsStep({ formData, updateFormData }: KeywordsStepProps) {
  const [targetCountry, setTargetCountry] = useState(formData.targetCountry || "RU");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  useEffect(() => {
    updateFormData({
      targetCountry,
      uploadedKeywords: uploadedFile?.name || null
    });
  }, [targetCountry, uploadedFile]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && (file.type === 'text/csv' || file.name.endsWith('.xlsx'))) {
      setUploadedFile(file);
    }
  };

  const countries = [
    { code: "RU", name: "Россия", flag: "🇷🇺" },
    { code: "US", name: "США", flag: "🇺🇸" },
    { code: "GB", name: "Великобритания", flag: "🇬🇧" },
    { code: "DE", name: "Германия", flag: "🇩🇪" },
    { code: "FR", name: "Франция", flag: "🇫🇷" },
    { code: "ES", name: "Испания", flag: "🇪🇸" },
    { code: "IT", name: "Италия", flag: "🇮🇹" },
    { code: "UA", name: "Украина", flag: "🇺🇦" },
    { code: "BY", name: "Беларусь", flag: "🇧🇾" },
    { code: "KZ", name: "Казахстан", flag: "🇰🇿" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Ключевые слова</h2>
        <p className="text-muted-foreground">Настройте целевую страну и загрузите свои ключевые слова</p>
      </div>

      <div className="space-y-6">
        {/* Target Country */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Целевая страна</h3>
          </div>
          
          <div className="space-y-3">
            <Label htmlFor="country" className="text-sm font-medium">Выберите основную страну для таргетинга</Label>
            <Select value={targetCountry} onValueChange={setTargetCountry}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {countries.map(country => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center gap-2">
                      <span>{country.flag}</span>
                      <span>{country.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>Авто-определение:</strong> Мы автоматически определили целевую страну на основе анализа вашего сайта.
              </p>
            </div>
          </div>
        </Card>

        {/* Upload Keywords */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Загрузка ключевых слов</h3>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Загрузите файл с вашими ключевыми словами (CSV или XLSX). Это поможет нам создать более точную контент-стратегию.
            </p>

            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                accept=".csv,.xlsx"
                onChange={handleFileUpload}
                className="hidden"
                id="keywords-upload"
              />
              <label
                htmlFor="keywords-upload"
                className="cursor-pointer flex flex-col items-center gap-4"
              >
                <Upload className="w-12 h-12 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium mb-1">
                    Нажмите для загрузки или перетащите файл
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Поддерживаются форматы: CSV, XLSX
                  </p>
                </div>
              </label>
            </div>

            {uploadedFile && (
              <Card className="p-4 bg-green-50 border-green-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Файл загружен: {uploadedFile.name}
                    </p>
                    <p className="text-xs text-green-600">
                      Размер: {(uploadedFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              </Card>
            )}

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium mb-2">Формат файла:</h4>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Первая колонка: ключевое слово</p>
                <p>• Вторая колонка: объем поисков (опционально)</p>
                <p>• Третья колонка: сложность (опционально)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Не беспокойтесь:</strong> Если вы не загрузите свои ключевые слова, мы автоматически сгенерируем их на основе анализа вашего сайта и конкурентов.
          </p>
        </Card>
      </div>
    </div>
  );
}