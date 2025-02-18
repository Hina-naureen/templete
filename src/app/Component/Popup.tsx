"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(14);
  const [hours, setHours] = useState(34);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(59);

  // *Check Session Storage to prevent popup from showing again*
  useEffect(() => {
    const isClosed = sessionStorage.getItem("promoPopupClosed");
    if (!isClosed) {
      setShowPopup(true);
    }
  }, [hours, minutes]);

  // *Live Countdown Timer*
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev > 0) return prev - 1;
        setMinutes((m) => {
          if (prev === 0 && m > 0) return m - 1;
          if (prev === 0 && m === 0) {
            setHours((h) => (h > 0 ? h - 1 : 23));
            setDays((d) => (hours === 0 && minutes === 0 && prev === 0 ? d - 1 : d));
            return 59;
          }
          return m;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes, hours, days]);

  // *Close Popup*
  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("promoPopupClosed", "true");
  };

  // *Handle Email Submission*
  const handleSubmit = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center relative"
      >
        {/* *Close Button* */}
        <button className="absolute top-2 right-4 text-gray-600 text-xl" onClick={handleClose}>
          ✕
        </button>

        {/* *Header Section* */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xl font-bold text-gray-800">🎉 Exclusive Offer</div>
          <p className="text-gray-600 text-sm">Limited Time Discount!</p>
        </motion.div>

        {/* *Discount Message* */}
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-red-500 text-3xl font-bold mt-4"
        >
          SAVE 30%
        </motion.h2>
        <p className="text-gray-600 text-sm">on our premium collection of sofas and chairs</p>

        {/* *Countdown Timer* */}
        <div className="flex justify-center gap-2 mt-3">
          {[days, hours, minutes, seconds].map((time, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-green-600 text-white p-2 rounded-md text-lg w-12"
            >
              {time.toString().padStart(2, "0")}
            </motion.div>
          ))}
        </div>

        {/* *Email Input or Submission Message* */}
        {!submitted ? (
          <>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md mt-3 focus:ring-2 focus:ring-green-500"
            />
            <motion.button
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-500 text-white p-2 rounded-md mt-3 hover:bg-blue-600 transition"
            >
              Claim 30% Off Seating
            </motion.button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-600 font-bold mt-4"
          >
            ✅ Email Submitted! Discount Applied.
          </motion.div>
        )}

        {/* *No Thanks Option* */}
        <p
          className="text-gray-600 text-sm mt-2 cursor-pointer hover:underline"
          onClick={handleClose}
        >
          ```tsx
                    No
        </p>
      </motion.div>
    </div>
  );
};

export default Popup;