import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black/80 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">StayFit</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-red-600 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          {/* Auth Buttons */}
          <div className="flex gap-4 ml-6">
            {/* Login button (useless) */}
            <button
              className="px-4 py-2 rounded-lg border border-red-600 text-red-600 hover:bg-red-700 hover:text-black transition-all duration-300 cursor-not-allowed"
            >
              Login
            </button>

            {/* Sign Up button (works) */}
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-red-600 text-black font-semibold hover:bg-red-500 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-4 space-y-3 text-white">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block hover:text-red-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          {/* Auth Buttons for Mobile */}
          <div className="flex flex-col gap-3 pt-3">
            {/* Login button (useless) */}
            <button
              className="px-4 py-2 text-center rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-all duration-300 cursor-not-allowed"
            >
              Login
            </button>

            {/* Sign Up button (works) */}
            <Link
              to="/signup"
              className="px-4 py-2 text-center rounded-lg bg-red-600 text-black font-semibold hover:bg-red-600 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
