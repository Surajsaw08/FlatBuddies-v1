const ResultsSection = ({ activeTab, results }) => {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full -mr-40 -mt-40 opacity-30 blob"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-100 rounded-full -ml-20 -mb-20 opacity-30 blob"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {activeTab === "flats" ? "Available Flats" : "Available Flatmates"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {activeTab === "flats"
              ? "Browse through our curated selection of flats across London."
              : "Connect with potential flatmates who match your preferences."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, index) =>
            activeTab === "flats" ? (
              <FlatCard key={index} flat={item} />
            ) : (
              <FlatmateCard key={index} flatmate={item} />
            )
          )}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors duration-300">
            View All {activeTab === "flats" ? "Flats" : "Flatmates"}
          </button>
        </div> */}
      </div>
    </section>
  );
};

const FlatCard = ({ flat }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div
        className={`h-48 bg-gradient-to-r ${
          flat.gradient || "from-blue-500 to-purple-500"
        } relative`}
      >
        <div
          className={`absolute top-4 left-4 bg-white ${
            flat.badge?.color || "text-orange-500"
          } px-3 py-1 rounded-full text-sm font-medium`}
        >
          {flat.badge?.text || "Popular"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{flat.title}</h3>
        <p className="text-gray-500 text-sm mb-4">
          <LocationIcon />
          {flat.location}
        </p>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Rent</p>
            <p className="font-semibold">₹{flat.rent}/month</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Deposit</p>
            <p className="font-semibold">{flat.deposit}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Furnished", "WiFi", "Parking"].map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

const FlatmateCard = ({ flatmate }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
      <div
        className={`h-48 bg-gradient-to-r ${
          flatmate.gradient || "from-green-500 to-teal-500"
        } relative`}
      >
        <div
          className={`absolute top-4 left-4 bg-white ${
            flatmate.badge?.color || "text-green-500"
          } px-3 py-1 rounded-full text-sm font-medium`}
        >
          {flatmate.badge?.text || "Available"}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">
          {flatmate.name}, {flatmate.age}
        </h3>
        <p className="text-gray-500 text-sm mb-1">{flatmate.occupation}</p>
        <p className="text-gray-500 text-sm mb-4">
          <LocationIcon />
          {flatmate.location}
        </p>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Budget</p>
            <p className="font-semibold">₹{flatmate.budget}/month</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Available</p>
            <p className="font-semibold">Now</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {["Non-smoker", "Professional", "Clean"].map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity duration-300">
          Contact
        </button>
      </div>
    </div>
  );
};

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 inline mr-1"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);

export default ResultsSection;
