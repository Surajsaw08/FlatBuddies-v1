// components/Stats.js
import React from "react";

const stats = [
  { value: "50K+", label: "Happy Flatmates" },
  { value: "15+", label: "Indian Cities" },
  { value: "10K+", label: "Verified Listings" },
  { value: "4.8/5", label: "User Rating" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="slide-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <p className="text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
