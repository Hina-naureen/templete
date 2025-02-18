import Link from 'next/link';
import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';

export function NavBar({ bgColor = 'bg-[#FBEBB5]' }: { bgColor?: string }) {
  return (
    <nav
      className={`${bgColor} px-6 py-4 max-w-full mx-auto fixed top-0 left-0 w-full z-50`}
    >
      <div className="flex items-center justify-between">
        {/* Desktop aur bade screens ke liye */}
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* Mobile View ke liye - Chote screens */}
        <div className="flex mr-3 items-center space-x-5">
          <NavIcons />
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden overflow-hidden transition-all duration-300 ease-in-out">
        <div className="pt-4 pb-2 space-y-2 text-center">
          <NavLinks mobile />
        </div>
      </div>
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkClass = mobile
    ? 'block py-2 text-sm font-medium text-black'
    : 'text-sm font-medium text-center text-black';

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
    <>
      <Link href="/account">
        <button className="p-2 text-black">
          <User className="h-5 w-5" />
          <span className="sr-only">Account</span>
        </button>
      </Link>
      
      {/* Redirect Search Icon to Cards Page */}
      <Link href="/Cards">
        <button className="p-2 text-black">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>
      </Link>
      
      {/* Redirect Wishlist Icon to Wishlist Page */}
      <Link href="/wishlist">
        <button className="p-2 text-black">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Wishlist</span>
        </button>
      </Link>

      <Link href="/Cart">
        <button className="p-2 text-black">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Cart</span>
        </button>
      </Link>

    </>
  );
}
