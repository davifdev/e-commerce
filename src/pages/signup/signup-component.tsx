import { PiSignIn } from "react-icons/pi";

import Button from "../../components/button/button-component";
import Input from "../../components/input/input-component";
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./signup.styles";
import { IconContainer } from "../../components/button/button.styles";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SignUpContent>
        <SignUpHeadline>Crie a sua conta</SignUpHeadline>
        <SignUpInputContainer>
          <p>Nome</p>
          <Input placeholder="Digite seu nome" />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Sobrenome</p>
          <Input placeholder="Digite seu sobrenome" />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>E-mail</p>
          <Input placeholder="Digite seu e-mail" />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Senha</p>
          <Input placeholder="Digite sua senha" />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Confirmação de senha</p>
          <Input placeholder="Confirme sua senha" />
        </SignUpInputContainer>
        <Button>
          <IconContainer>
            <PiSignIn size={18} />
          </IconContainer>
          Criar Conta
        </Button>
      </SignUpContent>
    </SignUpContainer>
  );
};

export default SignUp;
