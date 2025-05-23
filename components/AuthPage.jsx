// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AuthPage = () => {
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [activeTab, setActiveTab] = useState("signin");
//   const tabIndicatorRef = useRef(null);
//   const signinTabRef = useRef(null);
//   const signupTabRef = useRef(null);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Form state
//   const [signupData, setSignupData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [signinData, setSigninData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     setTabIndicator(
//       activeTab === "signin" ? signinTabRef.current : signupTabRef.current
//     );
//   }, [activeTab]);

//   const setTabIndicator = (activeTabElement) => {
//     if (tabIndicatorRef.current && activeTabElement) {
//       tabIndicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
//       tabIndicatorRef.current.style.left = `${activeTabElement.offsetLeft}px`;
//     }
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setIsFlipped(tab === "signup");
//     setError("");
//   };

//   const handleFlipToSignup = (e) => {
//     e.preventDefault();
//     setActiveTab("signup");
//     setIsFlipped(true);
//     setError("");
//   };

//   const handleFlipToSignin = (e) => {
//     e.preventDefault();
//     setActiveTab("signin");
//     setIsFlipped(false);
//     setError("");
//   };

//   const handleSignupChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSigninChange = (e) => {
//     const { name, value } = e.target;
//     setSigninData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/user/auth/signup",
//         signupData
//       );

//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         navigate("/homepage");
//       } else {
//         setError(response.data.message || "Signup failed");
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "An error occurred during signup"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSignin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/user/auth/login",
//         signinData
//       );

//       if (response.data.success) {
//         localStorage.setItem("token", response.data.token);
//         navigate("/homepage");
//       } else {
//         setError(response.data.message || "Signin failed");
//       }
//     } catch (err) {
//       setError(
//         err.response?.data?.message || "An error occurred during signin"
//       );
//       alert("login uncessfull");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="p-4"
//       style={{
//         fontFamily: "'Poppins', sans-serif",
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         className="form-container"
//         style={{
//           perspective: "1000px",
//           width: "100%",
//           maxWidth: "800px",
//         }}
//       >
//         <div
//           className="tab-slider mx-auto w-64"
//           style={{
//             position: "relative",
//             display: "inline-flex",
//             padding: "4px",
//             borderRadius: "9999px",
//             backgroundColor: "rgba(255, 255, 255, 0.1)",
//             backdropFilter: "blur(10px)",
//             marginBottom: "20px",
//           }}
//         >
//           <div
//             ref={tabIndicatorRef}
//             className="tab-slider-indicator"
//             style={{
//               position: "absolute",
//               height: "calc(100% - 8px)",
//               top: "4px",
//               zIndex: "0",
//               transition: "all 0.3s ease",
//               borderRadius: "9999px",
//               background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//             }}
//           ></div>
//           <button
//             ref={signinTabRef}
//             className={`tab-slider-btn ${
//               activeTab === "signin" ? "active" : ""
//             }`}
//             style={{
//               position: "relative",
//               zIndex: "1",
//               padding: "8px 24px",
//               borderRadius: "9999px",
//               fontWeight: "500",
//               transition: "all 0.3s ease",
//               color: activeTab === "signin" ? "white" : "inherit",
//             }}
//             onClick={() => handleTabClick("signin")}
//           >
//             Sign In
//           </button>
//           <button
//             ref={signupTabRef}
//             className={`tab-slider-btn ${
//               activeTab === "signup" ? "active" : ""
//             }`}
//             style={{
//               position: "relative",
//               zIndex: "1",
//               padding: "8px 24px",
//               borderRadius: "9999px",
//               fontWeight: "500",
//               transition: "all 0.3s ease",
//               color: activeTab === "signup" ? "white" : "inherit",
//             }}
//             onClick={() => handleTabClick("signup")}
//           >
//             Sign Up
//           </button>
//         </div>

//         {error && (
//           <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
//             {error}
//           </div>
//         )}

