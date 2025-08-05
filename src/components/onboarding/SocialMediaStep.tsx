import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Share2, Linkedin, MessageCircle, Twitter, Facebook, Instagram, ExternalLink } from "lucide-react";

interface SocialMediaStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const socialPlatforms = [
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-600', connected: true },
  { id: 'telegram', name: 'Telegram', icon: MessageCircle, color: 'bg-blue-500', connected: false },
  { id: 'twitter', name: 'X (Twitter)', icon: Twitter, color: 'bg-black', connected: false },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-700', connected: true },
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-r from-purple-500 to-pink-500', connected: false },
];

export function SocialMediaStep({ formData, updateFormData }: SocialMediaStepProps) {
  const [enableSocialSharing, setEnableSocialSharing] = useState(formData.enableSocialSharing ?? false);
  const [postLength, setPostLength] = useState(formData.postLength || "medium");
  const [includeImages, setIncludeImages] = useState(formData.includeImages ?? true);
  const [selectedPlatforms, setSelectedPlatforms] = useState(formData.selectedPlatforms || ['linkedin', 'facebook']);

  useEffect(() => {
    updateFormData({
      enableSocialSharing,
      postLength,
      includeImages,
      selectedPlatforms
    });
  }, [enableSocialSharing, postLength, includeImages, selectedPlatforms]);

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(p => p !== platformId)
        : [...prev, platformId]
    );
  };

  const connectPlatform = (platformId: string) => {
    // Simulate connection
    console.log(`Connecting to ${platformId}`);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Социальные сети</h2>
        <p className="text-muted-foreground">Настройте автоматическую публикацию в социальных сетях</p>
      </div>

      <div className="space-y-6">
        {/* Enable Social Sharing */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Share2 className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Делиться в социальных сетях?</h3>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <Label className="text-base font-medium">Автоматическая публикация</Label>
              <p className="text-sm text-muted-foreground">
                Автоматически публиковать сокращенные версии статей в соцсетях
              </p>
            </div>
            <Switch
              checked={enableSocialSharing}
              onCheckedChange={setEnableSocialSharing}
            />
          </div>
        </Card>

        {enableSocialSharing && (
          <>
            {/* Post Settings */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Настройки публикации</h3>
              
              <div className="space-y-6">
                {/* Post Length */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Размер текста поста</Label>
                  <div className="flex gap-3">
                    {[
                      { id: 'short', label: 'Короткий', desc: '50-100 символов' },
                      { id: 'medium', label: 'Средний', desc: '100-200 символов' },
                      { id: 'long', label: 'Длинный', desc: '200-300 символов' }
                    ].map(option => (
                      <Card
                        key={option.id}
                        className={`p-4 cursor-pointer transition-all border-2 ${
                          postLength === option.id 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'
                        }`}
                        onClick={() => setPostLength(option.id)}
                      >
                        <div className="text-center">
                          <p className="font-medium text-sm">{option.label}</p>
                          <p className="text-xs text-muted-foreground mt-1">{option.desc}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Include Images */}
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-sm font-medium">Изображения</Label>
                    <p className="text-xs text-muted-foreground">Включать изображения в посты</p>
                  </div>
                  <Switch
                    checked={includeImages}
                    onCheckedChange={setIncludeImages}
                  />
                </div>
              </div>
            </Card>

            {/* Platform Selection */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Выбор социальных сетей</h3>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Выберите платформы для автоматической публикации
                </p>

                <div className="grid gap-4">
                  {socialPlatforms.map(platform => {
                    const Icon = platform.icon;
                    const isSelected = selectedPlatforms.includes(platform.id);
                    const isConnected = platform.connected;

                    return (
                      <div
                        key={platform.id}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                          isSelected 
                            ? 'border-primary bg-primary/5' 
                            : 'border-muted hover:border-primary/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${platform.color} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{platform.name}</span>
                              {platform.id === 'instagram' && (
                                <Badge variant="secondary" className="text-xs">
                                  Без ссылки
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className={`w-2 h-2 rounded-full ${
                                isConnected ? 'bg-green-500' : 'bg-gray-400'
                              }`}></div>
                              <span className="text-xs text-muted-foreground">
                                {isConnected ? 'Подключено' : 'Не подключено'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {!isConnected && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => connectPlatform(platform.id)}
                              className="flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Подключить
                            </Button>
                          )}
                          <Switch
                            checked={isSelected}
                            onCheckedChange={() => togglePlatform(platform.id)}
                            disabled={!isConnected}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  <p className="text-sm text-yellow-800">
                    <strong>Примечание:</strong> Instagram не поддерживает автоматическое добавление ссылок в посты. 
                    Ссылка будет добавлена в комментарий.
                  </p>
                </div>
              </div>
            </Card>
          </>
        )}

        {!enableSocialSharing && (
          <Card className="p-6 bg-muted/30">
            <p className="text-center text-muted-foreground">
              Вы можете настроить публикацию в соцсетях позже в настройках проекта
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}