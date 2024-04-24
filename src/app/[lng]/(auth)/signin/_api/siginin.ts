import { useMutation } from "@tanstack/react-query";
import { SignInProps } from "../types/siginin.types";
import { createData } from "@/core/http-service/http-service";

const signIn = (model: SignInProps): Promise<void> =>
    createData<SignInProps, void>("/signin", model);


type useSignInOption = {
    onSuccess: () => void;
}

export const useSignIn = ({ onSuccess }: useSignInOption) => {

    const { isPending, mutate: submit } = useMutation({
        mutationFn: signIn,
        onSuccess,
    })

    return { isPending, submit }
}