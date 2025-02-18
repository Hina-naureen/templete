"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const ThankYouPage = () => {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  useEffect(() => {
    const storedPaymentMethod = localStorage.getItem("selectedPaymentMethod");
    if (storedPaymentMethod) {
      setPaymentMethod(storedPaymentMethod);
      localStorage.removeItem("cart"); // Clear cart after order is placed
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 text-center">
      {/* ✅ Animated Checkmark */}
      <div className="relative mb-6">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
          <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* ✅ Thank You Message */}
      <h1 className="text-3xl font-bold text-gray-800">Thank You for Your Order!</h1>
      <p className="text-lg text-gray-600 mt-2">
        Your order has been successfully placed. We appreciate your trust in us.
      </p>

      {/* ✅ Order Confirmation Details */}
      {paymentMethod && (
        <div className="mt-4 p-4 bg-white border rounded-lg shadow-md w-full max-w-md">
          <p className="text-lg font-semibold text-gray-800">Order Details</p>
          <p className="text-gray-600 mt-1">Payment Method: <span className="font-medium text-black">{paymentMethod}</span></p>
          <p className="text-gray-600 mt-1">Estimated Delivery: <span className="font-medium text-black">3-5 Business Days</span></p>
        </div>
      )}

      {/* ✅ Continue Shopping Button */}
      <Link href="/shop">
        <button className="mt-6 px-6 py-3 bg-[#FFEC47] text-black font-semibold text-lg rounded-lg shadow-md hover:bg-[#FFD700] transition-all duration-300">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default ThankYouPage;
