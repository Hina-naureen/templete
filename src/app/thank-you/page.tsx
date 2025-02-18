"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";

const ThankYou = () => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const method = localStorage.getItem("selectedPaymentMethod");
    setPaymentMethod(method);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9C4]">
      <NavBar bgColor="bg-white" />

      {/* Thank You Section */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-6">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full mx-auto border border-gray-200 animate-fade-in">
          
          {/* Smaller & Lower Frame */}
          <div className=" w-28 h-28 mx-auto bg-gray-100 rounded-full flex items-center justify-center shadow-md border border-gray-300 overflow-hidden mt-3">
            <Image
              src="/tHANK_YOU-removebg-preview.png"
              alt="Thank You"
              width={100}
              height={100}
              className="animate-float object-contain"
            />
          </div>

          {/* Thank You Text */}
          <h1 className="text-2xl md:text-3xl font-bold mt-4 text-black animate-fade-in-up">
            Thank You for Your Order!
          </h1>
          <p className="text-md mt-1 text-gray-700 animate-fade-in-up delay-200">
            We truly appreciate your support.
          </p>

          {paymentMethod && (
            <p className="text-md font-medium mt-2 text-black animate-fade-in-up delay-300">
              Payment Method: <span className="font-semibold">{paymentMethod}</span>
            </p>
          )}

          {/* Animated Button */}
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-5 py-2 bg-black text-white font-medium rounded-md shadow-md hover:bg-gray-900 transition duration-300 animate-glow"
          >
            Continue Shopping
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;