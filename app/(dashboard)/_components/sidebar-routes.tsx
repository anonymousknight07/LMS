"use client";

import { Layers3,  LineChart,  ScanSearch, Scroll } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-items";

const guestRoutes = [
  {
    icon: Layers3,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: ScanSearch,
    label: "Browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: Scroll,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: LineChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem  
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}