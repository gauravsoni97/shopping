import React from "react";

const HighLow = () => {
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-radio-1"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          High to Low
        </label>
      </div>
      <div className="flex items-center">
        <input
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Low to High{" "}
        </label>
      </div>
    </>
  );
};

export default HighLow;
