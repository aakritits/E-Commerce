import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  const numberOfItems = cartItems[id];
  return (
    <div>
      <div className="flex items-center mb-4">
        <div className="rounded-lg overflow-hidden shadow-lg w-40 ">
          <img className="w-full" src={productImage} alt={productName} />
        </div>
        <div className="ml-3">
          <p className="text-xl font-semibold">{productName}</p>
          <p className="text-gray-700">Rs {price}</p>
          <div className="">
            <button onClick={() => addToCart(id)}>+</button>
            <input
              className="text-center"
              size={1}
              value={numberOfItems}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => removeFromCart(id)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
