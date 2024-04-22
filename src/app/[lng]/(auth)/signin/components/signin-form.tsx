"use client";

import Button from "@/app/[lng]/_components/button/button";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import { SignInProps } from "../types/siginin.types";
import { useForm } from "react-hook-form";
import { TextInput } from "@/app/[lng]/_components/form-input";

const SignInForm = ({ lng }: LanguageProps) => {
  const { t } = useTranslation(lng!);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>();

  const onSubmit = (data: SignInProps) => {
    console.log(data);
  };

  return (
    <>
      <h5 className="text-2xl">{t("loginRegister")}</h5>
      <p className="mt-2">{t("loginDescription")}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 mt-16"
      >
        {/* <TextBox
          {...register("mobile", {
            required: t("requiredMobile"),
          })}
          placeholder={t("mobileNumber")}
        /> */}

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
