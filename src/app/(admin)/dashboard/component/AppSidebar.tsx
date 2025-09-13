"use client";
import React, { useState } from "react";
import Link from "next/link";

type SubItem = {
  name: string;
  path: string;
};

type NavItem = {
  name: string;
  path?: string;
  subItems?: SubItem[];
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
  },
  {
    name: "Visas",
    subItems: [
      { name: "Visa List", path: "/dashboard/visa-list" },
      { name: "Add New Visa", path: "/dashboard/add-visa" },
    ],
  },
];

const AppSidebar: React.FC = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (name: string) => {
      setOpenDropdown((prev) => (prev === name ? null : name));
    };

  return (
    <aside className="fixed top-0 left-0 dark:bg-gray-900 h-screen w-64 bg-white border-r border-gray-200 shadow-lg  dark:border-gray-700 flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
        My Sidebar
      </div>

      <nav className="flex-1 px-2 py-4 space-y-2">
        {navItems.map((item) => (
          <div key={item.name}>
            {item.subItems ? (
              <div>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 rounded hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <span>{item.name}</span>
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      openDropdown === item.name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDropdown === item.name && (
                  <div className="mt-1 ml-4 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className="block px-4 py-2 text-gray-600 rounded hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.path || "#"}
                className="block px-4 py-2 text-gray-700 rounded hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
        <button
          className="w-full px-4 py-2 text-left text-red-600 rounded text-2xl font-bold"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/signin";
          }}>
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
