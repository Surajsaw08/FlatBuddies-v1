// components/FAQ.js
import React, { useState } from "react";

const faqs = [
  {
    question: "How does FlatBuddies verify users?",
    answer:
      "We verify all users through a multi-step process that includes phone verification, ID proof verification (Aadhaar/PAN), and social media profile verification. For property owners, we also verify property documents to ensure authenticity.",
  },
  {
    question: "Is my security deposit safe?",
    answer:
      "Yes, when you pay through our platform, we hold the security deposit in an escrow account. It's only released to the property owner after you've moved in and confirmed that everything is as advertised. In case of disputes, our resolution team steps in.",
  },
  {
    question: "How does the compatibility matching work?",
    answer:
      "Our algorithm matches flatmates based on lifestyle preferences, habits, interests, and schedules. We consider factors like sleeping patterns, cleanliness expectations, socializing preferences, and dietary habits to ensure compatible living arrangements.",
  },
  {
    question: "Are the rental agreements legally binding?",
    answer:
      "Yes, our digital rental agreements are legally binding and comply with Indian rental laws. They include e-signatures that are valid under the Information Technology Act, 2000. We also offer state-specific agreements that adhere to local rental regulations.",
  },
  {
    question: "What fees does FlatBuddies charge?",
    answer:
      "For tenants, browsing listings and creating a profile is free. We charge a service fee of 2% on the first month's rent when you successfully find accommodation. For property owners, listing is free, but we charge a 5% commission on the first month's rent when a tenant is found.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about using FlatBuddies.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`mt-4 ${activeIndex === index ? "block" : "hidden"}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
