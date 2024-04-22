import { DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { TextBoxProps } from "../../textbox/textbox.types";

export type TextInputProps<TFormValues extends FieldValues> = Omit<TextBoxProps, 'name'> & {
    register: UseFormRegister<TFormValues>;
    name: Path<TFormValues>;
    rules?: RegisterOptions;
    errors?: Partial<DeepMap<TFormValues, FieldError>>
}