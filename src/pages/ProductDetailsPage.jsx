import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductListContext";

const ProductDetailsPage = () => {
  const { products } = useProductsContext();
  let { id: productId } = useParams();

  const res = products.find((ele) => ele.id === productId);

  console.log("response", products.find((ele) => ele.id));

  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
