'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { products } from '@/app/data/product';
import { NavBar } from '@/app/Component/Navbar';
import Image from 'next/image';
import { FaTrash } from 'react-icons/fa';

const ProductPage = () => {
  const params = useParams();
  const router = useRouter();
  const productName = params?.['product-name']; // Extract product name from URL

  // Hooks should always be at the top
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState<{ name: string; description: string; price: string; image: string; quantity: number; totalPrice: number; }[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Product lookup should be *after hooks*
  const product = products.find(
    (item) =>
      item.name.toLowerCase().replace(/\s+/g, '-') === (Array.isArray(productName) ? productName[0].toLowerCase() : productName?.toLowerCase())
  );

  // Ensure total price updates only when product is available
  useEffect(() => {
    if (product) {
      setTotalPrice(quantity * parseFloat(product.price.replace(/Rs\.\s|,/g, '')));
    }
  }, [quantity, product]);

  if (typeof productName !== 'string') {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins' }}>
          Invalid Product Name
        </h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins' }}>
          Product Not Found
        </h1>
      </div>
    );
  }

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleRemove = () => setQuantity(1);

  const handleAddToCart = () => {
    const newCart = [...cart];
    const existingProduct = newCart.find((item) => item.name === product.name);

    if (existingProduct) {
      existingProduct.quantity += quantity;
      existingProduct.totalPrice += totalPrice;
    } else {
      newCart.push({ ...product, quantity, totalPrice });
    }

    setCart(newCart);
    alert(`${product.name} added to cart!`);
    router.push("/Cart");
  };

  return (
    <div>
      <NavBar bgColor="bg-[#FFFFFF]" />

      {/* Container with padding to account for NavBar height */}
      <div className="container mx-auto py-8 px-4 pt-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain w-full rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
              quality={100}
              priority
            />
          </div>

          {/* Product Details Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-3xl font-semibold text-yellow-600">Rs. {totalPrice.toLocaleString()}</p>
            <div className="flex gap-1 items-center">
              {[...Array(4)].map((_, index) => (
                <span key={index} className="text-yellow-400">&#9733;</span>
              ))}
              <span className="text-gray-400">&#9734;</span>
              <p className="ml-2 text-sm text-gray-600">(5 Reviews)</p>
            </div>
            <p className="text-lg text-gray-700">{product.description}</p>

            <div className="flex gap-4">
              {/* Size Options */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Size:</h3>
                <div className="flex gap-2">
                  {["L", "XL", "XS"].map((size, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 border border-gray-300 rounded-lg hover:bg-gray-200 transition"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Color Options */}
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Color:</h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></div>
                  <div className="w-8 h-8 bg-black rounded-full cursor-pointer"></div>
                  <div className="w-8 h-8 bg-yellow-500 rounded-full cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Quantity Selector with Remove Icon */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button onClick={handleDecrease} className="px-4 py-2 text-gray-700 hover:bg-gray-200">-</button>
                <span className="px-4 py-2 text-gray-700">{quantity}</span>
                <button onClick={handleIncrease} className="px-4 py-2 text-gray-700 hover:bg-gray-200">+</button>
              </div>
              <button onClick={handleRemove} className="p-2 text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;