import Button from "../../components/button/button-component";
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
        <Button>Entrar com o Google</Button>
        <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
        <LoginInputContainer>
          <p>E-mail</p>
          <Input placeholder="Digite seu e-mail" />
        </LoginInputContainer>
        <LoginInputContainer>
          <p>Senha</p>
          <Input placeholder="Digite sua senha" />
        </LoginInputContainer>
        <Button>Entrar</Button>
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
