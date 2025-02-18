"use client";

import { NavBar } from "@/app/Component/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductOrder = () => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("#816DFA");

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Asgaard Sofa",
      description: "A luxurious and comfortable sofa, perfect for modern living spaces.",
      price: "Rs. 250,000.00",
      image: "/Asgaard sofa 33.png",
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    localStorage.setItem("cart", JSON.stringify([product]));
    router.push("/ShoppingCart");
  };

  return (
    <div className="relative bg-gray-50 min-h-screen">
      <NavBar bgColor="bg-[#FFFFFF]" />

      {/* Breadcrumb */}
      <div className="w-full h-[80px] bg-[#FFFFFF] fixed top-0 left-0 z-10 flex items-center px-6 md:px-20 shadow-md">
        <div className="flex items-center text-gray-500 text-sm md:text-base">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span>Shop</span>
          <span className="mx-2">➤</span>
          <span className="text-black">Asgaard Sofa</span>
        </div>
      </div>

      {/* Page Container */}
      <div className="relative top-[100px] w-full max-w-[1440px] mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left Side Small Images */}
          <div className="flex md:flex-col gap-4">
            {[
              { id: 1, src: "/Outdoor sofa set 1.png" },
              { id: 2, src: "/Outdoor sofa set_3.png" },
              { id: 3, src: "/Stuart sofa 1.png" },
              { id: 4, src: "/Maya sofa three seater (1) 1.png" },
            ].map((img) => (
              <div key={img.id} className="w-16 h-16 md:w-20 md:h-20 bg-[#FFF9E5] hover:shadow-lg cursor-pointer flex items-center justify-center rounded-lg">
                <Image src={img.src} alt="Sofa" width={64} height={64} className="object-cover" />
              </div>
            ))}
          </div>

          {/* Right Side - Large Image & Details */}
          <div className="flex flex-col md:flex-row gap-10 items-center w-full">
            {/* Large Image */}
            <div className="w-full md:w-[50%] flex justify-center">
              <Image src="/Asgaard sofa 33.png" alt="Asgaard Sofa" width={400} height={400} className="w-full max-w-sm md:max-w-md object-contain" />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-[50%]">
              <h1 className="text-2xl md:text-4xl font-light text-black mb-4">Asgaard Sofa</h1>
              <p className="text-base md:text-lg text-gray-600 mb-3">
                A luxurious and comfortable sofa, perfect for modern living spaces.
              </p>
              <p className="text-xl font-medium text-[#9F9F9F] mb-4">Rs. 250,000.00</p>

              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Size:</label>
                <select
                  className="border p-2 w-full md:w-[120px] mt-1 rounded-lg"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                </select>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Color:</label>
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="w-[50px] h-[30px] border mt-1 rounded-md"
                />
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium">Quantity:</label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  className="border p-2 w-full md:w-[100px] mt-1 rounded-lg text-center"
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;
