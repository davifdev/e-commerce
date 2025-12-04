import { Container } from "./explore.styles";

import CategoryOverview from "../../components/category-overview/category-overview-component";
import { useCategories } from "../../contexts/use-categories";

const Explore = () => {
  const { categories, isLoading } = useCategories();
  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Explore;
