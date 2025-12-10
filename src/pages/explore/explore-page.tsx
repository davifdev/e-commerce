import { Container } from "./explore.styles";

import CategoryOverview from "../../components/category-overview/category-overview-component";
import { useCategories } from "../../contexts/categories";
import Loading from "../../components/loading/loading-component";

const Explore = () => {
  const { categories, isLoading } = useCategories();

  return (
    <Container>
      {isLoading && <Loading />}
      {categories.map((category) => (
        <CategoryOverview category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Explore;
