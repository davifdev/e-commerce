import CategoryItem from "../../components/category-item/category-item-component";
import { useCategories } from "../../contexts/categories";
import { CategoriesContainer, CategoriesContent } from "./home.styles";

const Home = () => {
  const { categories, isLoading } = useCategories();
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Home;
