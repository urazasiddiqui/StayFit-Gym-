import React from "react";
import cardioBg from "../assets/images/cardio.jpg"; // ✅ import your cardio background image

function Contact() {
  return (
    <section
      id="contact"
      // className="relative py-24 pb-40  text-gray-900  flex items-center"
      className="relative min-h-[130vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-gray-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${cardioBg})`,
        }}
      ></div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Get In <span className="text-red-600">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-left font-semibold mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>

          {/* Gym Location */}
          <div className="flex flex-col justify-center text-white">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="mb-2">🏋 StayFit Gym</p>
            <p className="mb-2">123 Fitness Street, Rawalpindi, Pakistan</p>
            <p className="mb-4">📞 +92 300 1234567</p>
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.27352368318853!2d73.04403770688741!3d33.62725867593083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9545afc780b5%3A0x4be44d46071248c8!2sAnsar%20Sons%20Bangles%20Store!5e0!3m2!1sen!2s!4v1757049812810!5m2!1sen!2s"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
