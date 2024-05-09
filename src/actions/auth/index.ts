"use server"
import { signInSchema } from "@/app/[lng]/(auth)/signin/types/signin.schema";
import { OperationResult } from "@/types/operation-result";
import { redirect } from "next/navigation";
import { serverActionWrapper } from "../server-action-wrapper";
import { createData } from "@/core/http-service/http-service";
import { SignInProps } from "@/app/[lng]/(auth)/signin/types/siginin.types";

// use server actions


export async function signInAction(formState: OperationResult<string> | null, formData: FormData) {

    const mobile = formData.get('mobile') as string;
    // const validateData = signInSchema.safeParse({
    //     mobile
    // });

    // if (!validateData.success) {
    //     return {
    //         message: 'error'
    //     }
    // } else {
    return serverActionWrapper(async () => await createData<SignInProps, string>("/signin", {
        mobile
    }))
    // }


}