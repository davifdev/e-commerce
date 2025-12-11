import { collection, getDocs } from "firebase/firestore";
import type { Category } from "../../../types/category-type";
import { db } from "../../../firebase/firebase.config";
import { categoryConverter } from "../../../converters/firestore-converters";
import type { Dispatch } from "redux";
import { CategoryActionTypes } from "./categories.action.type";

export const fetchCategories = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: CategoryActionTypes.FETCH_CATEGORIES_START });

    try {
      const allCategories: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc) => {
        allCategories.push(doc.data());
      });
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: allCategories,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
      });
    }
  };
};
