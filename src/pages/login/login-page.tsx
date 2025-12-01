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

const Login = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>
        <Button>
          <IconContainer>
            <FaGoogle size={16} />
          </IconContainer>
          Entrar com o Google
        </Button>
        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
        <LoginInputContainer>
          <p>E-mail</p>
          <Input placeholder="Digite seu e-mail" />
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Senha</p>
          <Input placeholder="Digite sua senha" />
        </LoginInputContainer>
        <Button>
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
