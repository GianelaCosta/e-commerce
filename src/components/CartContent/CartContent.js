import { useContext } from "react";
import "./CartContent.css";
import CartElement from "./CartElement";
import CartTotal from "./CartTotal";
import { dataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElement />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center"> Tu carrito esta vacio</h2>
      )}
    </>
  );
};

export default CartContent;
