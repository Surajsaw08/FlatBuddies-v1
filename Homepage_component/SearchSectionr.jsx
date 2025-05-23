const SearchSection = ({ activeTab, setActiveTab, onSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-10">
      <div className="bg-white rounded-xl shadow-xl p-6 mb-12">
        {/* Search Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setActiveTab("flats")}
            className={`flex-1 py-3 text-center font-medium rounded-t-lg ${
              activeTab === "flats"
                ? "bg-orange-600 text-white"
                : "text-gray-600"
            }`}
          >
            Find a Flat
          </button>
          <button
            onClick={() => setActiveTab("flatmates")}
            className={`flex-1 py-3 text-center font-medium rounded-t-lg ${
              activeTab === "flatmates"
                ? "bg-orange-600 text-white"
                : "text-gray-600"
            }`}
          >
            Find Flatmates
          </button>
        </div>

        {/* Search Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="City, neighborhood, or address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Min Price
              </label>
              <input
                type="number"
                placeholder="1000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Max Price
              </label>
              <input
                type="number"
                placeholder="5000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={onSearch}
              className="bg-orange-400 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors text-lg font-medium"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
