import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Clock, Globe, Palette, Image, Megaphone } from "lucide-react";

interface ArticleSettingsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const daysOfWeek = [
  { id: 'monday', label: 'Пн' },
  { id: 'tuesday', label: 'Вт' },
  { id: 'wednesday', label: 'Ср' },
  { id: 'thursday', label: 'Чт' },
  { id: 'friday', label: 'Пт' },
  { id: 'saturday', label: 'Сб' },
  { id: 'sunday', label: 'Вс' },
];

export function ArticleSettingsStep({ formData, updateFormData }: ArticleSettingsStepProps) {
  const [autoPublish, setAutoPublish] = useState(formData.autoPublish ?? true);
  const [publishDays, setPublishDays] = useState(formData.publishDays || daysOfWeek.map(d => d.id));
  const [publishTime, setPublishTime] = useState(formData.publishTime || "10:00");
  const [language, setLanguage] = useState(formData.language || "Русский");
  const [tone, setTone] = useState(formData.tone || "Профессиональный");
  const [globalInstruction, setGlobalInstruction] = useState(formData.globalInstruction || "Пишите статьи в экспертном тоне, используя практические примеры и действенные советы.");
  const [imageOrientation, setImageOrientation] = useState(formData.imageOrientation || "horizontal");
  const [imageStyle, setImageStyle] = useState(formData.imageStyle || "illustration");
  const [addLogo, setAddLogo] = useState(formData.addLogo ?? true);
  const [addTextOnImage, setAddTextOnImage] = useState(formData.addTextOnImage ?? true);
  const [addYoutubeVideo, setAddYoutubeVideo] = useState(formData.addYoutubeVideo ?? false);
  const [addCTA, setAddCTA] = useState(formData.addCTA ?? true);
  const [includeInfographics, setIncludeInfographics] = useState(formData.includeInfographics ?? false);
  const [useEmojis, setUseEmojis] = useState(formData.useEmojis ?? true);

  useEffect(() => {
    updateFormData({
      autoPublish,
      publishDays,
      publishTime,
      language,
      tone,
      globalInstruction,
      imageOrientation,
      imageStyle,
      addLogo,
      addTextOnImage,
      addYoutubeVideo,
      addCTA,
      includeInfographics,
      useEmojis
    });
  }, [autoPublish, publishDays, publishTime, language, tone, globalInstruction, imageOrientation, imageStyle, addLogo, addTextOnImage, addYoutubeVideo, addCTA, includeInfographics, useEmojis]);

  const toggleDay = (dayId: string) => {
    setPublishDays(prev => 
      prev.includes(dayId) 
        ? prev.filter(d => d !== dayId)
        : [...prev, dayId]
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Настройка будущих статей</h2>
        <p className="text-muted-foreground">Настройте параметры генерации и публикации контента</p>
      </div>

      <div className="space-y-6">
        {/* Scheduling Settings */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Настройка расписания</h3>
          </div>

          <div className="space-y-6">
            {/* Auto-publish */}
            <div className="flex items-start justify-between">
              <div>
                <Label className="text-base font-medium">Автопубликация</Label>
                <p className="text-sm text-muted-foreground">
                  {autoPublish 
                    ? "Статьи будут публиковаться автоматически" 
                    : "Вы будете получать уведомления для ручного одобрения"
                  }
                </p>
              </div>
              <Switch
                checked={autoPublish}
                onCheckedChange={setAutoPublish}
              />
            </div>

            {/* Days of week */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Дни недели для публикации</Label>
              <div className="flex gap-2 flex-wrap">
                {daysOfWeek.map(day => (
                  <Badge
                    key={day.id}
                    variant={publishDays.includes(day.id) ? "default" : "outline"}
                    className="cursor-pointer select-none"
                    onClick={() => toggleDay(day.id)}
                  >
                    {day.label}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Publish time */}
            <div>
              <Label htmlFor="publishTime" className="text-sm font-medium mb-2 block">Время публикации</Label>
              <Input
                id="publishTime"
                type="time"
                value={publishTime}
                onChange={(e) => setPublishTime(e.target.value)}
                className="w-32"
              />
              <p className="text-xs text-muted-foreground mt-1">По времени вашего сайта (UTC+3)</p>
            </div>
          </div>
        </Card>

        {/* AI Instructions */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Инструкции для ИИ</h3>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="language" className="text-sm font-medium mb-2 block">Язык</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Русский">Русский</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Español">Español</SelectItem>
                  <SelectItem value="Français">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="tone" className="text-sm font-medium mb-2 block">Тон</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Профессиональный">Профессиональный</SelectItem>
                  <SelectItem value="Дружелюбный">Дружелюбный</SelectItem>
                  <SelectItem value="Экспертный">Экспертный</SelectItem>
                  <SelectItem value="Вдохновляющий">Вдохновляющий</SelectItem>
                  <SelectItem value="Неформальный">Неформальный</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="globalInstruction" className="text-sm font-medium mb-2 block">Глобальная инструкция для ИИ</Label>
              <Textarea
                id="globalInstruction"
                placeholder="Опишите, как должен писать ИИ..."
                value={globalInstruction}
                onChange={(e) => setGlobalInstruction(e.target.value)}
                rows={3}
              />
            </div>
          </div>
        </Card>

        {/* Image Style */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Image className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Стиль изображений</h3>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium mb-3 block">Ориентация</Label>
              <div className="flex gap-3">
                {[
                  { id: 'horizontal', label: 'Горизонтальная' },
                  { id: 'vertical', label: 'Вертикальная' },
                  { id: 'square', label: 'Квадрат' }
                ].map(option => (
                  <Badge
                    key={option.id}
                    variant={imageOrientation === option.id ? "default" : "outline"}
                    className="cursor-pointer select-none"
                    onClick={() => setImageOrientation(option.id)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-sm font-medium mb-3 block">Стиль</Label>
              <div className="flex gap-3">
                {[
                  { id: 'illustration', label: 'Иллюстрация' },
                  { id: 'realistic', label: 'Реализм' }
                ].map(option => (
                  <Badge
                    key={option.id}
                    variant={imageStyle === option.id ? "default" : "outline"}
                    className="cursor-pointer select-none"
                    onClick={() => setImageStyle(option.id)}
                  >
                    {option.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Branding */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Брендинг</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Добавить логотип</Label>
              <Switch checked={addLogo} onCheckedChange={setAddLogo} />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Добавить текст на изображение</Label>
              <Switch checked={addTextOnImage} onCheckedChange={setAddTextOnImage} />
            </div>
          </div>
        </Card>

        {/* Additional Content */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <Megaphone className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Дополнительный контент в статьях</h3>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Добавить YouTube видео</Label>
              <Switch checked={addYoutubeVideo} onCheckedChange={setAddYoutubeVideo} />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Добавить CTA</Label>
              <Switch checked={addCTA} onCheckedChange={setAddCTA} />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Включить инфографику</Label>
              <Switch checked={includeInfographics} onCheckedChange={setIncludeInfographics} />
            </div>

            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium">Использовать эмодзи</Label>
              <Switch checked={useEmojis} onCheckedChange={setUseEmojis} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}