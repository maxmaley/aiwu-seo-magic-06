import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Target, ExternalLink, Share2 } from "lucide-react";

interface ListViewProps {
  currentDate: Date;
}

const mockListData = [
  {
    date: "2025-07-21",
    keyword: "лучшие смартфоны 2025",
    volume: "12K",
    difficulty: "65",
    status: "published",
    articleUrl: "/articles/best-smartphones-2025",
    socialPosts: 3
  },
  {
    date: "2025-07-22",
    keyword: "как выбрать ноутбук",
    volume: "8.5K",
    difficulty: "45",
    status: "created",
    articleUrl: null,
    socialPosts: 0
  },
  {
    date: "2025-07-23",
    keyword: "обзор iPhone 15",
    volume: "25K",
    difficulty: "80",
    status: "planned",
    articleUrl: null,
    socialPosts: 0
  },
  {
    date: "2025-07-24",
    keyword: "беспроводные наушники 2025",
    volume: "5.2K",
    difficulty: "35",
    status: "created",
    articleUrl: null,
    socialPosts: 0
  },
  {
    date: "2025-07-25",
    keyword: "игровые клавиатуры",
    volume: "3.8K",
    difficulty: "28",
    status: "planned",
    articleUrl: null,
    socialPosts: 0
  }
];

export function ListView({ currentDate }: ListViewProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge variant="outline">Опубликовано</Badge>;
      case "created":
        return <Badge variant="default">Создано</Badge>;
      case "planned":
        return <Badge variant="secondary">Запланировано</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getActionButton = (item: any) => {
    if (item.status === 'published' && item.articleUrl) {
      return (
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          Посмотреть
        </Button>
      );
    } else if (item.status === 'created') {
      return (
        <Button variant="default" size="sm">
          Редактировать
        </Button>
      );
    } else {
      return (
        <Button variant="outline" size="sm">
          Создать статью
        </Button>
      );
    }
  };

  return (
    <div className="space-y-4">
      {mockListData.map((item, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  {getStatusBadge(item.status)}
                </div>
                
                <h3 className="text-lg font-semibold">{item.keyword}</h3>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Трафик: {item.volume}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Сложность: {item.difficulty}</span>
                  </div>
                  {item.socialPosts > 0 && (
                    <div className="flex items-center gap-2">
                      <Share2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Посты: {item.socialPosts}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {getActionButton(item)}
                <Button variant="ghost" size="sm">
                  Настроить
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}