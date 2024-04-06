'use client';

import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";

type HeaderProps = {
  lng: string;
};

const Header = ({ lng }: HeaderProps) => {
  const { t } = useTranslation(lng);
  return (
    <header className="border-b border-base-content dark:border-base-content dark:border-opacity-5 py-6">
      {/* container is'nt centered as a default for centered config tailwind.config */}
      <div className="container flex items-center justify-between">
        <Image src="/images/logo2.png" width={50} height={100} alt="hina" />
        <span>navigation</span>
        <span className="mr-auto">{t("register")}</span>
      </div>
    </header>
  );
};

export default Header;
