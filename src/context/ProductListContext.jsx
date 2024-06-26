import React, { createContext, useContext, useEffect, useState } from "react";

// Create a new context
export const ProductsListCtx = createContext();

// Custom context provider component
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data = await response.json();
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const ctxValue = {
    products,
    setProducts,
    loading,
    error,
  };

  return (
    <ProductsListCtx.Provider value={ctxValue}>
      {children}
    </ProductsListCtx.Provider>
  );
};

export default ProductsProvider;

// Custom hook to access the context value
export const useProductsContext = () => {
  return useContext(ProductsListCtx);
};
