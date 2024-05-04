"use client";

import Button from "@/app/[lng]/_components/button/button";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import { SignInProps } from "../types/siginin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/[lng]/_components/form-input";
import { useSignIn } from "../_api/siginin";
import { useRouter } from "next/navigation";
import { useNotificationStore } from "@/stores/notification.store";

const SignInForm = ({ lng }: LanguageProps) => {
  const { t } = useTranslation(lng!);
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInProps>();

  const showNotification = useNotificationStore((state) => state.showNotification)

  const router = useRouter();

  const signIn = useSignIn({
    onSuccess: () => {
      router.push(`/fa/verify?mobile=${getValues("mobile")}`);
       showNotification({
         message: t("sendingVerificationCode"),
         type: "info",
       });
    },
  });

  const onSubmit = (data: SignInProps) => {
    signIn.submit(data);
  };

  return (
    <>
      <h5 className="text-2xl">{t("loginRegister")}</h5>
      <p className="mt-2">{t("loginDescription")}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-16"
      >
        <TextInput<SignInProps>
          placeholder={t("mobileNumber")}
          register={register}
          name={"mobile"}
          rules={{
            required: t("requiredMobile"),
            maxLength: {
              value: 11,
              message: t("NumberMustBe11Digits"),
            },
            minLength: {
              value: 11,
              message: t("NumberMustBe11Digits"),
            },
          }}
          errors={errors}
        />

        <Button type="submit" variant="primary">
          {t("confirmCode")}
        </Button>
      </form>
    </>
  );
};

export default SignInForm;
