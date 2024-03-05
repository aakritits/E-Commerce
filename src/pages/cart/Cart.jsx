import React, { useContext } from "react";
import PRODUCTS from "../../products";
import { ShopContext } from "../../context/Shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-center mt-8 text-2xl">Your Cart Items</h1>
      <div className="grid grid-cols-1 gap-6 mt-4">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="mt-4 mb-6 font-bold ">
          Subtotal : Rs {totalAmount} <br />
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate("/")}
              className="bg-black text-white py-2 px-4 rounded-md mr-2"
            >
              Continue Shopping
            </button>
            <button className="bg-black text-white py-2 px-4 rounded-md ml-2">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        "Your Cart is Empty"
      )}
    </div>
  );
}

export default Cart;
