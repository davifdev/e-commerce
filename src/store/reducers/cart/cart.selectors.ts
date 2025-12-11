import type { RootState } from "../../store";

export const selectAmountPrice = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);
};

export const selectItemsCartLength = (state: RootState) => {
  return state.cartReducer.products.length;
};
