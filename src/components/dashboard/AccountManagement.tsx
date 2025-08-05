import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Copy, CreditCard, Shield, Trash2, Gift } from "lucide-react";

export function AccountManagement() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Управление аккаунтом</h1>
        <p className="text-muted-foreground">
          Управляйте подпиской, настройками безопасности и данными аккаунта
        </p>
      </div>

      {/* Subscription Info */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Текущая подписка
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="default">Pro Plan</Badge>
                <span className="text-sm text-muted-foreground">до 15 августа 2025</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Безлимитные статьи, все интеграции, приоритетная поддержка
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">$29/мес</p>
              <p className="text-sm text-muted-foreground">Следующее списание: 15 авг</p>
            </div>
          </div>
          
          <Separator />
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">∞</p>
              <p className="text-sm text-muted-foreground">Статей в месяц</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Проектов</p>
            </div>
            <div>
              <p className="text-2xl font-bold">125</p>
              <p className="text-sm text-muted-foreground">Статей создано</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline">Изменить план</Button>
            <Button variant="outline">Обновить способ оплаты</Button>
            <Button variant="destructive">Отменить подписку</Button>
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Настройки аккаунта
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="max@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" defaultValue="Макс Олейник" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="current-password">Текущий пароль</Label>
            <Input id="current-password" type="password" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="new-password">Новый пароль</Label>
              <Input id="new-password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Подтвердите пароль</Label>
              <Input id="confirm-password" type="password" />
            </div>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Двухфакторная аутентификация</p>
              <p className="text-sm text-muted-foreground">
                Дополнительная защита вашего аккаунта
              </p>
            </div>
            <Switch />
          </div>
          
          <div className="flex gap-2">
            <Button>Сохранить изменения</Button>
            <Button variant="outline">Отменить</Button>
          </div>
        </CardContent>
      </Card>

      {/* Referral Program */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5" />
            Пригласить друга
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            За каждого приглашенного друга вы получаете +3 дня к подписке бесплатно!
          </p>
          
          <div className="flex gap-2">
            <Input 
              readOnly 
              value="https://contenthub.app/ref/max-oleynik" 
              className="font-mono text-sm"
            />
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-center p-4 bg-muted rounded-lg">
            <div>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Приглашено друзей</p>
            </div>
            <div>
              <p className="text-2xl font-bold">9</p>
              <p className="text-sm text-muted-foreground">Дней получено</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-destructive">
            <Trash2 className="h-5 w-5" />
            Опасная зона
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Удалить аккаунт</p>
            <p className="text-sm text-muted-foreground">
              Это действие нельзя отменить. Все ваши данные будут удалены навсегда.
            </p>
          </div>
          <Button variant="destructive">
            Удалить аккаунт
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}