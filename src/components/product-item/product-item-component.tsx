import type { Product } from "../../types/product-type";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./product-item.styles";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}></ProductImage>
      <ProductInfo>
        <p>{product.name}</p>
        <p>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(product.price)}
        </p>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductItem;
