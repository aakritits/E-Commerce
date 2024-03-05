import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="w-full p-2 md:w-1/2 lg:w-1/2">
      <div className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full px-[-2]">
        <img className="w-full" src={productImage} alt={productName} />
        <div className="p-4 flex flex-col flex-grow">
          <p className="text-xl font-semibold">{productName}</p>
          <p className="text-gray-700 mt-3">Rs {price}</p>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => addToCart(id)}
            className="mt-3 px-3 py-1 border rounded-full border-black flex justify-center items-center hover:opacity-75"
          >
            Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
