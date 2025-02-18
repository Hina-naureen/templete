'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ✅ Product Component
const Product: React.FC<{ name: string; image: string; price: number; description: string; label?: string }> = ({ name, image, price, description, label }) => {
  return (
    <motion.div
      className="border-[#D9D9D9] p-4 flex flex-col items-center rounded-[10px] transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 🖼 Product Image */}
      <div className="w-[287px] h-[287px] mb-4 flex justify-center items-center relative">
        <Image src={image} alt={name} width={287} height={287} className="object-cover rounded-[10px]" />
        
        {/* 📌 Product Label */}
        {label && (
          <span className={`absolute top-0 right-0 py-1 px-3 text-white text-xs font-bold rounded-bl-lg ${label === 'New' ? 'bg-green-500' : 'bg-gray-500'}`}>
            {label}
          </span>
        )}
      </div>

      {/* 📌 Product Name & Description */}
      <div className="text-center">
        <h3 className="text-lg font-medium text-black mb-1" style={{ fontFamily: 'Poppins' }}>
          {name}
        </h3>
        <p className="text-base text-[#000000]" style={{ fontFamily: 'Poppins' }}>
          {description}
        </p>
      </div>

      {/* 💰 Product Price */}
      <div className="text-center mt-2">
        <p className="text-xl font-medium text-black" style={{ fontFamily: 'Poppins' }}>
          ₹{price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

// ✅ NewComponent (Product Listing)
const NewComponent: React.FC = () => {
  const router = useRouter();

  // ✅ Dummy Products List
  const products = [
    {
        id: "1",
        name: "Trenton Modular Sofa_3",
        image: "/Trenton modular sofa_3 1.png",
        price: 25000,
        description: "A comfortable and stylish sofa perfect for any living room.",
        label: "New",
      },
      {
        id: "2",
        name: "Granite Dining Table with Dining Chair",
        image: "/Granite dining table with dining chair 1.png",
        price: 25000,
        description: "Elegant dining table set for a modern home.",
      },
      {
        id: "3",
        name: "Outdoor Bar Table and Stool",
        image: "/Outdoor bar table and stool 1.png",
        price: 25000,
        description: "Perfect for outdoor gatherings and bar spaces.",
      },
      {
        id: "4",
        name: "Plain Console with Teak Mirror",
        image: "/Plain console with teak mirror 1.png",
        price: 25000,
        description: "Stylish console with a teak mirror for modern homes.",
        label: "Sold Out",
      },
      {
        id: "5",
        name: "Grain Coffee Table",
        image: "/Grain coffee table 1.png",
        price: 35000,
        description: "A premium wooden coffee table with a classic design.",
      },
      {
        id: "6",
        name: "Kent Coffee Table",
        image: "/Kent coffee table 1.png",
        price: 225000,
        description: "A luxury coffee table with modern aesthetics.",
      },
      {
        id: "7",
        name: "Round Coffee Table - Color 9",
        image: "/Round coffee table_color 2 1.png",
        price: 251000,
        description: "A sleek and stylish round coffee table for any home.",
      },
      {
        id: "8",
        name: "Reclaimed Teak Coffee Table",
        image: "/Reclaimed teak coffee table 1.png",
        price: 25200,
        description: "Eco-friendly reclaimed teak wood coffee table.",
      },
      {
        id: "9",
        name: "Plain Console",
        image: "/Plain console_ 1.png",
        price: 258200,
        description: "A minimalist console table for modern interiors.",
      },
      {
        id: "10",
        name: "Reclaimed Teak Sideboard",
        image: "/Reclaimed teak Sideboard 1.png",
        price: 20000,
        description: "Vintage-style teak wood sideboard for storage.",
      },
      {
        id: "11",
        name: "SJP-0025",
        image: "/SJP_0825  1.png",
        price: 200000,
        description: "A high-end designer furniture piece.",
      },
      {
        id: "12",
        name: "Balka Chair and Table",
        image: "/Bella chair and table 1.png",
        price: 100000,
        description: "A cozy chair and table set for a relaxed seating experience.",
        label: "Sold Out",
      },
      {
        id: "13",
        name: "Granite Square Side Table",
        image: "/Granite square side table 2.png",
        price: 258800,
        description: "A sturdy granite top side table.",
      },
      {
        id: "14",
        name: "Asgaard Sofa",
        image: "/Asgaard sofa 1.png",
        price: 250000,
        description: "A luxurious and comfortable Asgaard sofa.",
      },
      {
        id: "15",
        name: "Maya Sofa Three Seater",
        image: "/Maya sofa three seater 1.png",
        price: 115000,
        description: "Spacious and elegant three-seater sofa.",
      },
      {
        id: "16",
        name: "Outdoor Sofa Set",
        image: "/Outdoor sofa set 1.png",
        price: 244000,
        description: "Perfect outdoor seating set for your patio.",
      },
    ]

  // ✅ State for Showing More Products
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <section className="bg-white py-8 px-4 md:px-16">
      {/* 🔝 Cart & Wishlist Icons */}
      <div className="flex justify-end mb-4">
        <button onClick={() => router.push('/wishlist')} className="p-3 bg-gray-200 rounded-full mx-2 transition-all hover:bg-gray-300">
          ❤️
        </button>
        <button onClick={() => router.push('/Shop')} className="p-3 bg-gray-200 rounded-full transition-all hover:bg-gray-300">
          🛒
        </button>
      </div>

      {/* 📌 Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-black mb-4" style={{ fontFamily: 'Poppins' }}>
          Explore Our Products
        </h2>
        <p className="text-lg text-[#9F9F9F]" style={{ fontFamily: 'Poppins' }}>
          Discover our top selections with premium quality and design.
        </p>
      </div>

      {/* 🛍 Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        {products.slice(0, visibleProducts).map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>

      {/* 🔽 Load More Button */}
      {visibleProducts < products.length && (
        <div className="text-center mt-10">
          <motion.button
            onClick={handleLoadMore}
            className="px-8 py-3 bg-black text-white text-lg font-medium rounded-md transition-all hover:bg-gray-800"
            style={{ fontFamily: 'Poppins' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default NewComponent;
