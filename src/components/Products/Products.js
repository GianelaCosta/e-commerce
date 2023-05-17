import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));

    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then((response) => {
    //     // Handle the successful response
    //     setData(response.data.results);
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     // Handle the error
    //     console.error(error);
    //   });
  }, []);

  return (
    <div className="product-card-container">
      {data.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
