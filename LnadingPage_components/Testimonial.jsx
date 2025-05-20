// components/Testimonials.js
import React from "react";

const testimonials = [
  {
    quote:
      "I moved to Bangalore for my first job and was worried about finding a good place to stay. FlatBuddies made it super easy to find a flat with like-minded people. The verification process gave me peace of mind.",
    name: "Rahul Patel",
    role: "Software Engineer, Bangalore",
    initials: "RP",
    bgColor: "bg-orange-100",
    textColor: "text-orange-500",
  },
  {
    quote:
      "As a working professional in Mumbai, finding affordable housing was a nightmare until I discovered FlatBuddies. Their compatibility matching feature helped me find flatmates who have now become my good friends.",
    name: "Priya Sharma",
    role: "Marketing Manager, Mumbai",
    initials: "PS",
    bgColor: "bg-blue-100",
    textColor: "text-blue-500",
  },
  {
    quote:
      "I had a room to rent out in my flat in Delhi and was looking for a reliable flatmate. FlatBuddies' verification process helped me find a trustworthy person quickly. The digital agreement feature was a huge plus!",
    name: "Amit Kumar",
    role: "Business Owner, Delhi",
    initials: "AK",
    bgColor: "bg-green-100",
    textColor: "text-green-500",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who found their perfect flatmates and homes through
            FlatBuddies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg testimonial-card relative"
            >
              <div className="quote-mark quote-mark-left">"</div>
              <div className="quote-mark quote-mark-right">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center ${testimonial.textColor} font-bold`}
                >
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
