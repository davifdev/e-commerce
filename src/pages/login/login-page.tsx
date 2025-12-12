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
import {
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
  type AuthError,
} from "firebase/auth";
import { auth, db, provider } from "../../firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useUserContext } from "../../contexts/user";
import { useNavigate } from "react-router-dom";

interface LoginUser {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const { currentUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (currentUser) {
    navigate("/");
    return;
  }

  const loginUser = async (data: LoginUser) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError("email", { message: "E-mail ou senha incorretos." });
      }
    }
  };

  const handleLoginWithGoogleClick = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      const name = user.displayName?.split(" ")[0];
      const lastname = user.displayName?.split(" ")[1];

      await addDoc(collection(db, "users"), {
        id: user.uid,
        name,
        lastname,
        email: user.email,
        provider: "Google",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <LoginContent onSubmit={handleSubmit(loginUser)}>
        <LoginHeadline>Entre com a sua conta</LoginHeadline>
        <Button type="button" onClick={handleLoginWithGoogleClick}>
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
            type="password"
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
