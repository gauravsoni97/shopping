import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useProductsContext } from "../context/ProductListContext";

const Home = () => {
  const { products } = useProductsContext();

  return (
    <>
      <Sidebar />

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-4">
            {products.map((ele, id) => (
              <ProductCard ele={ele} key={id} id={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
