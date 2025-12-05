import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { CartItem } from "../types/cart-item-type";
import type { Product } from "../types/product-type";

interface CartContextType {
  products: CartItem[];
  isVisible: boolean;
  itemsCartLength: number;
  amountPrice: number;
  handleVisibleIsCart: () => void;
  addProductToCart: (product: Product) => void;
  incrementProductFromCart: (productId: string) => void;
  decrementProductFromCart: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType>({
  products: [],
  itemsCartLength: 0,
  isVisible: false,
  amountPrice: 0,
  handleVisibleIsCart: () => {},
  addProductToCart: () => {},
  incrementProductFromCart: () => {},
  decrementProductFromCart: () => {},
  removeProductFromCart: () => {},
});

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [products, setProducts] = useState<CartItem[]>(() => {
    const productsCart =
      (JSON.parse(localStorage.getItem("productCart")!) as CartItem[]) || [];
    return productsCart;
  });

  const [isVisible, setIsVisible] = useState(false);
  const itemsCartLength = products.length;
  const amountPrice = products.reduce((acc, value) => {
    return acc + value.price * value.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem("productCart", JSON.stringify(products));
  }, [products]);

  const addProductToCart = (item: Product) => {
    const productExitsInCart = products.some(
      (product) => product.id === item.id
    );

    if (productExitsInCart) {
      setProducts((prevProducts) => {
        return prevProducts.map((product) => {
          return { ...product, quantity: product.quantity + 1 };
        });
      });

      return;
    }

    setProducts([...products, { ...item, quantity: 1 }]);
  };

  const handleVisibleIsCart = () => {
    setIsVisible(!isVisible);
  };

  const incrementProductFromCart = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity + 1 };
        }

        return product;
      });
    });
  };

  const decrementProductFromCart = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts
        .map((product) => {
          if (product.id === productId) {
            return { ...product, quantity: product.quantity - 1 };
          }

          return product;
        })
        .filter((product) => product.quantity > 0);
    });
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prevProducts) => {
      return prevProducts.filter((product) => product.id !== productId);
    });
  };

  return (
    <CartContext.Provider
      value={{
        itemsCartLength,
        isVisible,
        products,
        amountPrice,
        handleVisibleIsCart,
        addProductToCart,
        incrementProductFromCart,
        decrementProductFromCart,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
