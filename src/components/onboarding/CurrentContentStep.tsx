import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ExternalLink, Search, Globe, FileText } from "lucide-react";

interface CurrentContentStepProps {
  formData: any;
  updateFormData: (data: any) => void;
}

export function CurrentContentStep({ formData, updateFormData }: CurrentContentStepProps) {
  const [googleSearchConsole, setGoogleSearchConsole] = useState(formData.googleSearchConsole || false);
  const [sitemapUrl, setSitemapUrl] = useState(formData.sitemapUrl || "yoursite.com/sitemap.xml");
  const [blogRootUrl, setBlogRootUrl] = useState(formData.blogRootUrl || "yoursite.com/blog");
  const [bestArticles, setBestArticles] = useState(formData.bestArticles || [
    "yoursite.com/blog/best-article-1",
    "yoursite.com/blog/best-article-2", 
    "yoursite.com/blog/best-article-3"
  ]);

  useEffect(() => {
    updateFormData({
      googleSearchConsole,
      sitemapUrl,
      blogRootUrl,
      bestArticles
    });
  }, [googleSearchConsole, sitemapUrl, blogRootUrl, bestArticles]);

  const updateBestArticle = (index: number, value: string) => {
    const updated = bestArticles.map((article, i) => i === index ? value : article);
    setBestArticles(updated);
  };

  const validateUrl = (url: string) => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const connectGoogleSearchConsole = () => {
    // Simulate connection
    setGoogleSearchConsole(true);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Текущий контент</h2>
        <p className="text-muted-foreground">Настройте доступ к вашему существующему контенту для лучшего анализа</p>
      </div>

      <div className="space-y-6">
        {/* Google Search Console */}
        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-primary" />
              <div>
                <Label className="text-base font-medium">Google Search Console</Label>
                <p className="text-sm text-muted-foreground">Подключите для анализа поисковой производительности</p>
              </div>
            </div>
            <Switch
              checked={googleSearchConsole}
              onCheckedChange={setGoogleSearchConsole}
            />
          </div>
          
          {!googleSearchConsole && (
            <Button
              onClick={connectGoogleSearchConsole}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Настроить интеграцию
            </Button>
          )}
          
          {googleSearchConsole && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm text-green-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Подключено успешно
              </p>
            </div>
          )}
        </Card>

        {/* Sitemap URL */}
        <div>
          <Label htmlFor="sitemap" className="text-sm font-medium mb-2 block flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Sitemap URL *
          </Label>
          <div className="relative">
            <Input
              id="sitemap"
              placeholder="yoursite.com/sitemap.xml"
              value={sitemapUrl}
              onChange={(e) => setSitemapUrl(e.target.value)}
              className={`pr-10 ${
                sitemapUrl && !validateUrl(sitemapUrl) 
                  ? 'border-destructive focus-visible:ring-destructive' 
                  : ''
              }`}
              required
            />
            {sitemapUrl && validateUrl(sitemapUrl) && (
              <a
                href={sitemapUrl.startsWith('http') ? sitemapUrl : `https://${sitemapUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Blog Root URL */}
        <div>
          <Label htmlFor="blog" className="text-sm font-medium mb-2 block flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Blog Root URL *
          </Label>
          <div className="relative">
            <Input
              id="blog"
              placeholder="yoursite.com/blog"
              value={blogRootUrl}
              onChange={(e) => setBlogRootUrl(e.target.value)}
              className={`pr-10 ${
                blogRootUrl && !validateUrl(blogRootUrl) 
                  ? 'border-destructive focus-visible:ring-destructive' 
                  : ''
              }`}
              required
            />
            {blogRootUrl && validateUrl(blogRootUrl) && (
              <a
                href={blogRootUrl.startsWith('http') ? blogRootUrl : `https://${blogRootUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Best Articles */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Лучшие статьи (3 URL) *</Label>
          <p className="text-sm text-muted-foreground mb-4">
            Укажите ваши топ-3 статьи для анализа стиля и тона
          </p>
          
          <div className="space-y-3">
            {bestArticles.map((article, index) => (
              <div key={index} className="relative">
                <Label htmlFor={`article-${index + 1}`} className="text-xs text-muted-foreground mb-1 block">
                  Статья {index + 1}
                </Label>
                <div className="relative">
                  <Input
                    id={`article-${index + 1}`}
                    placeholder={`yoursite.com/blog/article-${index + 1}`}
                    value={article}
                    onChange={(e) => updateBestArticle(index, e.target.value)}
                    className={`pr-10 ${
                      article && !validateUrl(article) 
                        ? 'border-destructive focus-visible:ring-destructive' 
                        : ''
                    }`}
                    required
                  />
                  {article && validateUrl(article) && (
                    <a
                      href={article.startsWith('http') ? article : `https://${article}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Card className="p-4 bg-blue-50 border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Совет:</strong> Мы автоматически попытаемся определить эти URL на основе анализа вашего сайта. 
          Вы всегда можете изменить их вручную.
        </p>
      </Card>
    </div>
  );
}