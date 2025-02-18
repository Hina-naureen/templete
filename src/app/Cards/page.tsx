"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const productsList = [

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
];
const ProductCard = ({
  product,
  onAddToCart,
}: {
  product: {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    label?: string;
  };
  onAddToCart: (product: { id: string; name: string; image: string; price: number; description: string; label?: string }) => void;
}) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-between">
      {product.label && (
        <span
          className={`absolute top-2 left-2 px-3 py-1 text-sm font-bold text-white rounded-lg ${
            product.label === "New" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {product.label}
        </span>
      )}

      <Link href={`/products/${product.name.replace(/\s+/g, "-").toLowerCase()}`} className="flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          width={250}
          height={250}
          className="rounded-md object-cover"
        />
      </Link>

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-xl font-bold text-black mt-2">
        Rs. {product.price.toLocaleString()}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          🛒 Add to Cart
        
      </button>
    </div>
  );
};

const ProductList = () => {
  type CartItem = {
    id: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  };

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (product: { id: string; name: string; image: string; price: number }) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    Swal.fire("Added to Cart", `${product.name} has been added., "success"`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Explore Our Collection
      </h1>

      <div className="flex justify-end space-x-6 mb-4 text-2xl">
        <Link href="/wishlist">
          <FaHeart className="text-red-500 cursor-pointer" />
        </Link>
        <Link href="/Cart">
          <FaShoppingCart className="text-gray-700 cursor-pointer" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;