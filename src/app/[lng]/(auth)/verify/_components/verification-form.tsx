"use client";

import AuthCode from "@/app/[lng]/_components/auth-code/auth-code";
import { AuthCodeRef } from "@/app/[lng]/_components/auth-code/auth-code.types";
import Button from "@/app/[lng]/_components/button/button";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import Link from "next/link";
import { useRef } from "react";

const VerificationForm = ({ lng }: LanguageProps) => {
  const authCodeRef = useRef<AuthCodeRef>(null);
  const { t } = useTranslation(lng!);

  return (
    <>
      <h5 className="text-2xl">{t("confirmationCode")}</h5>
      <p className="mt-2">{t("confirmationCodeDesc")}</p>
      <form
        className="flex flex-col gap-6 mt-10 flex-1"
      >
        <AuthCode
          className="mt-10"
          ref={authCodeRef}
          onChange={(value) => {
            console.log(value);
          }}
        />
        <Button
          isLink={true}
          onClick={authCodeRef.current?.clear}
        >
          {t("resendCode")}
        </Button>
        <Button
          type="submit"
          variant="primary"
        >
          {t("confirm&continue")}{" "}
        </Button>
        <div className="flex items-start gap-1 justify-center mt-auto">
          <span>{t("forEditMobile")}</span>
          <Link href="/signin">{t("here")}</Link>
          <span>{t("click")}</span>
        </div>
      </form>
    </>
  );
};

export default VerificationForm;
