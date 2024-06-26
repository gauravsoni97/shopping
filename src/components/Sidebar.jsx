import React from "react";
import RangeSlider from "./AllFilters/RangeSlider";
import StarRating from "./AllFilters/StarRating";
import HighLow from "./AllFilters/HighLow";

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
              <HighLow/>
            
            </div>
            <div className="ms-3 text-white">
              <p className="text-white">Price</p>
              <RangeSlider />
            </div>

            <div className="ms-3 text-white my-5">
              Star Rating
              <StarRating />
            </div>
           
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
