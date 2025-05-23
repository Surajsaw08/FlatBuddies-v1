// import React, { useEffect, useState } from "react";
// import Footer from "../LnadingPage_components/Footer";
// import axios from "axios";

// const ProfilePage = () => {
//   const [user, setUser] = useState(null);

//   // Control modal/form visibility
//   const [showForm, setShowForm] = useState(false);

//   // Form data state (customize keys as needed)
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     dob: "",
//     gender: "",
//     address: "",
//     city: "",
//     state: "",
//     zip: "",
//     files: [],
//     // Add more fields if needed
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       fetchUserData(token);
//     }
//   }, []);

//   const fetchUserData = async (token) => {
//     try {
//       const res = await axios.get("http://localhost:3000/api/user/userdata", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setUser(res.data);
//     } catch (err) {
//       console.error("Failed to fetch user", err);
//     }
//   };

//   const handleListProperty = () => {
//     setShowForm(true);
//   };

//   const handleListRoomMate = () => {
//     alert("Register as Flatmate clicked!");
//   };

//   // Update form state for text inputs
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Update form state for file inputs
//   const handleFileChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       files: e.target.files,
//     }));
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Prepare data to send or log
//     console.log("Form data submitted:", formData);

//     // TODO: Send formData to backend API if needed

//     // Reset form & close modal
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       dob: "",
//       gender: "",
//       address: "",
//       city: "",
//       state: "",
//       zip: "",
//       files: [],
//     });
//     setShowForm(false);
//   };
//   return (
//     <div className="font-sans bg-gray-50">
//       {/* Navigation Bar */}
//       <nav className="bg-white shadow-md px-6 py-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-4">
//             <div className="text-2xl font-bold text-orange-600 flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-8 w-8 mr-2"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//               </svg>
//               FlatBuddies
//             </div>
//             <div className="hidden md:flex space-x-8 ml-10">
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-orange-600 transition-colors"
//               >
//                 Home
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-600 hover:text-orange-600 transition-colors"
//               >
//                 FAQ
//               </a>
//               <a href="#" className="text-orange-600 font-medium">
//                 Profile
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center space-x-4">
//             <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
//               Sign Out
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Profile Header */}
//       <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-12">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row items-center md:items-start">
//             <div className="w-32 h-32 rounded-full bg-white p-1 mb-6 md:mb-0 md:mr-8">
//               <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-400">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div className="pt-5">
//               <h1 className="text-3xl font-bold mb-2">{user?.username}</h1>
//               <p className="text-xl opacity-90 mb-4">{user?.email}</p>
//               {/* <div className="flex space-x-4">
//                 {/* <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                   </svg>
//                   Edit Profile
//                 </button>
//                 <button className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-2"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                   Settings
//                 </button>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Profile Content */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="mb-12">
//           <h2 className="text-2xl font-bold mb-6">
//             What would you like to do?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Rent a Room Option */}
//             <OptionCard
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//                   />
//                 </svg>
//               }
//               title="Rent a Room"
//               description="List your property and find the perfect tenants. Set your own terms and requirements."
//               features={[
//                 "Create detailed property listings",
//                 "Screen potential flatmates",
//                 "Manage your property listings",
//               ]}
//               buttonText="List Your Property"
//             />

//             {/* Register as Flatmate Option */}
//             <OptionCard
//               icon={
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                   />
//                 </svg>
//               }
//               title="Register as Flatmate"
//               description="Create your profile and find the perfect flat to share with others."
//               features={[
//                 "Create your flatmate profile",
//                 "Specify your preferences",
//                 "Get matched with compatible flats",
//               ]}
//               buttonText="Create Flatmate Profile"
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// const OptionCard = ({ icon, title, description, features, buttonText }) => {
//   return (
//     <div
//       className="option-card bg-white rounded-xl shadow-md p-8 border-2 border-transparent transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
//       onClick={() => {
//         if (buttonText === "List Your Property") {
//           handleListProperty();
//         } else {
//           handleListRoomMate();
//         }
//       }}
//     >
//       <div className="flex items-start mb-6">
//         <div className="icon-circle w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
//           {icon}
//         </div>
//         <div className="ml-6">
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//           <p className="text-gray-600 mb-4">{description}</p>
//           <ul className="space-y-2 text-gray-700">
//             {features.map((feature, index) => (
//               <li key={index} className="flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 text-green-500 mr-2"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full font-medium">
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// export default ProfilePage;

