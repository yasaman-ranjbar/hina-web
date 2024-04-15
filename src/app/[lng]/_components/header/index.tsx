"use client";

import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import Image from "next/image";
import TopNavigation from "./top-navigation";
import { useState } from "react";
import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import ChangeLanguage from "../change-language/change-language";

const Header = ({ lng }: LanguageProps) => {
  const { t } = useTranslation(lng!);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="border-b border-base-content dark:border-base-content dark:border-opacity-5 py-6">
      {/* container is'nt centered as a default for centered config tailwind.config */}
      <div className="container flex items-center justify-between">
        <Image src="/images/logo2.png" width={50} height={100} alt="hina" />
        <TopNavigation lng={lng} />
        <div className="flex items-center gap-2">
          <span className={`${lng === "fa" ? "mr-auto" : "ml-auto"} `}>
            {t("register")}
          </span>
          <ChangeLanguage lng={lng} />
        </div>
      </div>
    </header>
  );
};

export default Header;
