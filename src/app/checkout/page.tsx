"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import Image from "next/image";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";

const Checkout = () => {
  const router = useRouter();

  interface CartItem {
    name: string;
    price: number;
    quantity: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart items from local storage and calculate total price
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        const parsedCart: CartItem[] = JSON.parse(storedCart);

        // Ensure items have valid price and quantity
        const validCart = parsedCart.filter(item => item.price && item.quantity);

        setCartItems(validCart);

        // Calculate total price
        const total = validCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]);
        setTotalPrice(0);
      }
    }
  }, []);

  // Handle placing order
  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    localStorage.setItem("selectedPaymentMethod", paymentMethod);
    router.push("/thank-you");
  };

  return (
    <div>
      <NavBar bgColor="bg-white" />

      {/* 🔹 Background Section */}
      <div className="relative w-full bg-white">
        <div className="relative w-full h-[316px] top-[70px] opacity-50">
          <Image src="/sshhoop.png" alt="Background Image" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image src="/Meubel House_Logos-05.png" alt="Module Logo" width={77} height={77} />
        </div>
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-5xl font-medium text-black">
          Checkout
        </h1>
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex text-lg font-medium text-black">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span className="font-light">Checkout</span>
        </div>
      </div>

      {/* 🔹 Checkout Form & Order Summary */}
      <div className="container mx-auto p-4 mt-[90px]">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Billing Details */}
          <div className="w-full lg:w-2/3 border p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Billing Details</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="border p-2" />
              <input type="text" placeholder="Last Name" className="border p-2" />
              <input type="text" placeholder="Street Address" className="border p-2 md:col-span-2" />
              <input type="text" placeholder="Town/City" className="border p-2" />
              <input type="text" placeholder="ZIP Code" className="border p-2" />
              <input type="text" placeholder="Phone" className="border p-2" />
              <input type="email" placeholder="Email Address" className="border p-2 md:col-span-2" />
              <textarea placeholder="Additional Information (Optional)" className="border p-2 md:col-span-2"></textarea>
            </form>
          </div>

          {/* Order Summary & Payment */}
          <div className="w-full lg:w-1/3 border p-6 bg-gray-50 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b pb-2">
                    <p className="text-gray-700 font-medium">{item.name}</p>
                    <p className="text-gray-600">x {item.quantity}</p>
                    <p className="font-semibold">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Subtotal & Total Calculation */}
            <div className="mt-4 border-t pt-4 space-y-2">
              <div className="flex justify-between text-lg font-medium">
                <p>Subtotal:</p>
                <p>Rs. {totalPrice.toLocaleString()}</p>
              </div>
              <div className="flex justify-between text-lg font-bold text-yellow-600">
                <p>Total:</p>
                <p>Rs. {totalPrice.toLocaleString()}</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-6 space-y-4">
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="payment" className="mr-2" onChange={() => setPaymentMethod("Bank Transfer")} />
                Direct Bank Transfer
              </label>
              <p className="text-sm text-gray-500">
                Make your payment directly into our bank account. Your order will not be shipped until funds are cleared.
              </p>
              <label className="flex items-center cursor-pointer">
                <input type="radio" name="payment" className="mr-2" onChange={() => setPaymentMethod("Cash on Delivery")} />
                Cash on Delivery
              </label>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full py-3 mt-6 text-lg font-semibold text-black bg-[#FFEC47] hover:bg-[#FFD700] rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 border border-[#E6C200]"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
