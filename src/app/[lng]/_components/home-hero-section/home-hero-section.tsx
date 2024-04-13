"use client";

import Image from "next/image";
import Button from "../button/button";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import { IconArrowLeftFill } from "../icons/icons";

const HomeHeroSection = ({ lng }: LanguageProps) => {
  const { t } = useTranslation(lng!);
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex-1 flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl xl:text-2xl dark:text-info ltr:text-left">
            {t("welcomeTo")}
          </h3>
          <h1 className="text-3xl lg:text-5xl xl:text-5xl font-black gradient ltr:text-left">
            {t("successWay")}
          </h1>
          <p className="max-w-2xl  text-lg md:text-xl font-bold leading-8 ltr:text-left">
            {t("heroPassage")}
          </p>
          <div className="mt-5 flex gap-4">
            <Button
              variant="primary"
              size="large"
              className="whitespace-nowrap"
            >
              {t("ReactCourses")}
              <IconArrowLeftFill fill="currentColor" />
            </Button>
            <Button
              variant="neutral"
              size="large"
              className="whitespace-nowrap"
            >
              {t("ProgrammingAdvice")}
            </Button>
          </div>

          <Image
            src="/images/frameworks.png"
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            width={412}
            height={39}
            alt="frameworks"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          alt="programmer"
          width={702}
          height={521}
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
