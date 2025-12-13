import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Category } from "../../../types/category-type";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase.config";
import { categoryConverter } from "../../../converters/firestore-converters";

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const allCategories: Category[] = [];
    const querySnapshot = await getDocs(
      collection(db, "categories").withConverter(categoryConverter)
    );

    querySnapshot.forEach((doc) => {
      allCategories.push(doc.data());
    });

    return allCategories;
  }
);
interface InitialStateType {
  categories: Category[];
  isLoading: boolean;
}

const initialState: InitialStateType = {
  categories: [],
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default categoriesSlice.reducer;
