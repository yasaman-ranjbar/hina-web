import { useTranslation } from "@/app/i18n";
import { LanguageProps } from "@/types/translation";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../avatar/avatar";

const Footer = async ({ lng }: LanguageProps) => {
  const { t } = await useTranslation(lng!);

  return (
    <div className="bg-base-100 text-base-content">
      <footer className="container flex flex-col  lg:flex-row items-center gap-5 px-0  lg:px-12 xl:px-40 py-20">
        <div className="text-center flex flex-col items-center lg:me-20">
          <Image src="/images/logo2.png" width={180} height={36} alt="hina" />
          <p className="opacity-50 mt-2">
            {t("programmingPlatform")}
            <br />
            {t("ContinuousLearning")}
          </p>
        </div>
        <div className="flex flex-1 flex-col md:flex-row gap-5 md:gap-6 whitespace-nowrap">
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/install/" className="link link-hover">
              {t("React&NextTraining")}
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              {t("SeniorReact")}
            </Link>
            <Link href="/docs/customize/" className="link link-hover">
              {t("ProgrammingAdvice")}
            </Link>
          </div>

          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              {t("HinaLinkedin")}
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              {t("HinaTelegram")}
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              {t("HinaYoutube")}
            </Link>
          </div>
          <div className="grid flex-1 basis-36 gap-3 place-items-center md:place-items-start">
            <Link href="/docs/themes/" className="link link-hover">
              {t("articles")}
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              {t("faq")}
            </Link>
            <Link href="/docs/themes/" className="link link-hover">
              {t("Terms&privacy")}
            </Link>
          </div>
        </div>
      </footer>
      <div className="bg-base-200 text-left" lang="en" dir="ltr">
        <div className="container py-10 flex justify-between items-center">
          <div className="flex gap-5 items-center ">
            <Avatar src="/images/developer.png" />
            <div className="flex flex-col">
              <span className="text-base-content/50 ">Developed by:</span>
              <span className="text-lg font-bold tracking-wide">
                Yasaman Ranjbar
              </span>
            </div>
          </div>
          <span className="text-sm text-base-content/60 font-semibold">
            Copyright © 2024
            <p>All rights reserved</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

