import React from "react";
import flexBg from '../assets/images/flexibility.jpg'
function Testimonials() {
  const testimonials = [
    {
      name: "Umair Raza",
      role: "Software Engineer",
      review:
        "StayFit Gym completely changed my lifestyle! The trainers are supportive and the environment keeps me motivated every day.",
      image: "/src/assets/images/mypic.jpeg",
    },
    {
      name: "Umair Raza",
      role: "College Student",
      review:
        "I love the group classes and the community vibe. I’ve become stronger and healthier in just 3 months!",
      image: "/src/assets/images/profile.jpg",
    },
    {
      name: "Umair Raza",
      role: "Entrepreneur",
      review:
        "The personal training sessions are top-notch. My trainer designed a program that fit perfectly with my busy schedule.",
      image: "/src/assets/images/mypic.jpeg",
    },
  ];

  return (
    <section id="testimonials" 
      className="relative min-h-[130vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${flexBg})` }}
   >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          What Our <span className="text-red-600">Members Say</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-black-100 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-4 border-yellow-500"
              />
              <p className="italic text-white mb-4">“{t.review}”</p>
              <h4 className="font-semibold text-lg">{t.name}</h4>
              <span className="text-sm text-white">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
