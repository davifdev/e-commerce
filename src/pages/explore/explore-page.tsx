import { useEffect, useState } from "react";
import { Container } from "./explore.styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { categoryConverter } from "../../converters/firestore-converters";
import type { Category } from "../../types/category-type";
import CategoryOverview from "../../components/category-overview/category-overview-component";

const Explore = () => {
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
    <Container>
      {categories.map((category) => (
        <CategoryOverview category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Explore;
