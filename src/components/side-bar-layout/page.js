"use client";
import { useState } from "react";
import Link from "next/link";
import Activity from "../../assets/Activity.svg";
import Active from "../../assets/active.svg";
import employees from "@/app/dashboard/employees/page";

const menuItems = [
  { name: "Dashboard", icon: Activity, href: "#", activeicon: Active },
  { name: "Employees", icon: Activity, href: "/dashboard/employees", activeicon: Active },
  {
    name: "Transaction History",
    icon: Activity,
    href: "#",
    activeicon: Active,
  },
  { name: "Payment Request", icon: Activity, href: "#", activeicon: Active },
  { name: "Setting", icon: Activity, href: "#", activeicon: Active },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex relative">
      {/* Toggle button for small screens */}
      <button
        className="block md:hidden p-4 text-gray-800"
        onClick={toggleSidebar}
      >
        &#61;
      </button>

      {/* Backdrop (visible only when sidebar is open on small screens) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar (hidden on small screens when not active) */}
      <aside
        className={`bg-white w-80 min-h-screen flex flex-col text-center p-5 fixed md:static transition-transform duration-300 z-20 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mt-3">
          <h1 className="text-3xl font-bold text-gray-800">MOWA</h1>
        </div>
        <nav className="flex-1 mt-9">
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mt-1">
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-4 rounded-lg text-sm ${
                    activeItem === item.name
                      ? "text-white button-background font-semibold"
                      : "custom-p-color hover:bg-gray-100 font-semibold"
                  }`}
                  onClick={() => {
                    setActiveItem(item.name);
                    setSidebarOpen(false); // Close sidebar after click on mobile
                  }}
                >
                  {activeItem === item.name ? (
                    <item.icon className="mr-3" />
                  ) : (
                    <item.activeicon className="mr-3" />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4">
          <button
            className="flex items-center text-sm custom-p-color px-4 py-2 w-full font-semibold"
            onClick={() => {
              /* Add logout functionality */
            }}
          >
            <Active className="mr-3" />
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}