//         <div
//           className={`card ${isFlipped ? "flipped" : ""}`}
//           style={{
//             transition: "transform 0.8s",
//             transformStyle: "preserve-3d",
//             position: "relative",
//             width: "100%",
//             height: "550px",
//           }}
//         >
//           {/* Sign In Form (Front) */}
//           <div
//             className="card-face card-front bg-white"
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               backfaceVisibility: "hidden",
//               borderRadius: "16px",
//               overflow: "hidden",
//               boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
//             }}
//           >
//             <div className="grid md:grid-cols-2 h-full">
//               {/* Left Side - Form */}
//               <div className="p-8 flex flex-col justify-center">
//                 <div className="mb-8 text-center">
//                   <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                     Welcome Back
//                   </h2>
//                   <p className="text-gray-600">
//                     Sign in to continue your journey
//                   </p>
//                 </div>

//                 <form className="space-y-4" onSubmit={handleSignin}>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email or username
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={signinData.email}
//                       onChange={handleSigninChange}
//                       className="form-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
//                       placeholder="your@email.com"
//                       required
//                       style={{
//                         transition: "all 0.3s ease",
//                         borderLeft: "4px solid transparent",
//                       }}
//                       onFocus={(e) => {
//                         e.target.style.borderLeft = "4px solid #6366f1";
//                         e.target.style.boxShadow =
//                           "0 5px 15px rgba(99, 102, 241, 0.1)";
//                       }}
//                       onBlur={(e) => {
//                         e.target.style.borderLeft = "4px solid transparent";
//                         e.target.style.boxShadow = "none";
//                       }}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={signinData.password}
//                       onChange={handleSigninChange}
//                       className="form-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
//                       placeholder="••••••••"
//                       required
//                       style={{
//                         transition: "all 0.3s ease",
//                         borderLeft: "4px solid transparent",
//                       }}
//                       onFocus={(e) => {
//                         e.target.style.borderLeft = "4px solid #6366f1";
//                         e.target.style.boxShadow =
//                           "0 5px 15px rgba(99, 102, 241, 0.1)";
//                       }}
//                       onBlur={(e) => {
//                         e.target.style.borderLeft = "4px solid transparent";
//                         e.target.style.boxShadow = "none";
//                       }}
//                     />
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="btn-primary w-full py-3 px-4 rounded-lg text-white font-medium disabled:opacity-70"
//                     style={{
//                       background:
//                         "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                       transition: "all 0.3s ease",
//                     }}
//                   >
//                     {loading ? "Signing In..." : "Sign In"}
//                   </button>
//                 </form>

