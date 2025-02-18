"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";

const ShoppingCart = () => {
  const router = useRouter();

  // 🛒 Product Type
  interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
  }

  // 🛒 Cart State
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // ✅ Add to Cart (Prevent Duplicate ID Issues)

  // ➕ Increase Quantity
  const increaseQuantity = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // ➖ Decrease Quantity
  const decreaseQuantity = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // ❌ Remove Item from Cart
  const removeItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prevCart) => {
          const updatedCart = prevCart.filter((item) => item.id !== id);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return updatedCart;
        });
        Swal.fire("Removed!", "Item has been removed from the cart.", "success");
      }
    });
  };

  // 🧾 Calculate Subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // 🛍️ Checkout
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="relative w-full h-screen bg-[#FFFFFF] flex justify-end">
      <div className="w-full sm:w-[417px] h-[746px] bg-white border border-[#D9D9D9] p-6 shadow-lg">
        <h2 className="text-black text-xl font-semibold mb-6">Shopping Cart</h2>

        {cart.length > 0 ? (
          cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center border-b border-[#D9D9D9] pb-4 mb-4"
            >
              <div className="bg-[#FBEBB5] rounded-lg w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <p className="text-black text-base font-medium">{product.name}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <button
                    onClick={() => decreaseQuantity(product.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{product.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(product.id)}
                    className="px-2 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cursor-pointer" onClick={() => removeItem(product.id)}>
                <Image src="/cross.png" alt="Remove" width={20} height={20} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        )}

        <div className="mb-4 mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-black text-lg">Subtotal</p>
            <p className="text-[#B88E2F] text-lg font-medium">Rs. {subtotal}</p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
  <button className="w-[47%] py-3 text-lg font-semibold text-black border border-black rounded-lg bg-gray-200 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
    View Cart
  </button>
  <button
    onClick={handleCheckout}
    className="w-[47%] py-3 text-lg font-semibold text-black border border-black rounded-lg bg-gray-200 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
  >
    Checkout
  </button>
</div>
      </div>

     
    </div>
  );
};

export default ShoppingCart;