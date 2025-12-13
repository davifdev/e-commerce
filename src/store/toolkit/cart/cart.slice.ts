import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { CartItem } from "../../../types/cart-item-type";
import type { Product } from "../../../types/product-type";
interface InitialStateType {
  products: CartItem[];
  isVisible: boolean;
}

const initialState: InitialStateType = {
  products: [],
  isVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const productExitsInCart = state.products.some(
        (item) => item.id === product.id
      );
      if (productExitsInCart) {
        state.products = state.products.map((item) => {
          return { ...item, quantity: item.quantity + 1 };
        });

        return;
      }

      state.products = [...state.products, { ...product, quantity: 1 }];
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
    },
    decrementProductFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }

          return item;
        })
        .filter((item) => item.quantity > 0);
    },
    cartToggle: (state) => {
      state.isVisible = !state.isVisible;
    },
    clearAllProducts: (state) => {
      state.products = [];
    },
  },
});

export const {
  addProductFromCart,
  cartToggle,
  decrementProductFromCart,
  incrementProductFromCart,
  removeProductFromCart,
  clearAllProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
