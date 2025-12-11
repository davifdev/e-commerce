import { MdAddShoppingCart } from "react-icons/md";

import Button from "../../components/button/button-component";

import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal,
} from "./checkout.styles";
import { IconContainer } from "../../components/button/button.styles";

import CartItemComponent from "../../components/cart-item/cart-item-component";
import { useAppSelector } from "../../hooks/redux.hooks";
import { selectAmountPrice } from "../../store/reducers/cart/cart.selectors";
import axios from "axios";

const Checkout = () => {
  const { products } = useAppSelector((state) => state.cartReducer);

  const amountPrice = useAppSelector(selectAmountPrice);

  const handleFinishPurchaseClick = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/create-checkout-session`,
        {
          products,
        }
      );

      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    }
  };

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
      <Button onClick={handleFinishPurchaseClick}>
        <IconContainer>
          <MdAddShoppingCart size={24} />
        </IconContainer>
        Finalizar a Compra
      </Button>
    </CheckoutContainer>
  );
};

export default Checkout;
