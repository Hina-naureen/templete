'use client';
import React from 'react';
import Image from 'next/image';

const Vase = () => {
  return (
    <div className="relative w-full bg-[#FFFFFF]">
      {/* Rectangle Image Background */}
      <div className="relative w-full h-[316px] top-[100px] opacity-50">
        <Image
          src="/sshhoop.png" // Ensure the path is correct
          alt="Background"
          fill // Replaces layout="fill"
          style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
        />
      </div>

      {/* Module Image */}
      <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
        <Image
          src="/Meubel House_Logos-05.png" // Ensure the path is correct
          alt="Module Image"
          width={77}
          height={77}
        />
      </div>

      {/* Shop Text */}
      <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-5xl font-medium text-center text-black">
        Shop
      </h1>
      <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex text-lg font-medium text-black">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span className="font-light">Checkout</span>
        </div>
      
          
    </div>
  );
};

export default Vase;