// components/CTA.js
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Find Your Perfect Flat or Flatmate?
            </h2>
            <p className="text-white text-opacity-90 mb-8">
              Join thousands of happy users across India who have found their
              ideal living situation through FlatBuddies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-500 px-8 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 transition-opacity duration-300 pulse">
                Get Started Now
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
                Download App
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">50,000+</p>
                <p className="text-white text-opacity-90">Happy Users</p>
              </div>
              <div>
                <p className="text-2xl font-bold">15+</p>
                <p className="text-white text-opacity-90">Indian Cities</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-6 rounded-2xl shadow-xl floating-slow">
              <h3 className="font-semibold text-gray-800 mb-4">
                Download Our App
              </h3>
              <p className="text-gray-600 mb-6">
                Get the FlatBuddies app for a seamless experience on the go.
              </p>
              <div className="flex space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.707 9.293l-5-5a.999.999 0 00-1.414 0l-5 5a.999.999 0 101.414 1.414L12 6.414l4.293 4.293a.997.997 0 001.414 0 .999.999 0 000-1.414zM12 8a1 1 0 100-2 1 1 0 000 2z" />
                    <path d="M19 10a1 1 0 00-1 1v7a1 1 0 01-1 1H7a1 1 0 01-1-1v-7a1 1 0 00-2 0v7a3 3 0 003 3h10a3 3 0 003-3v-7a1 1 0 00-1-1z" />
                  </svg>
                  App Store
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 3v18h18V3H3zm9 15.59L7.59 14H6v-4h1.59L12 5.41 16.41 10H18v4h-1.59L12 18.59z" />
                  </svg>
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
