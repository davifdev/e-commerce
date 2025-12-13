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
import { useEffect, useState } from "react";
import Loading from "../../components/loading/loading-component";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { products } = useAppSelector((state) => state.cartReducer);
  const amountPrice = useAppSelector(selectAmountPrice);
  const { currentUser } = useAppSelector((state) => state.userReducer);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/");
      return;
    }
  }, [currentUser, navigate]);

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_URL}/create-checkout-session`,
        {
          products,
        }
      );

      window.location.href = data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CheckoutContainer>
      {isLoading && <Loading />}
      <CheckoutTitle>Checkout</CheckoutTitle>
      {products.length === 0 ? (
        <p>Seu carrinho está vázio!</p>
      ) : (
        <>
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
        </>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
