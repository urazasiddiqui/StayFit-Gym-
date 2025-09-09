import React from "react";
import aboutBg from "../assets/images/offer.png"; // ✅ Import image

function About() {
  return (
    <section
      id="about"
      className="relative min-h-[130vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      
    >
      {/* Background image layer (FULL COVER) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      ></div>

     

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
          About <span className="text-yellow-400">StayFit Gym</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-slide-up">
          At <span className="text-red-500 font-semibold">StayFit</span>, we
          believe fitness is more than just exercise — it’s a lifestyle. We
          provide expert trainers, world-class equipment, and a supportive
          community to help you achieve your goals.
        </p>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:bg-red-600 hover:text-black transition duration-300">
            <h3 className="text-xl font-semibold">💪 Top Equipment</h3>
            <p className="text-sm mt-2 text-gray-200">
              Train with the best modern fitness equipment.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:bg-red-600 hover:text-black transition duration-300">
            <h3 className="text-xl font-semibold">🏋️ Expert Trainers</h3>
            <p className="text-sm mt-2 text-gray-200">
              Learn from certified, experienced professionals.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:bg-red-600 hover:text-black transition duration-300">
            <h3 className="text-xl font-semibold">🤝 Group Classes</h3>
            <p className="text-sm mt-2 text-gray-200">
              Stay motivated with fun and engaging sessions.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <a
          href="#services"
          className="px-8 py-4 bg-red-600 text-black font-bold text-lg rounded-full shadow-xl hover:bg-red-500 transition duration-300"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
}

export default About;
