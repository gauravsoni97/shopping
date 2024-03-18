import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductListContext";

const ProductDetailsPage = () => {
  const { products } = useProductsContext();
  let { id } = useParams();

  const res = products.find((ele) => ele.id === id);

  console.log("response", res);

  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
