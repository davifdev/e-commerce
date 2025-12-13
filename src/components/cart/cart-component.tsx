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
import CartItemComponent from "../cart-item/cart-item-component";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux.hooks";
import { useDispatch } from "react-redux";
import { cartToggle } from "../../store/toolkit/cart/cart.slice";
import { selectAmountPrice } from "../../store/reducers/cart/cart.selectors";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigateCheckout = () => {
    navigate(`/checkout`);
    dispatch(cartToggle());
  };

  const { isVisible, products } = useAppSelector((state) => state.cartReducer);

  const amountPrice = useAppSelector(selectAmountPrice);

  return (
    <CartContainer $isVisible={isVisible}>
      <CartEscapeArea onClick={() => dispatch(cartToggle())} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.length === 0 ? (
          <p>Seu carrinho está vázio!</p>
        ) : (
          <>
            <CheckoutProducts $isCart={true}>
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
            <Button onClick={handleNavigateCheckout}>
              <IconContainer>
                <MdAddShoppingCart size={24} />
              </IconContainer>
              Ir para o Checkout
            </Button>
          </>
        )}
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
