import { MdAddShoppingCart } from "react-icons/md";

import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./cart.styles";
import Button from "../button/button-component";
import { IconContainer } from "../button/button.styles";
import { CheckoutProducts } from "../../pages/checkout/checkout.styles";
import { useCartContext } from "../../contexts/cart";
import CartItemComponent from "../cart-item/cart-item-component";

const Cart = () => {
  const { products, isVisible, handleVisibleIsCart, amountPrice } =
    useCartContext();

  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={handleVisibleIsCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        <CheckoutProducts isCart={true}>
          {products.map((product) => (
            <CartItemComponent product={product} key={product.id} />
          ))}
        </CheckoutProducts>
        <CartTotal>
          Total:
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(amountPrice)}
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
