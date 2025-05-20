// components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <a href="#" className="flex items-center flex-shrink-0">
            <span className="text-2xl font-bold gradient-text">
              FlatBuddies
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#cities"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Cities
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Auth buttons */}
          <div className="hidden sm:flex items-center">
            <button className="bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-lg mr-3 hover:bg-orange-50 transition-colors">
              Log In
            </button>
            <button className="gradient-cta text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>

          {/* Hamburger */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          mobileMenuOpen ? "block" : "hidden"
        } border-t border-gray-100 bg-white`}
      >
        <div className="px-4 py-4 space-y-2">
          <a href="#features" className="block text-gray-700">
            Features
          </a>
          <a href="#cities" className="block text-gray-700">
            Cities
          </a>
          <a href="#how-it-works" className="block text-gray-700">
            How It Works
          </a>
          <a href="#testimonials" className="block text-gray-700">
            Testimonials
          </a>
          <a href="#faq" className="block text-gray-700">
            FAQ
          </a>
          <div className="pt-2 border-t border-gray-100 flex space-x-3">
            <button className="w-full bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-lg">
              Log In
            </button>
            <button className="w-full gradient-cta text-white px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
