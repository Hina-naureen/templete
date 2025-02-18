"use client";
import Image from "next/image";
import React from "react";

const SideTableSection: React.FC = () => {
  return (
    <section className="bg-[#FAF4F4] py-16 px-4 md:px-16">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="relative w-full max-w-[500px] h-auto">
            <Image
              src="/Table.png"
              alt="Side Table"
              width={500}
              height={450}
              className="object-contain w-full h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-4">Side Table</h2>
          <a
            href="#details"
            className="text-lg font-medium text-black mt-2 hover:underline transition"
          >
            View More
          </a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center text-center md:text-left">
          <div className="relative w-full max-w-[500px] h-auto">
            <Image
              src="/Cloud sofa three seater + ottoman_3 1.png"
              alt="Cloud Sofa"
              width={500}
              height={450}
              className="object-contain w-full h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mt-4">Cloud Sofa</h2>
          <a
            href="#details"
            className="text-lg font-medium text-black mt-2 hover:underline transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SideTableSection;
