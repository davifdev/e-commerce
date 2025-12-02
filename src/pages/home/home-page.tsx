import { useEffect, useState } from "react";
import CategoryItem from "../../components/category-item/category-item-component";
import { CategoriesContainer, CategoriesContent } from "./home.styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import type { Category } from "../../types/category-type";
import { categoryConverter } from "../../converters/firestore-converters";

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories: Category[] = [];
        const querySnapshot = await getDocs(
          collection(db, "categories").withConverter(categoryConverter)
        );

        querySnapshot.forEach((doc) => {
          allCategories.push(doc.data());
        });
        setCategories(allCategories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

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
