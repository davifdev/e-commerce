import type { Product } from "../../../types/product-type";
import { CartActionType } from "./cart.action.types";

type IncrementProductType = {
  type: typeof CartActionType.INCREMENT_PRODUCT_FROM_CART;
  payload: string;
};

export const incrementProductFromCart = (
  productId: string
): IncrementProductType => ({
  type: CartActionType.INCREMENT_PRODUCT_FROM_CART,
  payload: productId,
});

type DecrementProductType = {
  type: typeof CartActionType.DECREMENT_PRODUCT_FROM_CART;
  payload: string;
};

export const decrementProductFromCart = (
  productId: string
): DecrementProductType => ({
  type: CartActionType.DECREMENT_PRODUCT_FROM_CART,
  payload: productId,
});

type AddProductType = {
  type: typeof CartActionType.ADD_PRODUCT_FROM_CART;
  payload: Product;
};

export const addProductFromCart = (product: Product): AddProductType => ({
  type: CartActionType.ADD_PRODUCT_FROM_CART,
  payload: product,
});

type RemoveProductType = {
  type: typeof CartActionType.REMOVE_PRODUCT_FROM_CART;
  payload: string;
};

export const removeProductFromCart = (
  productId: string
): RemoveProductType => ({
  type: CartActionType.REMOVE_PRODUCT_FROM_CART,
  payload: productId,
});

type HandleVisibleType = {
  type: typeof CartActionType.HANDLE_VISIBLE_IS_CART;
};

export const handleVisible = (): HandleVisibleType => ({
  type: CartActionType.HANDLE_VISIBLE_IS_CART,
});

export type CartActions =
  | IncrementProductType
  | DecrementProductType
  | AddProductType
  | RemoveProductType
  | HandleVisibleType;
