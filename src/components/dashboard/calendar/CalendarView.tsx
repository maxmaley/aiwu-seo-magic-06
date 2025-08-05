import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Calendar, TrendingUp, Target } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CalendarViewProps {
  currentDate: Date;
}

const mockCalendarData = {
  "2025-07-21": {
    keyword: "лучшие смартфоны 2025",
    volume: "12K",
    difficulty: "65",
    status: "published",
    articleUrl: "/articles/best-smartphones-2025",
    socialPosts: 3
  },
  "2025-07-22": {
    keyword: "как выбрать ноутбук",
    volume: "8.5K",
    difficulty: "45",
    status: "created",
    articleUrl: null,
    socialPosts: 0
  },
  "2025-07-23": {
    keyword: "обзор iPhone 15",
    volume: "25K",
    difficulty: "80",
    status: "planned",
    articleUrl: null,
    socialPosts: 0
  },
  "2025-07-24": {
    keyword: "беспроводные наушники 2025",
    volume: "5.2K",
    difficulty: "35",
    status: "created",
    articleUrl: null,
    socialPosts: 0
  }
};

export function CalendarView({ currentDate }: CalendarViewProps) {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

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

  const formatDateKey = (day: number) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid grid-cols-7 gap-2">
          {/* Week day headers */}
          {weekDays.map((day) => (
            <div key={day} className="p-2 text-center font-medium text-muted-foreground">
              {day}
            </div>
          ))}
          
          {/* Calendar days */}
          {days.map((day, index) => {
            if (!day) {
              return <div key={index} className="h-32" />;
            }
            
            const dateKey = formatDateKey(day);
            const dayData = mockCalendarData[dateKey as keyof typeof mockCalendarData];
            
            return (
              <Card key={day} className="h-32 hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-2 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{day}</span>
                    {dayData && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <MoreHorizontal className="h-3 w-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>Редактировать</DropdownMenuItem>
                          <DropdownMenuItem>Перенести</DropdownMenuItem>
                          <DropdownMenuItem>Удалить</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                  
                  {dayData ? (
                    <div className="flex-1 space-y-1">
                      {getStatusBadge(dayData.status)}
                      <div className="text-xs font-medium truncate">
                        {dayData.keyword}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <TrendingUp className="h-3 w-3" />
                        {dayData.volume}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Target className="h-3 w-3" />
                        KD: {dayData.difficulty}
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex items-center justify-center">
                      <Button variant="ghost" size="sm" className="text-xs">
                        + Добавить
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}