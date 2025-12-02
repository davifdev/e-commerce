import type { Category } from "../../types/category-type";
import { CategoryItemContainer, CategoryName } from "./category.styles";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { imageUrl, displayName } = category;

  return (
    <CategoryItemContainer backgroundImage={imageUrl}>
      <CategoryName>
        {displayName}
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
