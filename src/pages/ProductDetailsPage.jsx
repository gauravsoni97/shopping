import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/ProductListContext";

const ProductDetailsPage = () => {
  const { products } = useProductsContext();

  console.log("products ==", products);
  const { id } = useParams();

  const [selectedProduct, setSetSelectedProduct] = useState([]);
  console.log("selectedProducts", selectedProduct);

  useEffect(() => {
    const res = products.find((ele) => ele.id - 1 === parseInt(id));
    setSetSelectedProduct(res);
  }, []);

  return (
    <>
      <div className="mt-24 px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none">
                {selectedProduct.title}
              </h2>
              <p className="text-base text-gray-400 md:text-lg">
                {selectedProduct.description}
              </p>
            </div>
            <button
              type="button"
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Add to Cart
            </button>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="px-3 grid grid-cols-2 gap-2">
              {(selectedProduct.images || []).map((ele) => (
                <img
                  className="object-cover w-40 h-20 rounded shadow-lg sm:h-64 xl:h-40 sm:w-64 xl:w-40"
                  src={ele}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
