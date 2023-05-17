import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./Products.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(dataContext);

  return (
    <div className="card" key={product.id}>
      <img src={product.img} alt="product" />
      <h3>{product.name}</h3>
      <h4>${product.price}</h4>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default Product;
