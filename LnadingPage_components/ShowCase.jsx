// components/Showcase.js
import React from "react";

const properties = [
  {
    title: "Luxury 3BHK in Indiranagar",
    location: "Bangalore, Karnataka",
    rent: "₹35,000/month",
    deposit: "₹1,00,000",
    tags: ["Fully Furnished", "AC", "WiFi"],
    gradient: "from-blue-500 to-purple-500",
    badge: {
      text: "Premium",
      color: "text-orange-500",
    },
  },
  {
    title: "Modern PG in Powai",
    location: "Mumbai, Maharashtra",
    rent: "₹12,000/month",
    deposit: "₹24,000",
    tags: ["Semi-Furnished", "Meals", "AC"],
    gradient: "from-green-500 to-teal-500",
    badge: {
      text: "New",
      color: "text-green-500",
    },
  },
  {
    title: "Spacious 2BHK in Gurgaon",
    location: "Delhi NCR, Haryana",
    rent: "₹22,000/month",
    deposit: "₹66,000",
    tags: ["Furnished", "AC", "Parking"],
    gradient: "from-yellow-500 to-red-500",
    badge: {
      text: "Hot Deal",
      color: "text-red-500",
    },
  },
];

const Showcase = () => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full -mr-40 -mt-40 opacity-30 blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full -ml-20 -mb-20 opacity-30 blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Find Your Perfect Space
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our curated selection of flats and PGs across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div
                className={`h-48 bg-gradient-to-r ${property.gradient} relative`}
              >
                <div
                  className={`absolute top-4 left-4 bg-white ${property.badge.color} px-3 py-1 rounded-full text-sm font-medium`}
                >
                  {property.badge.text}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {property.location}
                </p>
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Rent</p>
                    <p className="font-semibold">{property.rent}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Deposit</p>
                    <p className="font-semibold">{property.deposit}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full gradient-cta text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors duration-300">
            View All Listings
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
