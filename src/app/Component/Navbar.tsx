"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react';

export function NavBar({ bgColor = 'bg-[#FBEBB5]' }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`${bgColor} px-6 py-4 max-w-full mx-auto fixed top-0 left-0 w-full z-50`}>
      <div className="flex items-center justify-between w-full">
        {/* لوگو اور نیویگیشن */}
        <div className="hidden md:flex space-x-8 lg:space-x-14 ml-4 lg:ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* موبائل ویو کے لیے آئیکنز اور مینو بٹن */}
        <div className="flex items-center space-x-4 md:space-x-5">
          <NavIcons />
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* موبائل مینو */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="pt-4 pb-2 space-y-2 text-center flex flex-col items-center">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false }) {
  const linkClass = mobile
    ? 'block w-full py-2 text-sm font-medium text-black hover:text-white hover:bg-[#FF6F61] rounded-lg transition duration-300 ease-in-out text-center'
    : 'text-sm font-medium text-black hover:text-white hover:bg-[#FF6F61] rounded-lg transition duration-300 ease-in-out px-4 py-2';

  return (
    <>
      <Link className={linkClass} href="/">
        Home
      </Link>
      <Link className={linkClass} href="/Shop">
        Shop
      </Link>
      <Link className={linkClass} href="/About">
        About
      </Link>
      <Link className={linkClass} href="/Contact">
        Contact
      </Link>
    </>
  );
}

function NavIcons() {
  return (
    <div className="flex space-x-2 md:space-x-3">
      <Link href="/account">
        <button className="p-2 text-black hover:text-white hover:bg-[#FF6F61] rounded-full transition duration-300 ease-in-out">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </button>
      </Link>
      <Link href="/Cards">
        <button className="p-2 text-black hover:text-white hover:bg-[#FF6F61] rounded-full transition duration-300 ease-in-out">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>
      </Link>
      <Link href="/wishlist">
        <button className="p-2 text-black hover:text-white hover:bg-[#FF6F61] rounded-full transition duration-300 ease-in-out">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Wishlist</span>
        </button>
      </Link>
      <Link href="/Cart">
        <button className="p-2 text-black hover:text-white hover:bg-[#FF6F61] rounded-full transition duration-300 ease-in-out">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </button>
      </Link>
    </div>
  );
}
