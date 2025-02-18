"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<Product[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        if (Array.isArray(parsedCart)) {
          setCart(parsedCart);
          updateTotalPrice(parsedCart); // 🔹 Initialize total price
        } else {
          console.error("Invalid cart format in localStorage");
          localStorage.removeItem("cart");
        }
      }
    } catch (error) {
      console.error("Error parsing cart data:", error);
    }
  }, []);

  // 🔹 Function to Calculate Total Price Dynamically
  const updateTotalPrice = (updatedCart: Product[]) => {
    const total = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  // 🔹 Update Quantity
  const updateQuantity = (id: string, amount: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  // 🔹 Remove Item from Cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateTotalPrice(updatedCart);
  };

  // 🔹 Handle Checkout
  const handleCheckout = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    localStorage.setItem("paymentMethod", paymentMethod);
    router.push("/checkout");
  };

  return (
    <>
      <NavBar bgColor="bg-white" />

      {/* 🔹 Background Image */}
      <div className="relative w-full bg-white">
        <div className="relative w-full h-[356px]">
          <Image src="/sshhoop.png" alt="Shop Background" layout="fill" objectFit="cover" className="opacity-50" priority />
        </div>
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex text-lg font-medium text-black">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span className="font-light">Checkout</span>
        </div>
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image src="/Meubel House_Logos-05.png" alt="Module Logo" width={77} height={77} />
        </div>
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-5xl font-semibold text-black">
          Cart
        </h1>
      </div>

      {/* 🔹 Cart Layout */}
      <div className="relative flex flex-col md:flex-row mt-[100px] mx-auto w-[85%] lg:w-[1440px] gap-8">
        
        {/* 🛒 Cart Items Section */}
        <div className="bg-[#FFF9E5] w-full md:w-[65%] border border-[#9F9F9F] rounded-md p-6 shadow-lg">
          
          {/* 🔹 Table Headers */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center text-black font-semibold text-lg border-b pb-2 mb-4">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span>Action</span>
          </div>

          {cart.length === 0 ? (
            <p className="text-center text-gray-600 mt-4">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-5 items-center text-center border-b border-gray-300 pb-4 last:border-0"
                >
                  {/* Product Image & Name */}
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-md" />
                    <span className="text-black font-medium text-sm sm:text-base">{item.name}</span>
                  </div>

                  {/* Price */}
                  <span className="text-black font-medium text-sm sm:text-base md:col-span-1">{`Rs. ${item.price.toLocaleString()}`}</span>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center gap-3 col-span-2 md:col-span-1">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 flex items-center justify-center bg-white border border-[#9F9F9F] rounded-md hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="text-black font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 flex items-center justify-center bg-white border border-[#9F9F9F] rounded-md hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Subtotal */}
                  <span className="text-black font-medium text-sm sm:text-base md:col-span-1">
                    {`Rs. ${(item.price * item.quantity).toLocaleString()}`}
                  </span>

                  {/* Remove Button */}
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline text-sm sm:text-base">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 🏷️ Cart Totals Section */}
        <div className="bg-[#FFF9E5] w-full md:w-[30%] h-auto rounded-md p-6 shadow-lg">
          <h3 className="text-lg font-bold text-black mb-4 border-b border-gray-300 pb-2">Cart Totals</h3>

          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-black font-medium">Rs. {totalPrice.toLocaleString()}</span>
          </div>

          <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-3">
            <span className="text-gray-600">Total</span>
            <span className="text-black font-medium text-lg">Rs. {totalPrice.toLocaleString()}</span>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-4">
            <label className="text-black font-bold">Select Payment Method:</label>
            <select
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-400 rounded focus:ring focus:ring-yellow-400"
            >
              <option value="">Choose...</option>
              <option value="Stripe">Stripe</option>
              <option value="PayPal">PayPal</option>
              <option value="JazzCash">JazzCash</option>
              <option value="Easypaisa">Easypaisa</option>
            </select>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="w-full bg-[#FFEC47] hover:bg-yellow-600 text-black py-3 rounded-lg font-medium shadow-md transition"
          >
            Proceed to Payment
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
