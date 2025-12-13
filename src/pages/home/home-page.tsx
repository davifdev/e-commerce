/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch } from "react-redux";
import CategoryItem from "../../components/category-item/category-item-component";
import Loading from "../../components/loading/loading-component";
import { useAppSelector } from "../../hooks/redux.hooks";

import { CategoriesContainer, CategoriesContent } from "./home.styles";
import { useEffect } from "react";
import { fetchCategories } from "../../store/toolkit/categories/categories.slice";

const Home = () => {
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoriesReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CategoriesContainer>
      {isLoading && <Loading />}
      <CategoriesContent>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Home;
