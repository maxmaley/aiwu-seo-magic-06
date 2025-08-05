import { useState } from "react";
import { Calendar, Hash, FileText, Settings, User, ChevronDown, Plus, Home } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/dashboard/ThemeToggle";

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "calendar", title: "Календарь контента", icon: Calendar },
  { id: "keywords", title: "Ключевые слова", icon: Hash },
  { id: "history", title: "История контента", icon: FileText },
  { id: "settings", title: "Настройки", icon: Settings },
  { id: "account", title: "Управление аккаунтом", icon: User },
];

const mockProjects = [
  { id: 1, name: "Интернет-магазин техники", status: "active" },
  { id: 2, name: "Блог о здоровье", status: "active" },
  { id: 3, name: "SaaS платформа", status: "active" },
];

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  const { state } = useSidebar();
  const [currentProject, setCurrentProject] = useState(mockProjects[0]);
  const collapsed = state === "collapsed";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">ContentHub</span>
            </div>
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center mx-auto">
              <Home className="w-4 h-4 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <div className="p-4 border-b">
          <ThemeToggle collapsed={collapsed} />
        </div>

        {/* Project Selector */}
        {!collapsed && (
          <div className="p-4 border-b">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between text-left"
                >
                  <span className="truncate">{currentProject.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {mockProjects.map((project) => (
                  <DropdownMenuItem
                    key={project.id}
                    onClick={() => setCurrentProject(project)}
                    className={currentProject.id === project.id ? "bg-accent" : ""}
                  >
                    {project.name}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить новый проект
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}

        {/* Navigation Menu */}
        <SidebarGroup className="flex-1">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onTabChange(item.id)}
                    className={`w-full ${
                      activeTab === item.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}