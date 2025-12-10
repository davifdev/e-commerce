import { BiChevronLeft } from "react-icons/bi";
import {
  CategoryTitle,
  Container,
  IconContainer,
  ProductsContainer,
} from "./category-details.styles";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { getDocs } from "firebase/firestore";
import type { Category } from "../../types/category-type";
import { categoryConverter } from "../../converters/firestore-converters";
import ProductItem from "../../components/product-item/product-item-component";
import Loading from "../../components/loading/loading-component";

const CategoryDetails = () => {
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setIsLoading] = useState(false);
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true);
        const q = query(
          collection(db, "categories").withConverter(categoryConverter),
          where("id", "==", categoryId)
        );

        const querySnapshot = await getDocs(q);
        const category = querySnapshot.docs[0]?.data();
        setCategory(category);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <Container>
      {loading && <Loading />}
      {!loading && (
        <CategoryTitle onClick={() => navigate(-1)}>
          <IconContainer>
            <BiChevronLeft size={36} />
          </IconContainer>
          <p>Explorar {category?.displayName}</p>
        </CategoryTitle>
      )}
      <ProductsContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default CategoryDetails;
