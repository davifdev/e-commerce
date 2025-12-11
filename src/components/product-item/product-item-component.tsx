import { useDispatch } from "react-redux";
import type { Product } from "../../types/product-type";
import Button from "../button/button-component";
import { IconContainer } from "../button/button.styles";
import {
  ProductContainer,
  ProductImage,
  ProductInfo,
} from "./product-item.styles";
import { MdAddShoppingCart } from "react-icons/md";
import { addProductFromCart } from "../../store/reducers/cart/cart.actions";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const dispatch = useDispatch();

  return (
    <ProductContainer>
      <ProductImage $imageUrl={product.imageUrl}>
        <Button onClick={() => dispatch(addProductFromCart(product))}>
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
