"use server";

import { OperationResult } from "@/types/operation-result";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { SignInProps } from "@/app/[lng]/(auth)/signin/types/siginin.types";
import { SendAuthCodeProps, VerifyUserModel } from "@/app/[lng]/(auth)/verify/types/verify-user.type";
import { signIn, signOut } from "@/auth";

export async function signInAction(
    formState: OperationResult<string> | null,
    formData: FormData
) {
    const mobile = formData.get("mobile") as string;
    // const validatedData = signInSchema.safeParse({
    //     mobile,
    // });

    // if (!validatedData.success) {
    //     return {
    //         message: "خطا در فرمت موبایل",
    //     };
    // } else {
    return serverActionWrapper(
        async () =>
            await createData<SignInProps, string>("/signin", {
                mobile,
            })
    );
    // }
}

export async function SendAuthCode(
    formState: OperationResult<string> | null,
    mobile: string
) {
    return serverActionWrapper(
        async () =>
            await createData<SendAuthCodeProps, string>("/send-auth-code",
                { mobile })
    );
}


export async function verify(prevState: OperationResult<void> | undefined, model: VerifyUserModel) {
    try {
        await signIn("credentials", {
            username: model.username,
            code: model.code,
            redirect: false,
        });
        return {
            isSuccess: true,
        } satisfies OperationResult<void>
    } catch (error) {
        // console.log(error);
        //    throw new Error('');
    }
}


export async function logout() {
    await signOut();
}