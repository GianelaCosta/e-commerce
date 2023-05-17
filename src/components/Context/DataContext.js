import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: productInCart.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <dataContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
