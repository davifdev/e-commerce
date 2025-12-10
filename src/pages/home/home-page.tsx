import CategoryItem from "../../components/category-item/category-item-component";
import Loading from "../../components/loading/loading-component";
import { useCategories } from "../../contexts/categories";
import { CategoriesContainer, CategoriesContent } from "./home.styles";

const Home = () => {
  const { categories, isLoading } = useCategories();

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
