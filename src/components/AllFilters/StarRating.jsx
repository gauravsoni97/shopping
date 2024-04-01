import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useProductsContext } from "../../context/ProductListContext";

const StarRating = () => {
  const [value, setValue] = React.useState(2);

  const { products, setProducts } = useProductsContext();

  console.log(
    "products filtered",
    products.filter((ele) => Math.floor(ele.rating) <= value)
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const ProductInRange = products.filter(
      (ele) => Math.floor(ele.rating) <= value
    );
    setProducts(ProductInRange);
  };

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Rating name="simple-controlled" value={value} onChange={handleChange} />
    </Box>
  );
};

export default StarRating;
