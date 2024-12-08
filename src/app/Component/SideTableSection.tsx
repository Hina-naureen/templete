'use client';
import Image from 'next/image';
import React from 'react';

const SideTableSection: React.FC = () => {
  return (
    <section className="bg-[#FAF4F4] py-16 px-4 md:px-16">
      {/* Horizontal layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="relative max-w-full w-[90%] md:w-[605px] h-auto max-h-[562px]">
            <Image
              src="/Table.png"
              alt="Side Table"
              width={605}
              height={562}
              className="object-contain max-w-full max-h-full"
            />
          </div>
          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-center">Side Table</h2>
          <a
            href="#details"
            className="text-lg font-medium text-black mt-2 hover:underline transition"
          >
            View More 
          </a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          {/* Image */}
          <div className="relative max-w-full w-[90%] md:w-[605px] h-auto max-h-[562px]">
            <Image
              src="/Cloud sofa three seater + ottoman_3 1.png"
              alt="Cloud Sofa"
              width={605}
              height={562}
              className="object-contain max-w-full max-h-full"
            />
          </div>
          {/* Text */}
          <h2 className="text-3xl md:text-4xl font-bold mt-6 text-center">Cloud Sofa</h2>
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