import { useEffect, useState } from "react";
import type { Category } from "../../types/category-type";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { getDocs } from "firebase/firestore";
import { categoryConverter } from "../../converters/firestore-converters";
import CategoriesOverview from "../categories-details/categories-details-page";

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

  console.log(categories);

  return (
    <>
      <CategoriesOverview />
    </>
  );
};

export default Explore;
