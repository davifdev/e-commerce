import { combineReducers } from "redux";
import userReducer from "./toolkit/user/user.slice";
import { categoriesReducer } from "./reducers/categories/categories.reducer";
import { cartReducer } from "./reducers/cart/cart.reducer";

export const rootReducer = combineReducers({
  userReducer,
  categoriesReducer,
  cartReducer,
});