import React, { useEffect, useState } from "react";
import Footer from "../LnadingPage_components/Footer";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [showPropertyForm, setShowPropertyForm] = useState(false);

  // Property form data state
  const [propertyFormData, setPropertyFormData] = useState({
    title: "",
    description: "",
    city: "",
    address: "",
    rent: "",
    availableFrom: "",
    roommates: "",
    preferredGender: "",
    isAvailable: true,
    photos: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get("http://localhost:3000/api/user/userdata", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  const handleListProperty = () => {
    setShowPropertyForm(true);
  };

  const handleListRoomMate = () => {
    alert("Register as Flatmate clicked!");
  };

  // Property form handlers
  const handlePropertyInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPropertyFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePropertyFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setPropertyFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, ...files],
    }));
  };

  const triggerFileInput = () => {
    document.getElementById("property-file-upload").click();
  };

  const handlePropertySubmit = (e) => {
    e.preventDefault();
    console.log("Property submitted:", propertyFormData);
    // Here you would typically send the data to an API
    // Example:
    // axios.post('/api/properties', propertyFormData, {
    //   headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    // })
    setShowPropertyForm(false);
  };

  const OptionCard = ({
    icon,
    title,
    description,
    features,
    buttonText,
    onClick,
  }) => {
    return (
      <div
        className="option-card bg-white rounded-xl shadow-md p-8 border-2 border-transparent transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-lg"
        onClick={onClick}
      >
        <div className="flex items-start mb-6">
          <div className="icon-circle w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
            {icon}
          </div>
          <div className="ml-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="space-y-2 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors w-full font-medium">
          {buttonText}
        </button>
      </div>
    );
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-orange-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              FlatBuddies
            </div>
            <div className="hidden md:flex space-x-8 ml-10">
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors"
              >
                FAQ
              </a>
              <a href="#" className="text-orange-600 font-medium">
                Profile
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-32 h-32 rounded-full bg-white p-1 mb-6 md:mb-0 md:mr-8">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
            <div className="pt-5">
              <h1 className="text-3xl font-bold mb-2">{user?.username}</h1>
              <p className="text-xl opacity-90 mb-4">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            What would you like to do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rent a Room Option */}
            <OptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
              }
              title="Rent a Room"
              description="List your property and find the perfect tenants. Set your own terms and requirements."
              features={[
                "Create detailed property listings",
                "Screen potential flatmates",
                "Manage your property listings",
              ]}
              buttonText="List Your Property"
              onClick={handleListProperty}
            />

            {/* Register as Flatmate Option */}
            <OptionCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              title="Register as Flatmate"
              description="Create your profile and find the perfect flat to share with others."
              features={[
                "Create your flatmate profile",
                "Specify your preferences",
                "Get matched with compatible flats",
              ]}
              buttonText="Create Flatmate Profile"
              onClick={handleListRoomMate}
            />
          </div>
        </div>
      </div>

      {/* Property Listing Modal */}
      {showPropertyForm && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-gray-500 bg-opacity-50">
            <div className="relative py-3 sm:max-w-3xl sm:mx-auto">
              <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-xl rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      List Your Property
                    </h2>
                    <button
                      onClick={() => setShowPropertyForm(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-8">
                    Fill in the details below to list your property on
                    FlatBuddies.
                  </p>

                  <form onSubmit={handlePropertySubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Title
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={propertyFormData.title}
                        onChange={handlePropertyInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g. Modern 2-Bedroom Apartment in Camden"
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows="4"
                        value={propertyFormData.description}
                        onChange={handlePropertyInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Describe your property, amenities, neighborhood, etc."
                      ></textarea>
                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={propertyFormData.city}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. London"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={propertyFormData.address}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 123 High Street"
                        />
                      </div>
                    </div>

                    {/* Rent and Availability */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="rent"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Monthly Rent (₹)
                        </label>
                        <input
                          type="number"
                          id="rent"
                          name="rent"
                          value={propertyFormData.rent}
                          onChange={handlePropertyInputChange}
                          required
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 1200"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="availableFrom"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Available From
                        </label>
                        <input
                          type="date"
                          id="availableFrom"
                          name="availableFrom"
                          value={propertyFormData.availableFrom}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    {/* Roommates and Gender Preference */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="roommates"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Number of Roommates
                        </label>
                        <input
                          type="number"
                          id="roommates"
                          name="roommates"
                          value={propertyFormData.roommates}
                          onChange={handlePropertyInputChange}
                          required
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="e.g. 2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="preferredGender"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Preferred Gender
                        </label>
                        <select
                          id="preferredGender"
                          name="preferredGender"
                          value={propertyFormData.preferredGender}
                          onChange={handlePropertyInputChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                          <option value="">Select preference</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="ANY">Any</option>
                        </select>
                      </div>
                    </div>

                    {/* Availability Status */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isAvailable"
                        name="isAvailable"
                        checked={propertyFormData.isAvailable}
                        onChange={handlePropertyInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="isAvailable"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        Property is currently available
                      </label>
                    </div>

                    {/* Upload Photos Section */}
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer"
                      onClick={triggerFileInput}
                    >
                      <input
                        type="file"
                        id="property-file-upload"
                        className="hidden"
                        multiple
                        accept="image/*"
                        onChange={handlePropertyFileUpload}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">
                        Drag and drop photos here, or
                        <button
                          type="button"
                          className="text-indigo-600 hover:text-indigo-500 ml-1"
                        >
                          browse
                        </button>
                        to upload
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                      {propertyFormData.photos.length > 0 && (
                        <p className="mt-2 text-sm text-indigo-600">
                          {propertyFormData.photos.length}{" "}
                          {propertyFormData.photos.length === 1
                            ? "file"
                            : "files"}{" "}
                          selected
                        </p>
                      )}
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowPropertyForm(false)}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        List Property
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProfilePage;
