import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const TotalItems = () => {
  const { cart } = useContext(dataContext);

  const totalItems = cart.reduce((acc, el) => acc + el.quantity, 0);
  return <span className="cart-items-total">{totalItems}</span>;
};

export default TotalItems;
