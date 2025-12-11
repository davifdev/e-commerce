import type { CartItem } from "../../../types/cart-item-type";
import { CartActionType } from "./cart.action.types";
import type { CartActions } from "./cart.actions";

interface InitialStateType {
  products: CartItem[];
  isVisible: boolean;
}

const initialState: InitialStateType = {
  products: [],
  isVisible: false,
};

export const cartReducer = (
  state = initialState,
  action: CartActions
): InitialStateType => {
  switch (action.type) {
    case CartActionType.ADD_PRODUCT_FROM_CART: {
      const product = action.payload;
      const productExitsInCart = state.products.some(
        (item) => item.id === product.id
      );
      if (productExitsInCart) {
        return {
          ...state,
          products: state.products.map((product) => {
            return { ...product, quantity: product.quantity + 1 };
          }),
        };
      }

      return {
        ...state,
        products: [...state.products, { ...product, quantity: 1 }],
      };
    }
    case CartActionType.REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    }
    case CartActionType.INCREMENT_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return { ...product, quantity: product.quantity + 1 };
          }

          return product;
        }),
      };
    }
    case CartActionType.DECREMENT_PRODUCT_FROM_CART: {
      return {
        ...state,
        products: state.products
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity - 1 };
            }

            return item;
          })
          .filter((item) => item.quantity > 0),
      };
    }
    case CartActionType.HANDLE_VISIBLE_IS_CART: {
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    }

    default:
      return state;
  }
};
