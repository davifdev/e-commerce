import type { ComponentProps, ReactNode } from "react";
import { CustomButtonContainer } from "./button.styles";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default Button;
