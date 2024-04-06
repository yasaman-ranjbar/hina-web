"use client";

import { NavigationProps } from "@/types/navigation-menu-items";
import { usePathname } from "next/navigation";

const menuItems: NavigationProps[] = [
  {
    title: "",
    href: "",
  },
];

const TopNavigation: React.FC = () => {
  const pathname = usePathname()
  return <div>TopNavigation: = </div>;
};

export default TopNavigation;
