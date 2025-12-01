import { FiPlus, FiMinus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./cart-item-styles";

const CartItem = () => {
  return (
    <CartItemContainer>
      <CartItemImage imageUrl="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <CartItemInfo>
        <p>Chapéu Pôr do Sol</p>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(200)}
        </p>
        <CartItemQuantity>
          <FiMinus />
          <p>1</p>
          <FiPlus />
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton>
        <IoMdClose size={24} />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItem;
