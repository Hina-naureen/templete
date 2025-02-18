"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const chairImages = [
  "/Rocket single seater 1.png",
  "/pinnkk-removebg-preview.png",
  "/chairr-removebg-preview.png",
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % chairImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FBEBB5] min-h-screen flex items-center px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 w-full items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug">
            Rocket single <br /> seater
          </h1>
          <p className="text-lg text-gray-600">
            Elegant and comfortable seating for your modern living room.
          </p>
          <a
            href="Cards"
            className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
          >
            Shop now
          </a>
        </motion.div>

        {/* Right content: Image with Auto-Slider Effect */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          className="flex justify-end items-center"
        >
          <Image
            src={chairImages[currentIndex]}
            width={500}
            height={500}
            alt="Rocket single seater, a modern and elegant furniture piece"
            className="w-full max-w-sm md:max-w-lg object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;