//                 <div className="pb-[10px]">
//                   <p className="text-center mt-4 text-sm text-gray-600">
//                     Don't have an account?
//                     <a
//                       href="#"
//                       onClick={handleFlipToSignup}
//                       className="font-medium text-indigo-600 hover:text-indigo-500"
//                     >
//                       Sign up
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               {/* Right Side - Illustration */}
//               <div className="hidden md:flex flex-col items-center justify-center bg-indigo-50 p-8">
//                 <svg
//                   className="w-48 h-48"
//                   viewBox="0 0 200 200"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle cx="100" cy="100" r="80" fill="#e0e7ff" />
//                   <path
//                     d="M135.5,80.5c0,19.33-15.67,35-35,35s-35-15.67-35-35s15.67-35,35-35S135.5,61.17,135.5,80.5z"
//                     fill="#c7d2fe"
//                   />
//                   <path
//                     d="M140,140v-10c0-16.57-13.43-30-30-30H90c-16.57,0-30,13.43-30,30v10"
//                     stroke="#6366f1"
//                     strokeWidth="6"
//                     fill="none"
//                     strokeLinecap="round"
//                   />
//                   <circle
//                     cx="100"
//                     cy="70"
//                     r="20"
//                     stroke="#6366f1"
//                     strokeWidth="6"
//                     fill="#e0e7ff"
//                   />
//                   <path
//                     d="M160,100c0,33.14-26.86,60-60,60s-60-26.86-60-60s26.86-60,60-60S160,66.86,160,100z"
//                     stroke="#6366f1"
//                     strokeWidth="6"
//                     fill="none"
//                   />
//                 </svg>
//                 <h3 className="text-xl font-bold text-gray-800 mt-6">
//                   Access Your Account
//                 </h3>
//                 <p className="text-gray-600 text-center mt-2">
//                   Sign in to access your personalized dashboard and continue
//                   where you left off.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Sign Up Form (Back) */}
//           <div
//             className="card-face card-back bg-white"
//             style={{
//               position: "absolute",
//               width: "100%",
//               height: "100%",
//               backfaceVisibility: "hidden",
//               borderRadius: "16px",
//               overflow: "hidden",
//               boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
//               transform: "rotateY(180deg)",
//             }}
//           >
//             <div className="grid md:grid-cols-2 h-full">
//               {/* Left Side - Illustration */}
//               <div className="hidden md:flex flex-col items-center justify-center bg-purple-50 p-8">
//                 <svg
//                   className="w-48 h-48"
//                   viewBox="0 0 200 200"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <circle cx="100" cy="100" r="80" fill="#f3e8ff" />
//                   <path
//                     d="M100,40v120"
//                     stroke="#a855f7"
//                     strokeWidth="6"
//                     fill="none"
//                     strokeLinecap="round"
//                   />
//                   <path
//                     d="M40,100h120"
//                     stroke="#a855f7"
//                     strokeWidth="6"
//                     fill="none"
//                     strokeLinecap="round"
//                   />
//                   <circle
//                     cx="100"
//                     cy="100"
//                     r="30"
//                     fill="#f3e8ff"
//                     stroke="#a855f7"
//                     strokeWidth="6"
//                   />
//                   <path
//                     d="M160,100c0,33.14-26.86,60-60,60s-60-26.86-60-60s26.86-60,60-60S160,66.86,160,100z"
//                     stroke="#a855f7"
//                     strokeWidth="6"
//                     fill="none"
//                   />
//                 </svg>
//                 <h3 className="text-xl font-bold text-gray-800 mt-6">
//                   Join Our Community
//                 </h3>
//                 <p className="text-gray-600 text-center mt-2">
//                   Create an account to unlock all features and become part of
//                   our growing community.
//                 </p>
//               </div>

//               {/* Right Side - Form */}
//               <div className="md:col-span-1 col-span-2 p-8 flex flex-col justify-center">
//                 <div className="mb-8 text-center">
//                   <h2 className="text-3xl font-bold text-gray-800 mb-2">
//                     Create Account
//                   </h2>
//                   <p className="text-gray-600">Sign up to get started</p>
//                 </div>

//                 <form className="space-y-4" onSubmit={handleSignup}>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Username
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       value={signupData.username}
//                       onChange={handleSignupChange}
//                       className="form-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
//                       placeholder="username"
//                       required
//                       style={{
//                         transition: "all 0.3s ease",
//                         borderLeft: "4px solid transparent",
//                       }}
//                       onFocus={(e) => {
//                         e.target.style.borderLeft = "4px solid #a855f7";
//                         e.target.style.boxShadow =
//                           "0 5px 15px rgba(168, 85, 247, 0.1)";
//                       }}
//                       onBlur={(e) => {
//                         e.target.style.borderLeft = "4px solid transparent";
//                         e.target.style.boxShadow = "none";
//                       }}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={signupData.email}
//                       onChange={handleSignupChange}
//                       className="form-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
//                       placeholder="your@email.com"
//                       required
//                       style={{
//                         transition: "all 0.3s ease",
//                         borderLeft: "4px solid transparent",
//                       }}
//                       onFocus={(e) => {
//                         e.target.style.borderLeft = "4px solid #a855f7";
//                         e.target.style.boxShadow =
//                           "0 5px 15px rgba(168, 85, 247, 0.1)";
//                       }}
//                       onBlur={(e) => {
//                         e.target.style.borderLeft = "4px solid transparent";
//                         e.target.style.boxShadow = "none";
//                       }}
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={signupData.password}
//                       onChange={handleSignupChange}
//                       className="form-input w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
//                       placeholder="••••••••"
//                       required
//                       style={{
//                         transition: "all 0.3s ease",
//                         borderLeft: "4px solid transparent",
//                       }}
//                       onFocus={(e) => {
//                         e.target.style.borderLeft = "4px solid #a855f7";
//                         e.target.style.boxShadow =
//                           "0 5px 15px rgba(168, 85, 247, 0.1)";
//                       }}
//                       onBlur={(e) => {
//                         e.target.style.borderLeft = "4px solid transparent";
//                         e.target.style.boxShadow = "none";
//                       }}
//                     />
//                   </div>

