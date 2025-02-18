"use client";
import React from "react";
import { NavBar } from "../Component/Navbar";
import Image from "next/image";
import Footer from "../Component/Footer";

export default function Account() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FFFFFF]">
      {/* NavBar */}
      <NavBar bgColor="bg-[#FFFFFF]" />

      {/* Background Section */}
      <div className="relative w-full bg-[#FFFFFF]">
        {/* Rectangle Image Background */}
        <div className="relative w-full h-[316px] top-[70px] opacity-50">
          <Image
            src="/sshhoop.png"
            alt="Background"
            fill={true}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Module Image */}
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/Meubel House_Logos-05.png"
            alt="Module Image"
            width={77}
            height={77}
            priority
          />
        </div>

        {/* Page Title */}
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-medium text-center text-black">
          My Account
        </h1>

        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex text-lg font-medium text-black">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span className="font-light">Account</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-[90%] lg:w-[80%] mt-16 lg:mt-36 gap-10">
        {/* Log In Box */}
        <div className="w-full lg:w-[608px] bg-white border border-[#9F9F9F] rounded-lg p-6 shadow-md">
          <h1 className="text-xl md:text-2xl font-semibold mb-6">Log In</h1>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Username or email address
            </label>
            <input
              type="text"
              className="w-full h-12 md:h-14 border border-[#9F9F9F] rounded-lg px-4 text-sm focus:outline-none focus:border-black"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full h-12 md:h-14 border border-[#9F9F9F] rounded-lg px-4 text-sm focus:outline-none focus:border-black"
            />
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          <button className="w-full h-12 md:h-14 bg-gray-200 text-black text-sm rounded-lg hover:bg-yellow-600 transition duration-300">
            Log In
          </button>
          <p className="text-sm text-center mt-4">Lost Your Password?</p>
        </div>

        {/* Register Box */}
        <div className="w-full lg:w-[608px] bg-white border border-[#9F9F9F] rounded-lg p-6 shadow-md">
          <h1 className="text-xl md:text-2xl font-semibold mb-6">Register</h1>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Email address
            </label>
            <input
              type="text"
              className="w-full h-12 md:h-14 border border-[#9F9F9F] rounded-lg px-4 text-sm focus:outline-none focus:border-black"
            />
          </div>
          <p className="text-sm text-justify mb-6">
            A link to set a new password will be sent to your email address.
          </p>
          <p className="text-sm text-justify mb-6">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button className="w-full h-12 md:h-14 bg-gray-200 text-black text-sm rounded-lg mt-6 hover:bg-yellow-600 transition duration-300">
            Register
          </button>
        </div>
      </div>

      {/* Payment Component */}
      <div className="w-full mt-16 lg:mt-20">
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}