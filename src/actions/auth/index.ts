"use server";

import { OperationResult } from "@/types/operation-result";
import { redirect } from "next/navigation";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { SignInProps } from "@/app/[lng]/(auth)/signin/types/siginin.types";
import { SendAuthCodeProps } from "@/app/[lng]/(auth)/verify/types/verify-user.type";
import { Problem } from "@/types/http-errors.interface";
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


// export async function verify(
//     state: Problem | undefined,
//     formData: FormData
// ) {
//     try {
//         await signIn("credentials", formData);
//     } catch (error: unknown) {
//         //todo
//     }
// }

export async function verify(state: Problem | undefined, formData: FormData) {
    try {
        await signIn("credentials", formData);
    } catch (error) {
        return {
            status: 0,
            title: "",
        } satisfies Problem;
    }
}


export async function logout() {
    await signOut();
}