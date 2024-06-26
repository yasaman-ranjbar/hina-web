import { FieldValues, get } from "react-hook-form";
import { TextInputProps } from "./text-input.types";
import TextBox from "../../textbox/textbox";

 const TextInput = <TFormValues extends FieldValues>({
  name,
  register,
  errors,
  variant,
  ...rest
}: TextInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  return (
    <>
      <TextBox
        {...register(name)}
        {...(hasError ? { variant: "error" } : { variant: variant })}
        {...rest}
      />
      {hasError && <p className="mt-1 text-sm text-error">{error.message}</p>}
    </>
  );
};

export default TextInput;
