"use client";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const HeaderUserSection = ({ lng }: LanguageProps) => {
  const { t } = useTranslation(lng!);
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <p>{session.user.mobile}</p>
      ) : (
        <Link href={`${lng === "fa" ? "/fa/signin" : "/en/signin"} `}>
          <span className={`${lng === "fa" ? "mr-auto" : "ml-auto"} `}>
            {t("registerLogin")}
          </span>
        </Link>
      )}
    </>
  );
};

export default HeaderUserSection;
