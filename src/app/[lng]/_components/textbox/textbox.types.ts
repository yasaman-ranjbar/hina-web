import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

type TextBoxType = "text" | "number" | "email" | "password";

export type TextBoxProps = Omit<InputHTMLAttributes<HTMLInputElement> , 'size'> & ComponentBase & {
    type?: TextBoxType;
}