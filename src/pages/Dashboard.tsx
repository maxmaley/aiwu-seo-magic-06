import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ContentCalendar } from "@/components/dashboard/ContentCalendar";
import { Keywords } from "@/components/dashboard/Keywords";
import { ContentHistory } from "@/components/dashboard/ContentHistory";
import { Settings } from "@/components/dashboard/Settings";
import { AccountManagement } from "@/components/dashboard/AccountManagement";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("calendar");

  const renderContent = () => {
    switch (activeTab) {
      case "calendar":
        return <ContentCalendar />;
      case "keywords":
        return <Keywords />;
      case "history":
        return <ContentHistory />;
      case "settings":
        return <Settings />;
      case "account":
        return <AccountManagement />;
      default:
        return <ContentCalendar />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            {renderContent()}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}