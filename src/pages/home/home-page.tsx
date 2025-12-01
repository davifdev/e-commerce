import CategoryItem from "../../components/category-item/category-item-component";
import { CategoriesContainer, CategoriesContent } from "./home.styles";

const Home = () => {
  return (
    <CategoriesContainer>
      <CategoriesContent>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Home;
