import { FiPlus, FiMinus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  RemoveButton,
} from "./cart-item-styles";
import type { CartItem } from "../../types/cart-item-type";
import { useDispatch } from "react-redux";
import {
  decrementProductFromCart,
  incrementProductFromCart,
  removeProductFromCart,
} from "../../store/toolkit/cart/cart.slice";

interface CartItemProps {
  product: CartItem;
}

const CartItemComponent = ({ product }: CartItemProps) => {
  const dispatch = useDispatch();

  return (
    <CartItemContainer>
      <CartItemImage $imageUrl={product.imageUrl} />
      <CartItemInfo>
        <p>{product.name}</p>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>

        <CartItemQuantity>
          <FiMinus
            onClick={() => dispatch(decrementProductFromCart(product.id))}
          />
          <p>{product.quantity}</p>
          <FiPlus
            onClick={() => dispatch(incrementProductFromCart(product.id))}
          />
        </CartItemQuantity>
      </CartItemInfo>
      <RemoveButton onClick={() => dispatch(removeProductFromCart(product.id))}>
        <IoMdClose size={24} />
      </RemoveButton>
    </CartItemContainer>
  );
};

export default CartItemComponent;
