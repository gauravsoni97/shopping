import React from "react";
import RangeSlider from "./AllFilters/RangeSlider";
import StarRating from "./AllFilters/StarRating";

const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <div className="ms-3 text-white mb-3">
              <p className="text-white my-3">Sort By</p>

              <div class="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  High to Low
                </label>
              </div>
              <div class="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Low to High{" "}
                </label>
              </div>
            </div>
            <div className="ms-3 text-white">
              <p className="text-white">Price</p>
              <RangeSlider />
            </div>

            <div className="ms-3 text-white my-5">
              Star Rating
              <StarRating />
            </div>
            <div className="ms-3 text-white">
              <div class="flex items-center">
                <input
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  In Stock
                </label>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
