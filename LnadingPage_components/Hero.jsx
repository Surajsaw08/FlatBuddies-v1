// components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="pt-[12rem] pb-30 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full -mr-40 -mt-40 opacity-50 blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full -ml-20 -mb-20 opacity-50 blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Find Your Perfect <span className="gradient-text">Flatmate</span>{" "}
              in India
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Connect with like-minded flatmates or discover your ideal room in
              top Indian cities. Verified listings, secure payments, and a
              community you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-cta text-white px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity duration-300 pulse">
                Find a Room
              </button>
              <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors duration-300">
                List Your Room
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl floating-slow z-[-1] relative">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">2BHK in NeelBad</h3>
                  <p className="text-gray-500">NeelBad, Bhopal</p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">Rent</p>
                  <p className="font-semibold">₹8,000/month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Deposit</p>
                  <p className="font-semibold">₹10,000</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-semibold">Immediately</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                  Furnished
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  AC
                </span>
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  WiFi
                </span>
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  Gym
                </span>
              </div>
              <button className="w-full gradient-cta text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                View Details
              </button>
            </div>

            <div className="absolute top-20 -right-10 bg-white p-4 rounded-xl shadow-lg floating z-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Verified Listing</p>
                  <p className="text-xs text-gray-500">100% Genuine</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-lg floating-slow z-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">5+ Flatmates</p>
                  <p className="text-xs text-gray-500">Ready to Connect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
