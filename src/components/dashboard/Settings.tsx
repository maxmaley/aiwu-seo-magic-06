import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Настройки проекта</h1>
        <p className="text-muted-foreground">
          Управляйте параметрами проекта и интеграциями
        </p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="company">Компания</TabsTrigger>
          <TabsTrigger value="content">Контент</TabsTrigger>
          <TabsTrigger value="keywords">Ключевые слова</TabsTrigger>
          <TabsTrigger value="social">Соц. сети</TabsTrigger>
          <TabsTrigger value="integrations">Интеграции</TabsTrigger>
          <TabsTrigger value="automation">Автоматизация</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Информация о компании</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Название компании</Label>
                  <Input id="company-name" defaultValue="Интернет-магазин техники" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Отрасль</Label>
                  <Select defaultValue="electronics">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="electronics">Электроника</SelectItem>
                      <SelectItem value="fashion">Мода</SelectItem>
                      <SelectItem value="health">Здоровье</SelectItem>
                      <SelectItem value="education">Образование</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Описание деятельности</Label>
                <Textarea 
                  id="description" 
                  defaultValue="Продажа электроники, смартфонов, ноутбуков и компьютерной техники"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="target-audience">Целевая аудитория</Label>
                <Textarea 
                  id="target-audience" 
                  defaultValue="Молодые специалисты 25-40 лет, интересующиеся новыми технологиями"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Настройки контента</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tone">Тон и стиль</Label>
                <Select defaultValue="professional">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Профессиональный</SelectItem>
                    <SelectItem value="casual">Неформальный</SelectItem>
                    <SelectItem value="technical">Технический</SelectItem>
                    <SelectItem value="friendly">Дружелюбный</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="word-count">Средняя длина статьи</Label>
                  <Select defaultValue="1500">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="800">800-1000 слов</SelectItem>
                      <SelectItem value="1500">1500-2000 слов</SelectItem>
                      <SelectItem value="2500">2500-3000 слов</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Язык</Label>
                  <Select defaultValue="ru">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-publish" defaultChecked />
                <Label htmlFor="auto-publish">Автоматическая публикация</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Настройки ключевых слов</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="seed-keywords">Базовые ключевые слова</Label>
                <Textarea 
                  id="seed-keywords" 
                  placeholder="смартфоны, ноутбуки, компьютеры..."
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="min-volume">Минимальный объем трафика</Label>
                  <Input id="min-volume" type="number" defaultValue="1000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-difficulty">Максимальная сложность</Label>
                  <Input id="max-difficulty" type="number" defaultValue="70" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="auto-keywords" defaultChecked />
                <Label htmlFor="auto-keywords">Автоматическая генерация ключевых слов</Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Социальные сети</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-sm">VK</div>
                    <div>
                      <p className="font-medium">ВКонтакте</p>
                      <p className="text-sm text-muted-foreground">Не подключено</p>
                    </div>
                  </div>
                  <Button variant="outline">Подключить</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center text-white text-sm">TG</div>
                    <div>
                      <p className="font-medium">Telegram</p>
                      <p className="text-sm text-muted-foreground">Подключено: @tech_channel</p>
                    </div>
                  </div>
                  <Button variant="outline">Настроить</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-sm">YT</div>
                    <div>
                      <p className="font-medium">YouTube</p>
                      <p className="text-sm text-muted-foreground">Не подключено</p>
                    </div>
                  </div>
                  <Button variant="outline">Подключить</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API интеграции</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="perplexity-key">Perplexity API Key</Label>
                <Input id="perplexity-key" type="password" placeholder="pplx-..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ahrefs-key">Ahrefs API Key</Label>
                <Input id="ahrefs-key" type="password" placeholder="Введите API ключ" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="openai-key">OpenAI API Key</Label>
                <Input id="openai-key" type="password" placeholder="sk-..." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Автоматизация</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Автоматическое создание статей</p>
                    <p className="text-sm text-muted-foreground">Создавать статьи по расписанию</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Автоматическая публикация</p>
                    <p className="text-sm text-muted-foreground">Публиковать готовые статьи без подтверждения</p>
                  </div>
                  <Switch />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Генерация изображений</p>
                    <p className="text-sm text-muted-foreground">Автоматически создавать изображения для статей</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Публикация в соц. сетях</p>
                    <p className="text-sm text-muted-foreground">Автоматически делиться новыми статьями</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button>Сохранить изменения</Button>
      </div>
    </div>
  );
}