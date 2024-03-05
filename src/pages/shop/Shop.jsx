import React from "react";
import PRODUCTS from "../../products";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-20">
      {PRODUCTS.map((product) => (
        <Product data={product} key={product.id} />
      ))}
    </div>
  );
};
export default Shop;
