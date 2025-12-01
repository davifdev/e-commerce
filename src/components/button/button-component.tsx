import type { ReactNode } from "react";
import { CustomButtonContainer } from "./button.styles";

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <CustomButtonContainer>{children}</CustomButtonContainer>;
};

export default Button;
