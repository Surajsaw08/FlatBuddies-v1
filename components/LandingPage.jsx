import React from "react";
import Navbar from "../LnadingPage_components/Navbar";
import Hero from "../LnadingPage_components/Hero";
import Stats from "../LnadingPage_components/Stats";
import Features from "../LnadingPage_components/Features";
import Cities from "../LnadingPage_components/Cities";
import HowItWorks from "../LnadingPage_components/HowItsWork";
import Showcase from "../LnadingPage_components/ShowCase";
import Testimonials from "../LnadingPage_components/Testimonial";
import FAQ from "../LnadingPage_components/Faqs";
import IndianCulture from "../LnadingPage_components/IndianCultures";
import CTA from "../LnadingPage_components/Cta";
import Footer from "../LnadingPage_components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Cities />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <FAQ />
      <IndianCulture />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
