import { useNavigate } from "react-router-dom";
import type { Category } from "../../types/category-type";
import { CategoryItemContainer, CategoryName } from "./category.styles";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, displayName } = category;

  const navigate = useNavigate();

  const handleCategoryDetails = () => {
    navigate(`/category/${category.id}`);
  };

  return (
    <CategoryItemContainer $backgroundImage={imageUrl}>
      <CategoryName onClick={handleCategoryDetails}>
        {displayName}
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
