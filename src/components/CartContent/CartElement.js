import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartItemCounter from "./CartItemCounter";

const CartElement = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (productToDelete) => {
    const updatedCart = cart.filter((el) => {
      return el !== productToDelete;
    });
    setCart(updatedCart);
  };

  return cart.map((product) => {
    return (
      <div className="cartContent" key={product.id}>
        <img src={product.img} alt="product" />
        <h3 className="name">{product.name}</h3>
        <CartItemCounter product={product} />
        <h4 className="price">${product.price * product.quantity}</h4>
        <h3
          className="cart-delete-button"
          onClick={() => deleteProduct(product)}
        >
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElement;
