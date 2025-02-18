"use client";

import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

// ✅ Configure Sanity Client
const sanity = sanityClient({
  projectId: "3e8oq11y",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

// ✅ Product Interface
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags?: string[];
}

// ✅ Cart Item Interface (with Quantity)
interface CartItem extends Product {
  quantity: number;
}

// ✅ Main Component
const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  // ✅ Fetch Products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] {
          _id,
          name,
          price,
          description,
          discountPercentage,
          "imageUrl": image.asset->url
        }
      `;
      console.log("Fetching products from Sanity...");
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // ✅ Load Cart from Local Storage on Mount
  useEffect(() => {
    fetchProducts();

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save Cart to Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to Cart Functionality (with Local Storage)
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    alert(`${product.name} has been added to your cart`);
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">Products</h2>

      {/* ✅ Display Cart Count */}
      <div className="text-right mb-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-lg">
          Cart: {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </span>
      </div>

      {/* ✅ Products Grid */}
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
              {/* ✅ Product Image Handling */}
              {product.imageUrl ? (
                <Image
                  src={product.imageUrl.startsWith("http") ? product.imageUrl : `https:${product.imageUrl}`}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-md">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              {/* ✅ Product Details */}
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-slate-800">{product.name}</h2>
                <p className="text-slate-600 mt-2 text-sm">
                  {product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
                  )}
                </div>

                {/* ✅ Add to Cart Button */}
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCards;