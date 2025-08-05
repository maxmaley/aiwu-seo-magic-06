import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  collapsed?: boolean;
}

export function ThemeToggle({ collapsed = false }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size={collapsed ? "icon" : "default"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`${collapsed ? "w-8 h-8" : "w-full justify-start"}`}
    >
      {theme === "light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
      {!collapsed && (
        <span className="ml-2">
          {theme === "light" ? "Темная тема" : "Светлая тема"}
        </span>
      )}
    </Button>
  );
}