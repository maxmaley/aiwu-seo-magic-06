import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Plus, Upload, Search, Calendar, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockKeywords = [
  {
    id: 1,
    keyword: "лучшие смартфоны 2025",
    volume: "12K",
    difficulty: 65,
    status: "in_calendar",
    scheduledDate: "2025-07-21"
  },
  {
    id: 2,
    keyword: "как выбрать ноутбук",
    volume: "8.5K",
    difficulty: 45,
    status: "in_calendar",
    scheduledDate: "2025-07-22"
  },
  {
    id: 3,
    keyword: "игровые мониторы 4K",
    volume: "6.2K",
    difficulty: 72,
    status: "free",
    scheduledDate: null
  },
  {
    id: 4,
    keyword: "беспроводные мыши для игр",
    volume: "4.8K",
    difficulty: 38,
    status: "free",
    scheduledDate: null
  },
  {
    id: 5,
    keyword: "обзор MacBook Air M3",
    volume: "15K",
    difficulty: 85,
    status: "free",
    scheduledDate: null
  },
  {
    id: 6,
    keyword: "лучшие процессоры Intel",
    volume: "9.3K",
    difficulty: 68,
    status: "free",
    scheduledDate: null
  }
];

export function Keywords() {
  const [selectedKeywords, setSelectedKeywords] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectKeyword = (keywordId: number) => {
    setSelectedKeywords(prev => 
      prev.includes(keywordId) 
        ? prev.filter(id => id !== keywordId)
        : [...prev, keywordId]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedKeywords(mockKeywords.map(k => k.id));
    } else {
      setSelectedKeywords([]);
    }
  };

  const filteredKeywords = mockKeywords.filter(keyword =>
    keyword.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in_calendar":
        return <Badge variant="default">В календаре</Badge>;
      case "free":
        return <Badge variant="secondary">Свободно</Badge>;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty < 40) return "text-green-600";
    if (difficulty < 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Ключевые слова</h1>
          <p className="text-muted-foreground">
            Управляйте ключевыми словами проекта и добавляйте их в календарь
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Всего ключевых слов</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockKeywords.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">В календаре</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockKeywords.filter(k => k.status === "in_calendar").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Свободных</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockKeywords.filter(k => k.status === "free").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Общий трафик</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56K</div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Управление ключевыми словами</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Загрузить CSV
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Сгенерировать новые
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Добавить вручную
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Поиск ключевых слов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {/* Bulk Actions */}
            {selectedKeywords.length > 0 && (
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <span className="text-sm">Выбрано: {selectedKeywords.length}</span>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Добавить в календарь
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Удалить
                </Button>
              </div>
            )}

            {/* Keywords Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedKeywords.length === mockKeywords.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Ключевое слово</TableHead>
                  <TableHead>Трафик</TableHead>
                  <TableHead>Сложность</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredKeywords.map((keyword) => (
                  <TableRow key={keyword.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedKeywords.includes(keyword.id)}
                        onCheckedChange={() => handleSelectKeyword(keyword.id)}
                      />
                    </TableCell>
                    <TableCell className="font-medium">{keyword.keyword}</TableCell>
                    <TableCell>{keyword.volume}</TableCell>
                    <TableCell>
                      <span className={getDifficultyColor(keyword.difficulty)}>
                        {keyword.difficulty}
                      </span>
                    </TableCell>
                    <TableCell>{getStatusBadge(keyword.status)}</TableCell>
                    <TableCell>
                      {keyword.status === "free" ? (
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          В календарь
                        </Button>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {keyword.scheduledDate}
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}