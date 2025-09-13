'use client'
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <AppSidebar  />

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out
          lg:ml-[250px] bg-white
        `}>

        <AppHeader />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