//                   <div className="flex items-center">
//                     <input
//                       type="checkbox"
//                       id="terms"
//                       className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
//                       required
//                     />
//                     <label
//                       htmlFor="terms"
//                       className="ml-2 block text-sm text-gray-700"
//                     >
//                       I agree to the{" "}
//                       <a
//                         href="#"
//                         className="text-purple-600 hover:text-purple-500"
//                       >
//                         Terms
//                       </a>{" "}
//                       and{" "}
//                       <a
//                         href="#"
//                         className="text-purple-600 hover:text-purple-500"
//                       >
//                         Privacy Policy
//                       </a>
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full py-3 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 disabled:opacity-70"
//                   >
//                     {loading ? "Creating Account..." : "Sign Up"}
//                   </button>
//                 </form>

//                 <p className="text-center mt-8 text-sm text-gray-600">
//                   Already have an account?
//                   <a
//                     href="#"
//                     onClick={handleFlipToSignin}
//                     className="font-medium text-purple-600 hover:text-purple-500"
//                   >
//                     Sign in
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
//       `}</style>
//     </div>
//   );
// };

// export default AuthPage;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState("signin");
  const tabIndicatorRef = useRef(null);
  const signinTabRef = useRef(null);
  const signupTabRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Form state
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    setTabIndicator(
      activeTab === "signin" ? signinTabRef.current : signupTabRef.current
    );
  }, [activeTab]);

  const setTabIndicator = (activeTabElement) => {
    if (tabIndicatorRef.current && activeTabElement) {
      tabIndicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
      tabIndicatorRef.current.style.left = `${activeTabElement.offsetLeft}px`;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsFlipped(tab === "signup");
    setError("");
  };

  const handleFlipToSignup = (e) => {
    e.preventDefault();
    setActiveTab("signup");
    setIsFlipped(true);
    setError("");
  };

  const handleFlipToSignin = (e) => {
    e.preventDefault();
    setActiveTab("signin");
    setIsFlipped(false);
    setError("");
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    setSigninData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/auth/signup",
        signupData
      );

      if (response.data.message === "User created") {
        localStorage.setItem("token", response.data.token);
        console.log("signup successfull");
        navigate("/homepage");
      } else {
        setError(response.data.message || "Signup failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during signup"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/auth/login",
        signinData
      );

      if (response.data.message === "Login successful") {
        localStorage.setItem("token", response.data.token);
        navigate("/homepage");
      } else {
        setError(response.data.message || "Signin failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred during signin"
      );
      alert("Login unsuccessful");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-4"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="form-container"
        style={{
          perspective: "1000px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <div
          className="tab-slider mx-auto w-64"
          style={{
            position: "relative",
            display: "inline-flex",
            padding: "4px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            marginBottom: "20px",
          }}
        >
          <div
            ref={tabIndicatorRef}
            className="tab-slider-indicator"
            style={{
              position: "absolute",
              height: "calc(100% - 8px)",
              top: "4px",
              zIndex: "0",
              transition: "all 0.3s ease",
              borderRadius: "9999px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          ></div>
          <button
            ref={signinTabRef}
            className={`tab-slider-btn ${
              activeTab === "signin" ? "active" : ""
            }`}
            style={{
              position: "relative",
              zIndex: "1",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              color: activeTab === "signin" ? "white" : "inherit",
            }}
            onClick={() => handleTabClick("signin")}
          >
            Sign In
          </button>
          <button
            ref={signupTabRef}
            className={`tab-slider-btn ${
              activeTab === "signup" ? "active" : ""
            }`}
            style={{
              position: "relative",
              zIndex: "1",
              padding: "8px 24px",
              borderRadius: "9999px",
              fontWeight: "500",
              transition: "all 0.3s ease",
              color: activeTab === "signup" ? "white" : "inherit",
            }}
            onClick={() => handleTabClick("signup")}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          style={{
            transition: "transform 0.8s",
            transformStyle: "preserve-3d",
            position: "relative",
            width: "100%",
            height: "550px",
          }}
        >
          {/* Sign In Form (Front) */}
          <div
            className="card-face card-front bg-white"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Form */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-gray-600">
                    Sign in to continue your journey
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSignin}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email or username
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={signinData.email}
                      onChange={handleSigninChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={signinData.password}
                      onChange={handleSigninChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-lg text-white font-medium disabled:opacity-70"
                    style={{
                      background:
                        "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    }}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </button>
                </form>

                <div className="pb-[10px]">
                  <p className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account?
                    <a
                      href="#"
                      onClick={handleFlipToSignup}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Sign up
                    </a>
                  </p>
                </div>
              </div>

              {/* Right Side - Illustration */}
              <div className="hidden md:flex flex-col items-center justify-center bg-indigo-50 p-8">
                <svg
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="80" fill="#e0e7ff" />
                  <path
                    d="M135.5,80.5c0,19.33-15.67,35-35,35s-35-15.67-35-35s15.67-35,35-35S135.5,61.17,135.5,80.5z"
                    fill="#c7d2fe"
                  />
                  <path
                    d="M140,140v-10c0-16.57-13.43-30-30-30H90c-16.57,0-30,13.43-30,30v10"
                    stroke="#6366f1"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="70"
                    r="20"
                    stroke="#6366f1"
                    strokeWidth="6"
                    fill="#e0e7ff"
                  />
                  <path
                    d="M160,100c0,33.14-26.86,60-60,60s-60-26.86-60-60s26.86-60,60-60S160,66.86,160,100z"
                    stroke="#6366f1"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mt-6">
                  Access Your Account
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  Sign in to access your personalized dashboard and continue
                  where you left off.
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up Form (Back) */}
          <div
            className="card-face card-back bg-white"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Illustration */}
              <div className="hidden md:flex flex-col items-center justify-center bg-purple-50 p-8">
                <svg
                  className="w-48 h-48"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="80" fill="#f3e8ff" />
                  <path
                    d="M100,40v120"
                    stroke="#a855f7"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M40,100h120"
                    stroke="#a855f7"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="30"
                    fill="#f3e8ff"
                    stroke="#a855f7"
                    strokeWidth="6"
                  />
                  <path
                    d="M160,100c0,33.14-26.86,60-60,60s-60-26.86-60-60s26.86-60,60-60S160,66.86,160,100z"
                    stroke="#a855f7"
                    strokeWidth="6"
                    fill="none"
                  />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mt-6">
                  Join Our Community
                </h3>
                <p className="text-gray-600 text-center mt-2">
                  Create an account to unlock all features and become part of
                  our growing community.
                </p>
              </div>

              {/* Right Side - Form */}
              <div className="md:col-span-1 col-span-2 p-8 flex flex-col justify-center">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Create Account
                  </h2>
                  <p className="text-gray-600">Sign up to get started</p>
                </div>

                <form className="space-y-4" onSubmit={handleSignup}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={signupData.username}
                      onChange={handleSignupChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
                      placeholder="username"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={signupData.email}
                      onChange={handleSignupChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none"
                      placeholder="••••••••"
                      required
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-500"
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-500"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-4 rounded-lg text-white font-medium bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 disabled:opacity-70"
                  >
                    {loading ? "Creating Account..." : "Sign Up"}
                  </button>
                </form>

                <p className="text-center mt-8 text-sm text-gray-600">
                  Already have an account?
                  <a
                    href="#"
                    onClick={handleFlipToSignin}
                    className="font-medium text-purple-600 hover:text-purple-500"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
      `}</style>
    </div>
  );
};

export default AuthPage;
