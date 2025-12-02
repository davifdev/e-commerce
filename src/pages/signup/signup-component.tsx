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
import { useForm } from "react-hook-form";
import isEmail from "validator/lib/isEmail";
interface SignupUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupUser>({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const createUser = async (data: SignupUser) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <SignUpContainer>
      <SignUpContent onSubmit={handleSubmit(createUser)}>
        <SignUpHeadline>Crie a sua conta</SignUpHeadline>
        <SignUpInputContainer>
          <p>Nome</p>
          <Input
            placeholder="Digite seu nome"
            {...register("name", {
              required: "O nome é obrigatório.",
              minLength: {
                value: 3,
                message: "O nome deve ter no mínimo 3 caracteres.",
              },
            })}
          />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Sobrenome</p>
          <Input
            placeholder="Digite seu sobrenome"
            {...register("lastname", {
              required: "O sobrenome é obrigatório.",
              minLength: {
                value: 3,
                message: "O sobrenome deve ter no mínimo 3 caracteres.",
              },
            })}
          />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>E-mail</p>
          <Input
            placeholder="Digite seu e-mail"
            {...register("email", {
              required: "O e-mail é obrigatório",
              validate: (value) => {
                if (!isEmail(value)) {
                  return "O e-mail é inválido.";
                }
              },
            })}
          />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Senha</p>
          <Input
            placeholder="Digite sua senha"
            {...register("password", {
              required: "A senha é obrigatória.",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres.",
              },
            })}
          />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Confirmação de senha</p>
          <Input
            placeholder="Confirme sua senha"
            {...register("passwordConfirmation", {
              required: "A confirmação de senha é obrigatória.",
              minLength: {
                value: 6,
                message:
                  "A confirmação de senha deve ter no mínimo 6 caracteres.",
              },
            })}
          />
        </SignUpInputContainer>
        <Button type="submit">
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
