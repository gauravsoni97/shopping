import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ ele, id }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div
        style={{ backgroundImage: `url(${ele.thumbnail})` }}
        className={`rounded-t-xl  h-[250px] w-100  bg-cover`}
      ></div>

      <div className="p-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate ...">
            {ele.title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 capitalize">
          In Stock: {ele.stock}
        </p>

        <div className="flex items-center	justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${ele.price}
          </span>

          <Link
            to={`/product/${ele.id - 1}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
