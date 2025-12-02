import { FaGoogle } from "react-icons/fa";
import { PiSignIn } from "react-icons/pi";

import Button from "../../components/button/button-component";
import { IconContainer } from "../../components/button/button.styles";
import Input from "../../components/input/input-component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
import InputErrorMessage from "../../components/input-error-message/input-error-message-component";

interface LoginUser {
  email: string;
  password: string;
}
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginUser = async (data: LoginUser) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <LoginContainer>
      <LoginContent onSubmit={handleSubmit(loginUser)}>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>
        <Button type="button">
          <IconContainer>
            <FaGoogle size={16} />
          </IconContainer>
          Entrar com o Google
        </Button>
        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
        <LoginInputContainer>
          <p>E-mail</p>
          <Input
            hasError={!!errors.email}
            placeholder="Digite seu e-mail"
            {...register("email", {
              required: "O e-mail é obrigatório.",
              validate: (value) => {
                if (!isEmail(value)) {
                  return "O e-mail é inválido.";
                }
              },
            })}
          />
          <InputErrorMessage>{errors.email?.message}</InputErrorMessage>
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Senha</p>
          <Input
            hasError={!!errors.password}
            placeholder="Digite sua senha"
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres.",
              },
            })}
          />
          <InputErrorMessage>{errors.password?.message}</InputErrorMessage>
        </LoginInputContainer>
        <Button type="submit">
          <IconContainer>
            <PiSignIn size={18} />
          </IconContainer>
          Entrar
        </Button>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
