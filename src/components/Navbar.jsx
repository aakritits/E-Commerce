import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import PRODUCTS from "../products";

function Navbar() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      filterProducts(query);
    }
  };

  const filterProducts = (query) => {
    const filtered = PRODUCTS.filter((product) =>
      product.productName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex items-center justify-between bg-gray-900 py-4 px-4 md:px-20">
      <div className="flex items-center ">
        <Link to="/" className="text-white text-lg font-bold mr-8">
          Shop
        </Link>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for an item.."
            className=" rounded-lg px-4 py-0.5 min-w-full pr-2 "
            onChange={handleSearchChange}
          />
          <br />
          <div className="absolute mt-5 bg-white px-6 grid grid-cols-1 gap-6 border">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <h3>{product.productName}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/cart" className="text-white">
        <ShoppingCart size={32} />
      </Link>
    </div>
  );
}

export default Navbar;
