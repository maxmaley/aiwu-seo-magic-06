import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Edit, Eye, Trash2, Download, Search, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockArticles = [
  {
    id: 1,
    title: "Лучшие смартфоны 2025: полный обзор",
    keyword: "лучшие смартфоны 2025",
    createdDate: "2025-07-21",
    thumbnail: "/placeholder.svg",
    status: "published",
    difficulty: 65,
    publishUrl: "https://example.com/best-smartphones-2025"
  },
  {
    id: 2,
    title: "Как выбрать ноутбук для работы и учебы",
    keyword: "как выбрать ноутбук",
    createdDate: "2025-07-20",
    thumbnail: "/placeholder.svg",
    status: "ready",
    difficulty: 45,
    publishUrl: null
  },
  {
    id: 3,
    title: "Беспроводные наушники: топ-10 моделей",
    keyword: "беспроводные наушники 2025",
    createdDate: "2025-07-19",
    thumbnail: "/placeholder.svg",
    status: "published",
    difficulty: 35,
    publishUrl: "https://example.com/wireless-headphones"
  },
  {
    id: 4,
    title: "Игровые клавиатуры: обзор лучших решений",
    keyword: "игровые клавиатуры",
    createdDate: "2025-07-18",
    thumbnail: "/placeholder.svg",
    status: "ready",
    difficulty: 28,
    publishUrl: null
  }
];

export function ContentHistory() {
  const [selectedArticles, setSelectedArticles] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectArticle = (articleId: number) => {
    setSelectedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedArticles(mockArticles.map(a => a.id));
    } else {
      setSelectedArticles([]);
    }
  };

  const filteredArticles = mockArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge variant="outline">Опубликовано</Badge>;
      case "ready":
        return <Badge variant="default">Готова к публикации</Badge>;
      default:
        return null;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">История контента</h1>
          <p className="text-muted-foreground">
            Управляйте созданными статьями и отслеживайте публикации
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Всего статей</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockArticles.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Опубликовано</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockArticles.filter(a => a.status === "published").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Готовы к публикации</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockArticles.filter(a => a.status === "ready").length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Общий трафик</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28K</div>
            <p className="text-xs text-muted-foreground">От опубликованных</p>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Список статей</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search and Filters */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Поиск по заголовку или ключевому слову..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
            </div>

            {/* Bulk Actions */}
            {selectedArticles.length > 0 && (
              <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                <span className="text-sm">Выбрано: {selectedArticles.length}</span>
                <Button variant="outline" size="sm">
                  Опубликовать
                </Button>
                <Button variant="outline" size="sm">
                  Снять с публикации
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Экспорт
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Удалить
                </Button>
              </div>
            )}

            {/* Articles Table */}
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedArticles.length === mockArticles.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Превью</TableHead>
                  <TableHead>Заголовок</TableHead>
                  <TableHead>Ключевое слово</TableHead>
                  <TableHead>Дата создания</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredArticles.map((article) => (
                  <TableRow key={article.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedArticles.includes(article.id)}
                        onCheckedChange={() => handleSelectArticle(article.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Avatar className="h-12 w-12 rounded-md">
                        <AvatarImage src={article.thumbnail} alt="Превью" />
                        <AvatarFallback>IMG</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{article.title}</div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-muted-foreground">
                        {article.keyword}
                      </span>
                    </TableCell>
                    <TableCell>{formatDate(article.createdDate)}</TableCell>
                    <TableCell>{getStatusBadge(article.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {article.status === "published" ? (
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button size="sm">
                            Approve
                          </Button>
                        )}
                      </div>
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