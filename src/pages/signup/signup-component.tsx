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
import InputErrorMessage from "../../components/input-error-message/input-error-message-component";
import {
  AuthErrorCodes,
  createUserWithEmailAndPassword,
  type AuthError,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useUserContext } from "../../contexts/user";
import { useNavigate } from "react-router-dom";
interface SignupUser {
  name: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const SignUp = () => {
  const { currentUser } = useUserContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm<SignupUser>({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  if (currentUser) {
    navigate("/");
    return;
  }

  const password = watch("password");

  const createUser = async (data: SignupUser) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const user = userCredential.user;
      await addDoc(collection(db, "users"), {
        id: user.uid,
        email: user.email,
        name: data.name,
        lastname: data.lastname,
        provider: "firebase",
      });
    } catch (error) {
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        return setError("email", {
          message: "O e-mail já está sendo utilizado.",
        });
      }
    }
  };

  return (
    <SignUpContainer>
      <SignUpContent onSubmit={handleSubmit(createUser)}>
        <SignUpHeadline>Crie a sua conta</SignUpHeadline>
        <SignUpInputContainer>
          <p>Nome</p>
          <Input
            hasError={!!errors.name}
            placeholder="Digite seu nome"
            {...register("name", {
              required: "O nome é obrigatório.",
              minLength: {
                value: 3,
                message: "O nome deve ter no mínimo 3 caracteres.",
              },
            })}
          />
          <InputErrorMessage>{errors.name?.message}</InputErrorMessage>
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Sobrenome</p>
          <Input
            hasError={!!errors.lastname}
            placeholder="Digite seu sobrenome"
            {...register("lastname", {
              required: "O sobrenome é obrigatório.",
              minLength: {
                value: 3,
                message: "O sobrenome deve ter no mínimo 3 caracteres.",
              },
            })}
          />
          <InputErrorMessage>{errors.lastname?.message}</InputErrorMessage>
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>E-mail</p>
          <Input
            hasError={!!errors.email}
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
          <InputErrorMessage>{errors.email?.message}</InputErrorMessage>
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Senha</p>
          <Input
            hasError={!!errors.password}
            type="password"
            placeholder="Digite sua senha"
            {...register("password", {
              required: "A senha é obrigatória.",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres.",
              },
            })}
          />
          <InputErrorMessage>{errors.password?.message}</InputErrorMessage>
        </SignUpInputContainer>
        <SignUpInputContainer>
          <p>Confirmação de senha</p>
          <Input
            hasError={!!errors.passwordConfirmation}
            type="password"
            placeholder="Confirme sua senha"
            {...register("passwordConfirmation", {
              required: "A confirmação de senha é obrigatória.",
              minLength: {
                value: 6,
                message:
                  "A confirmação de senha deve ter no mínimo 6 caracteres.",
              },
              validate: (value) => {
                if (value !== password) {
                  return "As senhas devem ser iguais.";
                }
              },
            })}
          />
          <InputErrorMessage>
            {errors.passwordConfirmation?.message}
          </InputErrorMessage>
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
