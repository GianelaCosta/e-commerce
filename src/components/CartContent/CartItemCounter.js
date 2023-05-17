import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ product }) => {
  const { cart, setCart, addToCart } = useContext(dataContext);

  const decreaseQuantity = () => {
    const productInCart = cart.find((item) => item.id === product.id);

    productInCart.quantity !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quantity: productInCart.quantity - 1 }
            : item
        )
      );
  };

  return (
    <>
      <p className="counter-button" onClick={() => decreaseQuantity()}>
        -
      </p>
      <>{product.quantity}</>
      <p className="counter-button" onClick={() => addToCart(product)}>
        +
      </p>
    </>
  );
};

export default CartItemCounter;
