import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Category } from "../types/category-type";
import { db } from "../firebase/firebase.config";
import { categoryConverter } from "../converters/firestore-converters";
import { collection, getDocs } from "firebase/firestore";

interface CategoriesContextType {
  categories: Category[];
  isLoading: boolean;
}

const CategoriesContext = createContext<CategoriesContextType>({
  categories: [],
  isLoading: false,
});

interface categoriesContextProviderProps {
  children: ReactNode;
}

export const CategoriesContextProvider = ({
  children,
}: categoriesContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, isLoading }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  return useContext(CategoriesContext);
};
