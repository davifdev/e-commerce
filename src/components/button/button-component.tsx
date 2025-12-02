import type { ComponentProps, ReactNode } from "react";
import { CustomButtonContainer } from "./button.styles";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <CustomButtonContainer>{children}</CustomButtonContainer>;
};

export default Button;
