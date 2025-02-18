'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { NavBar } from '../Component/Navbar';
import Footer from '../Component/Footer';

const WishlistPage: React.FC = () => {
  const router = useRouter();

  // 🔹 Wishlist Products with State Management
  const initialWishlist = [
    {
      id: '1',
      name: 'Trenton Modular Sofa_3',
      image: '/Trenton modular sofa_3 1.png',
      price: 25000,
      description: 'A comfortable and stylish sofa perfect for any living room.',
    },
    {
      id: '2',
      name: 'Granite Dining Table with Dining Chair',
      image: '/Granite dining table with dining chair 1.png',
      price: 25000,
      description: 'Elegant dining table set for a modern home.',
    },
    {
      id: '3',
      name: 'Outdoor Bar Table and Stool',
      image: '/Outdoor bar table and stool 1.png',
      price: 25000,
      description: 'Perfect for outdoor gatherings and bar spaces.',
    },
  ];

  const [wishlistProducts, setWishlistProducts] = useState(initialWishlist);

  // 🔹 Handle Removal from Wishlist
  const handleRemove = (id: string) => {
    setWishlistProducts(wishlistProducts.filter(product => product.id !== id));
  };

  // 🔹 Handle Checkout Navigation
  const handleCheckout = () => {
    router.push('/checkout');
  };

  return (
    <>
      <NavBar bgColor="bg-white" />

      {/* 🔹 Background Section */}
      <div className="relative w-full bg-white">
        <div className="relative w-full h-[356px]">
          <Image src="/sshhoop.png" alt="Shop Background" layout="fill" objectFit="cover" className="opacity-50" priority />
        </div>
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex text-lg font-medium text-black">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span className="font-light">Wishlist</span>
        </div>
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image src="/Meubel House_Logos-05.png" alt="Module Logo" width={77} height={77} />
        </div>
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-5xl font-semibold text-black">
          Wishlist
        </h1>
      </div>

      {/* 🔹 Wishlist Section */}
      <section className="bg-[#F4F4F4] py-10 px-4 md:px-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">Your Wishlist</h2>
          <p className="text-lg text-[#8F8F8F]">Keep track of your favorite items!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistProducts.length > 0 ? (
            wishlistProducts.map((product) => (
              <div key={product.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-all duration-300">
                <div className="w-[280px] h-[280px] mb-4 flex justify-center items-center">
                  <Image src={product.image} alt={product.name} width={280} height={280} className="object-cover rounded-lg" />
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold text-black">{product.name}</h3>
                  <p className="text-sm text-[#7D7D7D]">{product.description}</p>
                  <p className="text-lg font-medium text-black mt-2">₹{product.price}</p>
                </div>
                <button onClick={() => handleRemove(product.id)} className="px-6 py-2 bg-red-600 text-white rounded-md w-full hover:bg-red-700 transition-all">
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-xl text-gray-500 w-full">
              Your wishlist is empty. Start adding your favorite items!
            </div>
          )}
        </div>

        {/* 🔹 Checkout Button */}
        {wishlistProducts.length > 0 && (
          <div className="flex justify-center mt-8">
            <button onClick={handleCheckout} className="px-10 py-3 bg-black text-white text-lg font-medium rounded-md hover:bg-gray-800 transition-all">
              Proceed to Checkout
            </button>
          </div>
        )}

        {/* 🔹 Back to Shop Button */}
        <div className="flex justify-center mt-4">
          <button onClick={() => router.push('/')} className="px-8 py-3 bg-[#FFEC47] text-black text-lg font-medium rounded-md hover:bg-[#FFD700] transition-all">
            Back to Shop
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WishlistPage;