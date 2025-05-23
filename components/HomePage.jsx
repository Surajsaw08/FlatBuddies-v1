import React from "react";
import HNavbar from "../Homepage_component/HNavbar";
import SearchSection from "../Homepage_component/SearchSectionr";
import axios from "axios";
import { useState, useEffect } from "react";
import ResultsSection from "../Homepage_component/ResultSection";
import FAQ from "../LnadingPage_components/Faqs";
import Testimonials from "../LnadingPage_components/Testimonial";
import IndianCulture from "../LnadingPage_components/IndianCultures";
import Footer from "../LnadingPage_components/Footer";

const flats = [
  {
    title: "Luxury 3BHK in Indiranagar",
    location: "Bangalore, Karnataka",
    rent: "5,000",
    deposit: "1,00,000",
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
    rent: "12,000",
    deposit: "24,000",
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
    rent: "22,000",
    deposit: "66,000",
    tags: ["Furnished", "AC", "Parking"],
    gradient: "from-yellow-500 to-red-500",
    badge: {
      text: "Hot Deal",
      color: "text-red-500",
    },
  },
];

const flatmates = [
  {
    id: 1,
    name: "Alex Johnson",
    age: 28,
    occupation: "Software Developer",
    location: "Camden, London",
    budget: 8000,
    description:
      "Clean, quiet professional looking for a flat with good internet connection.",
  },
  // ... other flatmates data
];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("flats");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    setSearchResults(activeTab === "flats" ? flats : flatmates);
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/userdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = res.data;
      console.log(userData);
      setUser(userData);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  return (
    <>
      <HNavbar user={user} />
      <div className="bg-gradient-to-r from-orange-300 to-red-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Home & Flatmates
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
              Connect with like-minded people and discover your ideal living
              situation with FlatBuddies.
            </p>
          </div>
        </div>
      </div>
      <SearchSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleSearch}
      />
      <ResultsSection
        activeTab={activeTab}
        results={
          searchResults.length
            ? searchResults
            : activeTab === "flats"
            ? flats
            : flatmates
        }
      />
      <Testimonials />
      <FAQ />
      <IndianCulture />
      <Footer />
    </>
  );
};

export default HomePage;
