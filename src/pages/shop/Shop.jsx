import React, { useState } from "react";
import PRODUCTS from "../../products";
import Product from "./Product";

const Shop = () => {
  const [filteredproducts, setFilteredProducts] = useState([]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search an item.."
        value={filteredproducts}
        onChange={(e) => setFilteredProducts(e.target.value)}
        className="sticky top-12 bg-white ml-20 mt-3 border text-black font-medium rounded-full text-center px-2 py-1"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-20 mt-10">
        {PRODUCTS.filter((product) => {
          return product.productName.toLowerCase().includes(filteredproducts);
        }).map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
