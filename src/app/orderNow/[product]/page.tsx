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
      <div className="w-full h-[100px] bg-[#FFFFFF] fixed top-9 left-0 z-10 flex justify-start px-[99px]">
        <div className="flex items-center text-gray-500">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span>Shop</span>
          <span className="mx-2">➤</span>
        </div>
        <div className="flex items-center">
          <div className="w-[37px] rotate-90 border-t-2 border-gray-500"></div>
          <div className="text-[16px] text-black ml-[9px]">Asgaard sofa</div>
        </div>
      </div>


      {/* Page Container */}
      <div className="relative top-[50px] w-[1440px] h-[820px] mx-auto bg-gray-50">
        {/* Left Side Small Images */}
        <div className="absolute w-[76px] h-[416px] top-[266px] left-[99px]">
          {[
            { id: 1, src: "/Outdoor sofa set 1.png" },
            { id: 2, src: "/Outdoor sofa set_3.png" },
            { id: 3, src: "/Stuart sofa 1.png" },
            { id: 4, src: "/Maya sofa three seater (1) 1.png" },
          ].map((img) => (
            <div key={img.id} className="w-[66px] h-[70px] mb-[15px] bg-[#FFF9E5] hover:shadow-lg cursor-pointer">
              <Image src={img.src} alt="Sofa" width={66} height={70} className="object-cover" />
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="absolute w-[1241px] h-auto top-[246px] left-[197px] flex gap-[20px]">
          {/* Large Image */}
          <div className="relative w-[553px] h-[500px]">
            <Image src="/Asgaard sofa 33.png" alt="Asgaard Sofa" width={391} height={391} className="object-contain" />
          </div>

          {/* Product Details */}
          <div className="relative w-[606px] h-auto">
            <h1 className="text-[42px] font-light text-black mb-[10px]">Asgaard Sofa</h1>
            <p className="text-[18px] text-gray-600 mb-[10px]">
              A luxurious and comfortable sofa, perfect for modern living spaces.
            </p>
            <p className="text-[24px] font-medium text-[#9F9F9F] mb-[10px]">Rs. 250,000.00</p>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block text-gray-700">Size:</label>
              <select
                className="border p-2 w-[100px] mt-1"
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
              <label className="block text-gray-700">Color:</label>
              <input
                type="color"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-[50px] h-[30px] border mt-1"
              />
            </div>

            {/* Quantity Selection */}
            <div className="mb-4">
              <label className="block text-gray-700">Quantity:</label>
              <input
                type="number"
                value={quantity}
                min="1"
                className="border p-2 w-[80px] mt-1"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>

            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🛒 Add to Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOrder;