"use client";

import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import Image from "next/image";
import TopNavigation from "./top-navigation";

const Header = ({ lng }: LanguageProps) => {
  const { t } = useTranslation(lng);
  return (
    <header className="border-b border-base-content dark:border-base-content dark:border-opacity-5 py-6">
      {/* container is'nt centered as a default for centered config tailwind.config */}
      <div className="container flex items-center justify-between">
        <Image src="/images/logo2.png" width={50} height={100} alt="hina" />
        <TopNavigation lng={lng} />
        <span className={`${lng === 'fa' ? 'mr-auto' : 'ml-auto'} `}>{t("register")}</span>
      </div>
    </header>
  );
};

export default Header;
