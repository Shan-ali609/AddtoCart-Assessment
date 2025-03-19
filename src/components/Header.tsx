"use client";
import { Createcontext } from "@/context/contextprovider";
import Link from "next/link";
import { useState, useContext } from "react";
import { FiX, FiSearch, FiUser, FiMenu, FiShoppingBag } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Access cart from context
  const { cart } = useContext(Createcontext);

  // Calculate total cart items
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  console.log("Current cart:", cart);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
          <div className="text-2xl font-bold cursor-pointer ">
            3legant<span className="text-black">.</span>
          </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-600">
            <a href="/" className="font-semibold text-black">Home</a>
            <a href="#" className="hover:text-black">Shop</a>
            <a href="#" className="hover:text-black">Product</a>
            <a href="#" className="hover:text-black">Contact Us</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <FiSearch className="w-5 h-5 cursor-pointer" />
            <FiUser className="w-5 h-5 cursor-pointer" />
            <div className="relative">
              <Link href="/cart">
                <FiShoppingBag className="w-5 h-5 cursor-pointer" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4 text-center">
            <Link href="/" className="text-black">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Shop</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Product</Link>
            <Link href="#" className="text-gray-600 hover:text-black">Contact Us</Link>
            <div className="flex justify-center space-x-4 pt-4">
              <FiSearch className="w-5 h-5 cursor-pointer" />
              <FiUser className="w-5 h-5 cursor-pointer" />
              <div className="relative">
                <FiShoppingBag className="w-5 h-5 cursor-pointer" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
