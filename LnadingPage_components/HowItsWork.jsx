// components/HowItWorks.js
import React from "react";

const steps = [
  {
    number: "1",
    title: "Create Your Profile",
    description:
      "Sign up and create your profile with your preferences, lifestyle, and budget requirements.",
  },
  {
    number: "2",
    title: "Browse Listings",
    description:
      "Search for rooms or flatmates based on location, budget, and amenities across Indian cities.",
  },
  {
    number: "3",
    title: "Connect & Meet",
    description:
      "Chat with potential flatmates or property owners and schedule in-person or virtual visits.",
  },
  {
    number: "4",
    title: "Move In",
    description:
      "Sign the digital agreement, pay securely through our platform, and move into your new home.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How FlatBuddies Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Finding your perfect flatmate or room is simple with our easy 4-step
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Need Help Finding Your Perfect Match?
              </h3>
              <p className="text-gray-600 mb-6">
                Our FlatBuddy Assistants can help you find the perfect flatmate
                or room based on your specific requirements.
              </p>
              <div className="flex items-center space-x-4">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Call us</p>
                  <p className="text-orange-500">+91 98585 25987</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Schedule a Consultation</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button className="w-full gradient-cta text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
