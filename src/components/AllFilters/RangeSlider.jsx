import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useProductsContext } from "../../context/ProductListContext";

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = () => {
  const { products, setProducts } = useProductsContext();

  const [value, setValue] = useState([0, 2000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let ProductInRange = products.filter(
      (ele) => ele.price <= value[1] && ele.price > value[0]
    );
    setProducts(ProductInRange);
  };

  return (
    <Box sx={{ width: "90%" }}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={2000}
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default RangeSlider;
