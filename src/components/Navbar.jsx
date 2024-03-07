import React, { useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex sticky top-0 items-center justify-between bg-gray-900 py-4 px-4 md:px-20">
      <div className="flex items-center ">
        <Link to="/" className="text-white text-lg font-bold mr-8">
          Shop
        </Link>
      </div>
      <Link to="/cart" className="text-white">
        <ShoppingCart size={32} />
      </Link>
    </div>
  );
}

export default Navbar;
