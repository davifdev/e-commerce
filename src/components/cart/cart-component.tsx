import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal,
} from "./cart.styles";

const Cart = () => {
  return (
    <CartContainer isVisible={false}>
      <CartEscapeArea />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        <CartTotal>
          Total:
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(500)}
        </CartTotal>
      </CartContent>
    </CartContainer>
  );
};

export default Cart;
