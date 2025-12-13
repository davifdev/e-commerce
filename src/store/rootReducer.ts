import { combineReducers } from "redux";
import userReducer from "./toolkit/user/user.slice";
import categoriesReducer from "./toolkit/categories/categories.slice";
import cartReducer from "./toolkit/cart/cart.slice";

export const rootReducer = combineReducers({
  userReducer,
  categoriesReducer,
  cartReducer,
});
