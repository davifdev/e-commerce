import { MdAddShoppingCart } from "react-icons/md";

import Button from "../../components/button/button-component";

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from "./checkout.styles";
import { IconContainer } from "../../components/button/button.styles";
import { useCartContext } from "../../contexts/cart";
import CartItemComponent from "../../components/cart-item/cart-item-component";
import { useAppSelector } from "../../hooks/redux.hooks";

const Checkout = () => {
  const { amountPrice } = useCartContext();

  const { products } = useAppSelector((state) => state.cartReducer);

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <CheckoutProducts>
        {products.map((product) => (
          <CartItemComponent product={product} key={product.id} />
        ))}
      </CheckoutProducts>
      <CheckoutTotal>
        {new Intl.NumberFormat("pt-br", {
          style: "currency",
          currency: "BRL",
        }).format(amountPrice)}
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
