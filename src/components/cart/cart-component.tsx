import { MdAddShoppingCart } from "react-icons/md";

import CartItem from "../cart-item/cart-item-component";
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./cart.styles";
import Button from "../button/button-component";
import { IconContainer } from "../button/button.styles";

interface CartProps {
  handleToggleCart: () => void;
  toggleCart: boolean;
}

const Cart = ({ handleToggleCart, toggleCart }: CartProps) => {
  return (
    <CartContainer isVisible={toggleCart}>
      <CartEscapeArea onClick={handleToggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        <CartItem />
        <CartTotal>
          Total:
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(500)}
        </CartTotal>
        <Button>
          <IconContainer>
            <MdAddShoppingCart size={24} />
          </IconContainer>
          Ir para o Checkout
        </Button>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
