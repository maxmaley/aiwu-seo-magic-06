import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plug, 
  Globe, 
  ShoppingBag, 
  FileText, 
  Webhook, 
  Zap,
  ExternalLink,
  Settings,
  CheckCircle
} from "lucide-react";

interface IntegrationsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const integrations = [
  {
    id: 'wordpress-org',
    name: 'WordPress.org',
    description: 'Через плагин AIWU',
    icon: Globe,
    category: 'CMS',
    popular: true,
    connected: false,
    requiresSetup: true
  },
  {
    id: 'wordpress-com',
    name: 'WordPress.com',
    description: 'Прямая интеграция',
    icon: Globe,
    category: 'CMS',
    popular: true,
    connected: false,
    requiresSetup: false
  },
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'Публикация в блог магазина',
    icon: ShoppingBag,
    category: 'E-commerce',
    popular: true,
    connected: false,
    requiresSetup: false
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'Сохранение в базу данных',
    icon: FileText,
    category: 'Productivity',
    popular: false,
    connected: false,
    requiresSetup: false
  },
  {
    id: 'webhook',
    name: 'API Webhook',
    description: 'Настраиваемая интеграция',
    icon: Webhook,
    category: 'Custom',
    popular: false,
    connected: false,
    requiresSetup: true
  },
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Автоматизация workflow',
    icon: Zap,
    category: 'Automation',
    popular: false,
    connected: false,
    requiresSetup: true
  },
  {
    id: 'make',
    name: 'Make (Integromat)',
    description: 'Сценарии автоматизации',
    icon: Settings,
    category: 'Automation',
    popular: false,
    connected: false,
    requiresSetup: true
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Подключение к 5000+ приложений',
    icon: Zap,
    category: 'Automation',
    popular: true,
    connected: false,
    requiresSetup: true
  }
];

export function IntegrationsStep({ formData, updateFormData }: IntegrationsStepProps) {
  const [selectedIntegrations, setSelectedIntegrations] = useState(formData.selectedIntegrations || []);

  useEffect(() => {
    updateFormData({
      selectedIntegrations
    });
  }, [selectedIntegrations]);

  const toggleIntegration = (integrationId: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(integrationId) 
        ? prev.filter(id => id !== integrationId)
        : [...prev, integrationId]
    );
  };

  const connectIntegration = (integrationId: string) => {
    // Simulate connection process
    console.log(`Connecting to ${integrationId}`);
  };

  const categories = [...new Set(integrations.map(i => i.category))];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Интеграции</h2>
        <p className="text-muted-foreground">
          Выберите, как вы хотите получать готовые статьи. Этот раздел можно настроить позже.
        </p>
      </div>

      <div className="space-y-6">
        {/* Skip notice */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <p className="text-sm text-blue-800 text-center">
            <strong>Не обязательно:</strong> Вы можете пропустить этот шаг и настроить интеграции позже в личном кабинете
          </p>
        </Card>

        {/* Integration categories */}
        {categories.map(category => {
          const categoryIntegrations = integrations.filter(i => i.category === category);
          
          return (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Plug className="w-5 h-5 text-primary" />
                {category === 'CMS' && 'Системы управления контентом'}
                {category === 'E-commerce' && 'Электронная коммерция'}
                {category === 'Productivity' && 'Продуктивность'}
                {category === 'Custom' && 'Настраиваемые'}
                {category === 'Automation' && 'Автоматизация'}
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {categoryIntegrations.map(integration => {
                  const Icon = integration.icon;
                  const isSelected = selectedIntegrations.includes(integration.id);

                  return (
                    <Card
                      key={integration.id}
                      className={`p-4 cursor-pointer transition-all border-2 hover:shadow-md ${
                        isSelected 
                          ? 'border-primary bg-primary/5' 
                          : 'border-muted hover:border-primary/50'
                      }`}
                      onClick={() => toggleIntegration(integration.id)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{integration.name}</span>
                              {integration.popular && (
                                <Badge variant="secondary" className="text-xs">
                                  Популярно
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {integration.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          {isSelected && (
                            <CheckCircle className="w-5 h-5 text-primary" />
                          )}
                        </div>
                      </div>

                      {isSelected && (
                        <div className="border-t pt-3 mt-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              <span className="text-xs text-muted-foreground">
                                Требуется настройка
                              </span>
                            </div>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                connectIntegration(integration.id);
                              }}
                              className="flex items-center gap-1"
                            >
                              <ExternalLink className="w-3 h-3" />
                              Настроить
                            </Button>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* Selected integrations summary */}
        {selectedIntegrations.length > 0 && (
          <Card className="p-4 bg-green-50 border-green-200">
            <h4 className="font-medium text-green-800 mb-2">Выбранные интеграции:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedIntegrations.map(id => {
                const integration = integrations.find(i => i.id === id);
                return (
                  <Badge key={id} variant="outline" className="text-green-700 border-green-300">
                    {integration?.name}
                  </Badge>
                );
              })}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}