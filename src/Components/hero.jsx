import React from "react";
import heroBg from '../assets/images/banner.png'

function Hero() {
  return (
    <section className="relative  text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        
      ></div>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[120vh] text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Body <br /> Transform Your Life
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Join <span className="text-red-500 font-semibold">StayFit Gym</span> today and start your journey towards a healthier, stronger, and more confident you.
        </p>
        <div className="flex gap-4">
          <a
            href="#services"
            className="px-6 py-3 text-white bg-red-600 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
