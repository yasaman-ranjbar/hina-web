"use client";

import { useTranslation } from "@/app/i18n/client";
import { NavigationProps } from "@/types/navigation-menu-items";
import { LanguageProps } from "@/types/translation";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavigation: React.FC<LanguageProps> = ({ lng }) => {
  const { t } = useTranslation(lng);
  const menuItems: NavigationProps[] = [
    {
      title: t("homePage"),
      href: lng === "fa" ? "/fa" : "/en",
    },
    {
      title: t("ReactCourses"),
      href: lng === "fa" ? "/fa/courses" : "/en/courses",
    },
    {
      title: t("articles"),
      href: lng === "fa" ? "/fa/blog" : "/en/blog",
    },
  ];
  // for the link be active use this hook
  const pathname = usePathname();
  return (
    <ul className="flex gap-8 ms-12">
      {menuItems.map((item) => (
        <li key={item.href}>
          <Link
            className={`${pathname === item.href && 'border-b-2 dark:text-primary dark:border-primary/30'}dark:hover:text-primary transition-colors`}
            href={item.href}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TopNavigation;
