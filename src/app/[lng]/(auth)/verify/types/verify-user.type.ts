export type VerifyUserModel = {
    code: string;
    username: string;
}

export type SendAuthCodeProps = {
    mobile: string;
}