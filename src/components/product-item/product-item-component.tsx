import { useCartContext } from "../../contexts/cart";
import type { Product } from "../../types/product-type";
import Button from "../button/button-component";
import { IconContainer } from "../button/button.styles";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./product-item.styles";
import { MdAddShoppingCart } from "react-icons/md";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { addProductToCart } = useCartContext();

  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}>
        <Button onClick={() => addProductToCart(product)}>
          <IconContainer>
            <MdAddShoppingCart size={18} />
          </IconContainer>
          Adicionar ao carrinho
        </Button>
      </ProductImage>
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
