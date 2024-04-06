import { useTranslation } from "@/app/i18n";
import { languages } from "@/app/i18n/settings";
import { LanguageProps } from "@/types/translation";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";

const Footer = async ({ lng }: LanguageProps) => {
  const { t } = await useTranslation(lng);

  return (
    <footer className=" dark:bg-base-200">
      <Trans i18nKey="languageSwitcher" t={t}>
        Switch from <strong>{{ lng } as any}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </footer>
  );
};

export default Footer;
