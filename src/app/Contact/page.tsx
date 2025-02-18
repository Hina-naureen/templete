"use client";

import React, { useState, useEffect } from "react";
import { NavBar } from "../Component/Navbar";
import Footer from "../Component/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Success message state
  const [successMessage, setSuccessMessage] = useState("");

  // Time state
  const [time, setTime] = useState("");

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    
    console.log("Form Submitted:", formData);
    
    // Set success message
    setSuccessMessage("Your message has been sent successfully!");
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Clear success message after 5 seconds
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <>
      {/* Navbar */}
      <NavBar bgColor="bg-white" />

      {/* Header Section */}
      <div className="relative w-full bg-[#FFFFFF]">
        <div className="relative w-full h-[316px] top-[70px] opacity-50">
          <Image src="/sshhoop.png" alt="Background" fill={true} style={{ objectFit: "cover" }} priority />
        </div>
        <div className="absolute top-[161px] left-1/2 transform -translate-x-1/2">
          <Image src="/Meubel House_Logos-05.png" alt="Module Image" width={77} height={77} priority />
        </div>
        <h1 className="absolute top-[221px] left-1/2 transform -translate-x-1/2 text-4xl md:text-5xl font-medium text-center text-black">
          Contact
        </h1>
        <div className="absolute top-[295px] left-1/2 transform -translate-x-1/2 flex text-lg font-medium text-black">
          <span>Home</span>
          <span className="mx-2">➤</span>
          <span className="font-light">Contact</span>
        </div>
      </div>

      {/* Main Section */}
      <div className="w-full mt-10 md:mt-20 bg-[#FFFFFF] mx-auto px-4 md:px-0">
        {/* "Get In Touch With Us" Section */}
        <div className="w-full py-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-black">
            Get In Touch With Us
          </h2>
          <p className="text-center text-[#9F9F9F] font-poppins text-[14px] md:text-[16px] font-normal leading-[24px] mt-5">
            For More Information About Our Product & Services, Please Feel Free To Drop Us<br />
            An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        {/* Form and Info Section */}
        <div className="w-full lg:w-[1240px] bg-[#FFFFFF] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Address, Phone, and Working Time */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-start space-x-5">
              <Image src="/address.png" alt="Address Icon" width={22} height={28.18} />
              <div>
                <h3 className="text-base md:text-lg font-medium text-black">Address</h3>
                <p className="text-sm text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <Image src="/phone.png" alt="Phone Icon" width={22} height={28.18} />
              <div>
                <h3 className="text-base md:text-lg font-medium text-black">Phone</h3>
                <p className="text-sm text-gray-600">
                  Mobile: (+84) 546-6789 <br />
                  Hotline: (+84) 456-7898
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-5">
              <Image src="/workintime.png" alt="Working Time Icon" width={22} height={28.18} />
              <div>
                <h3 className="text-base md:text-lg font-medium text-black">Working Time</h3>
                <p className="text-sm text-gray-600">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>

            {/* Timing Div */}
            <div className="text-lg font-semibold text-blue-600">
              Current Time: {time}
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
           

          

<motion.button
  type="submit"
  className="w-full p-3 border border-black text-black font-semibold rounded-lg 
             bg-[#FFD700] hover:bg-[#FFC300] transition-all duration-300
             relative overflow-hidden shadow-md"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <span className="relative z-10">Submit</span>
  <motion.div
    className="absolute inset-0 bg-[#FFEA00] opacity-0"
    initial={{ opacity: 0 }}
    whileHover={{ opacity: 0.2 }}
    transition={{ duration: 0.3 }}
  />
</motion.button>


          </form>

          {/* Success Message */}
          {successMessage && (
            <div className="text-center text-green-600 font-medium mt-4">
              {successMessage}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
