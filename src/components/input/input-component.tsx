import type { ComponentProps } from "react";
import { CustomInputContainer } from "./input.styles";
interface InputProps extends ComponentProps<"input"> {
  hasError?: boolean;
}

const Input = ({ ...props }: InputProps) => {
  return <CustomInputContainer {...props} />;
};

export default Input;
