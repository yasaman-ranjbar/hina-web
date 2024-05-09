"use client";

import AuthCode from "@/app/[lng]/_components/auth-code/auth-code";
import { AuthCodeRef } from "@/app/[lng]/_components/auth-code/auth-code.types";
import Button from "@/app/[lng]/_components/button/button";
import { Timer } from "@/app/[lng]/_components/timer/timer";
import { TimerRef } from "@/app/[lng]/_components/timer/timer.types";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import Link from "next/link";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { VerifyUserModel } from "../types/verify-user.type";
import { useNotificationStore } from "@/stores/notification.store";
import { useSearchParams } from "next/navigation";
import { useSendAuthCode } from "../_api/send-auth-code";

const getTwoMinutesFromNow = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  return time;
};

const VerificationForm = ({ lng }: LanguageProps) => {
  const authCodeRef = useRef<AuthCodeRef>(null);
  const { t } = useTranslation(lng!);
  const [showResendCode, setShowResendCode] = useState<boolean>(false);
  const timerRef = useRef<TimerRef>(null);

  const {
    handleSubmit,
    setValue,
    register,
    formState: { isValid },
  } = useForm<VerifyUserModel>();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const params = useSearchParams();
  const username = params.get("mobile")!;

  const sendAuthCode = useSendAuthCode({
    onSuccess: () => {
      showNotification({
        type: "info",
        message: "کد تایید به شماره شما ارسال شد",
      });
    },
  });

  const onSubmit = (data: VerifyUserModel) => {
    data.username = username;
  };

  register("code", {
    validate: (value: string) => (value ?? "").length === 5,
  });

  const resendAuthCode = () => {
    timerRef.current?.restart(getTwoMinutesFromNow());
    setShowResendCode(false);
    sendAuthCode.submit(username);
    authCodeRef.current?.clear();
  };

  return (
    <>
      <h5 className="text-2xl">{t("confirmationCode")}</h5>
      <p className="mt-2">{t("confirmationCodeDesc")}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-10 flex-1"
      >
        <AuthCode
          className="mt-10"
          ref={authCodeRef}
          onChange={(value) => {
            setValue("code", value, { shouldValidate: true });
          }}
        />

        <Timer
          ref={timerRef}
          className="my-8"
          size="small"
          onExpire={() => {
            setShowResendCode(true);
          }}
          expiryTimestamp={getTwoMinutesFromNow()}
          showDays={false}
          showHours={false}
        />
        <Button
          isLink
          className="!bg-transparent !border-transparent !outline-none"
          isDisabled={!showResendCode}
          onClick={resendAuthCode}
        >
          {t("resendCode")}
        </Button>
        <Button type="submit" variant="primary" isDisabled={!isValid}>
          {t("confirm&continue")}
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
