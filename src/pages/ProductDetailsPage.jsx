import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductListContext";

const ProductDetailsPage = () => {
  const { products } = useProductsContext();

  const { id } = useParams();

  console.log("res", id);
  const [selectedProduct, setSetSelectedProduct] = useState([]);
  console.log("selectedProducts", selectedProduct);

  useEffect(() => {
    console.log("products", products, id);
    const res = products.find((ele) => ele.id - 1 === parseInt(id));

    setSetSelectedProduct(res);
  }, [products]);

  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
