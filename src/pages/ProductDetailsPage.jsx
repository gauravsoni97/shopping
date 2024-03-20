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
            <span class="bg-yellow-100 text-yellow-800 text-xs font-bold me-2 px-2.5 py-2.5 rounded-full dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 w-[100px] flex items-center italic">
              {" "}
              <span className="text-md mr-2">
                {selectedProduct.discountPercentage} %{" "}
              </span>{" "}
              off
            </span>

            <br />

            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none">
                {selectedProduct.title}
              </h2>
              <p className="text-base text-gray-400 md:text-lg">
                {selectedProduct.description}
              </p>

              <div>
                <br />

                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {selectedProduct.rating}
                  </p>
                  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    out of
                  </p>
                  <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    5
                  </p>
                </div>

                <br />
              </div>
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
