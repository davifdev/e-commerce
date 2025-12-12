import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderComponent from "../../components/header/header-component";
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent,
} from "./payment-confirmation.styles";

import { CircleCheckBigIcon, CircleXIcon, HomeIcon } from "lucide-react";
import Colors from "../../themes/theme.colors";
import Button from "../../components/button/button-component";
import { IconContainer } from "../../components/button/button.styles";

const PaymentConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const status = searchParams.get("success");
  const isCanceled = searchParams.get("canceled") === "true";

  const handleGoToHomePageClick = () => {
    navigate("/");
  };

  return (
    <>
      <HeaderComponent />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === "true" && (
            <>
              <CircleCheckBigIcon size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso</p>
            </>
          )}
          {(status === "false" || isCanceled) && (
            <>
              <CircleXIcon size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor, tente
                novamente.
              </p>
            </>
          )}
          <Button onClick={handleGoToHomePageClick}>
            <IconContainer>
              <HomeIcon size={16} />
            </IconContainer>
            Ir para Página Inicial
          </Button>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  );
};

export default PaymentConfirmation;
