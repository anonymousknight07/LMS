"use client";

import { AreaChart, BarChart, Compass, Globe, Layers, Layout, List, ListMinus } from "lucide-react";
import { usePathname } from "next/navigation";

import { SidebarItem } from "./sidebar-item";

const guestRoutes = [
  {
    icon: Layers,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Globe,
    label: "Browse",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: ListMinus,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: AreaChart,
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