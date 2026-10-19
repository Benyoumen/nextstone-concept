
import { Outlet } from "react-router-dom";
import OriginadorSidebar from "./OriginadorSidebar";

export default function OriginadorLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:block w-64 border-r">
        <OriginadorSidebar />
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        <main className="flex-1 p-6 bg-slate-50">
          <Outlet />
        </main>
        <footer className="border-t px-6 py-3 text-sm text-gray-600">
          <div className="flex justify-between items-center">
            <span>NextStone</span>
            <span>© {new Date().getFullYear()} NextStone</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
