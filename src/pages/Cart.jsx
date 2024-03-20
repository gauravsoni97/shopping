import React, { useState } from "react";

const Cart = () => {
  const [itemCounter, setItemCounter] = useState(1);

  const handleRemoveItem = () => {
    if (itemCounter > 0) {
      setItemCounter((prev) => prev - 1);
    } else {
      setItemCounter(0);
    }
  };
  const handleAddItem = () => {
    setItemCounter((prev) => prev + 1);
  };

  return (
    <center>
      <div class=" w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-24">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Cart Items
          </h5>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <li class="py-3 sm:py-4">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="w-8 h-8 rounded"
                    src="https://picsum.photos/200"
                    alt="Neil image"
                  />
                </div>
                <div class="min-w-0 ms-4">
                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    Neil Sims
                  </p>
                </div>
                <div class=" ml-auto min-w-0 ms-4 flex items-center gap-3">
                  <button
                    type="button"
                    class="py-1 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={handleRemoveItem}
                  >
                    -
                  </button>

                  <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                    x {itemCounter}
                  </p>

                  <button
                    type="button"
                    class="py-1 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={handleAddItem}
                  >
                    +
                  </button>
                </div>
                <div class="ml-auto inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  $ {320 * itemCounter}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </center>
  );
};

export default Cart;
