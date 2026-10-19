
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import DashboardHeader from "./DashboardHeader";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <DashboardHeader />
          <main className="flex-1 p-6 bg-slate-50">
            <Outlet />
          </main>
          <footer className="border-t px-6 py-3 text-sm text-gray-600">
            <div className="flex justify-between items-center">
              <span>NextStone</span>
              <span>All rights Reserved © Copyright 2025</span>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
}
