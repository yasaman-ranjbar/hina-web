"use client";

import AuthCode from "@/app/[lng]/_components/auth-code/auth-code";
import { AuthCodeRef } from "@/app/[lng]/_components/auth-code/auth-code.types";
import Button from "@/app/[lng]/_components/button/button";
import { Timer } from "@/app/[lng]/_components/timer/timer";
import { TimerRef } from "@/app/[lng]/_components/timer/timer.types";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { useEffect, useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { VerifyUserModel } from "../types/verify-user.type";
import { useNotificationStore } from "@/stores/notification.store";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { SendAuthCode, verify } from "@/actions/auth";
import { getSession } from "next-auth/react";

const getTwoMinutesFromNow = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 120);
  return time;
};

interface VerificationFormProps {
  mobile: string;
  lng?: string;
}

const VerificationForm = ({ lng, mobile }: VerificationFormProps) => {
  const authCodeRef = useRef<AuthCodeRef>(null);
  const { t } = useTranslation(lng!);
  const [showResendCode, setShowResendCode] = useState<boolean>(false);
  const timerRef = useRef<TimerRef>(null);
  const router = useRouter();

  const {
    handleSubmit,
    setValue,
    register,
    formState: { isValid },
  } = useForm<VerifyUserModel>();

  const showNotification = useNotificationStore(
    (state) => state.showNotification
  );

  const [sendAuthCodeState, sendAuthCodeAction] = useFormState(
    SendAuthCode,
    null
  );
  const [verifyState, verifyAction] = useFormState(verify, undefined);

  const [verifyPendingState, startTransition] = useTransition();

  const params = useSearchParams();
  const username = params.get("mobile")!;

  useEffect(() => {
    if (verifyState && !verifyState.isSuccess) {
      showNotification({
        message: "",
        type: "error",
      });
    } else if (verifyState?.isSuccess) {
      const fetchSession = async () => await getSession();
      fetchSession();
      router.push("/fa/student/courses");
      // console.log("lng", lng);
      // if (lng === "fa") {
      //   router.push("/fa/student/courses");
      // } else {
      //   router.push("/en/student/courses");
      // }
    }
  });

  useEffect(() => {
    if (
      sendAuthCodeState &&
      !sendAuthCodeState.isSuccess &&
      sendAuthCodeState.error
    ) {
      showNotification({
        message: sendAuthCodeState.error.detail!,
        type: "error",
      });
    } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
      console.log(sendAuthCodeState.response);
      showNotification({
        message: "کد تایید به شماره شما ارسال شد",
        type: "info",
      });
    }
  }, [sendAuthCodeState, showNotification]);

  const onSubmit = (data: VerifyUserModel) => {
    data.username = username;

    startTransition(async () => {
      verifyAction({
        username: data.username,
        code: data.code,
      });
    });
  };

  register("code", {
    validate: (value: string) => (value ?? "").length === 5,
  });

  const resendAuthCode = () => {
    timerRef.current?.restart(getTwoMinutesFromNow());
    setShowResendCode(false);
    authCodeRef.current?.clear();
    sendAuthCodeAction(mobile);
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
        <Button
          type="submit"
          variant="primary"
          isLoading={verifyPendingState}
          isDisabled={!isValid}
        >
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
