import { useNavigate } from "react-router-dom";
import type { Category } from "../../types/category-type";
import ProductItem from "../product-item/product-item-component";

import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer,
} from "./category-overview.styles";

interface CategoryOverviewProps {
  category: Category;
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
  const navigate = useNavigate();
  const handleCategoryDetails = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <CategoryContainer>
      <CategoryTitle onClick={handleCategoryDetails}>
        {category.displayName}
      </CategoryTitle>
      <ProductsContainer>
        {category?.products.slice(0, 4).map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  );
};

export default CategoryOverview;
