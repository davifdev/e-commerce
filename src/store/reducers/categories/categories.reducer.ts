/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Category } from "../../../types/category-type";
import { CategoryActionTypes } from "./categories.action.type";

interface InitialStateType {
  categories: Category[];
  isLoading: boolean;
}

const initialState: InitialStateType = {
  categories: [],
  isLoading: false,
};

export const categoriesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
      return { ...state, isLoading: false, categories: action.payload };
    case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
