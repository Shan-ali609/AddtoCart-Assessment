"use client";
import { Createcontext } from "@/context/contextprovider";
import Image from "next/image";
import React, { useContext, useState } from "react";

const Page = () => {
  const { cart, dispatch } = useContext(Createcontext);
  const [shippingMethod, setShippingMethod] = useState("");

  // Function to remove item from cart
  const handleRemove = (id: number) => {
    dispatch({ type: "Remove", payload: id });
  };

  // Function to increase quantity
  const handleIncrease = (id: number) => {
    dispatch({ type: "Increase", payload: id });
  };

  // Function to decrease quantity
  const handleDecrease = (id: number) => {
    dispatch({ type: "Decrease", payload: id });
  };

  const calculateTotalPrice = () => {
    let totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    if (shippingMethod === "KSA Drop") {
        totalAmount *= 1.05; // Apply 5% tax
    } else if (shippingMethod === "TCS") {
        totalAmount *= 1.10; // Apply 10% tax
    }

    return totalAmount.toFixed(2);
};

    
  return (
    <div className="container mx-auto px-4 pt-20 pb-7">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Cart Items */}
        <div className="lg:col-span-2 overflow-x-auto">
          <table className="w-full border-collapse border">
            <thead>
              <tr className="border-b bg-gray-100 text-left text-sm sm:text-base">
                <th className="p-4">Product</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Price</th>
                <th className="p-4">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((product, index) => (
                  <tr key={index} className="border-b text-sm sm:text-base">
                    <td className="p-4">
                      <div className="flex items-center space-x-4">
                        <Image src={product.image} alt={product.name} height={50} width={50} className="rounded-md" />
                        <div>
                          <p className="font-semibold">{product.name}</p>
                          <button
                            onClick={() => handleRemove(product.id)}
                            className="text-white text-xs bg-red-500 rounded-lg cursor-pointer px-3 py-1 mt-2 hover:bg-red-600 transition"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 pl-8">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrease(product.id)}
                          className="p-2 bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
                        >
                          -
                        </button>
                        <span className="px-4">{product.quantity}</span>
                        <button
                          onClick={() => handleIncrease(product.id)}
                          className="p-2 bg-gray-200 cursor-pointer rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 transition"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4">${product.price.toFixed(2)}</td>
                    <td className="p-4">${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-600">
                    Cart is empty 😞
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Cart Summary */}
        <div className="border rounded-md p-6 shadow-md w-full">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <div className="border-t mt-4 pt-4 text-sm">
            <p className="flex justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold">${calculateTotalPrice()}</span>
            </p>

            <div className="mt-5">
    <h3 className="text-lg font-semibold">Choose Shipping Method:</h3>
    
            <div className="flex gap-5 mt-2">
                {/* KSA Drop (5% Tax) */}
                <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="shippingMethod" 
                        value="KSA Drop"
                        checked={shippingMethod === "KSA Drop"}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="w-5 cursor-pointer h-5"
                    />
                    KSA Drop (+5% Tax)
                </label>

                {/* TCS (10% Tax) */}
                <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                        type="radio" 
                        name="shippingMethod" 
                        value="TCS"
                        checked={shippingMethod === "TCS"}
                        onChange={(e) => setShippingMethod(e.target.value)}
                        className="w-5 cursor-pointer h-5"
                    />
                    TCS (+10% Tax)
                </label>
            </div>
        </div>



            <p className="flex justify-between text-lg mt-3 font-bold">
              <span>Total:</span>
              <span>${calculateTotalPrice()}</span>
            </p>
          </div>

          <button className="w-full bg-black text-white py-3 cursor-pointer mt-4 rounded-md hover:bg-gray-900 transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
