import { MdAddShoppingCart } from "react-icons/md";

import Button from "../../components/button/button-component";
import CartItem from "../../components/cart-item/cart-item-component";
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from "./checkout.styles";
import { IconContainer } from "../../components/button/button.styles";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutProducts>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </CheckoutProducts>
      <CheckoutTotal>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(500)}
      </CheckoutTotal>
      <Button>
        <IconContainer>
          <MdAddShoppingCart size={24} />
        </IconContainer>
        Finalizar a Compra
      </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
