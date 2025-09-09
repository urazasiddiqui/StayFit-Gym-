import React from "react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">StayFit Gym</h3>
          <p>
            Helping you achieve your fitness goals with world-class equipment,
            professional trainers, and a motivating community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/#pricing" className="hover:text-yellow-400">Pricing</a></li>
            <li><a href="/#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact</h3>
          <p>📍 123 Fitness Street, Rawalpindi</p>
          <p>📞 +92 300 1234567</p>
          <p>📧 info@stayfit.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-400">🌐</a>
            <a href="#" className="hover:text-yellow-400">📘</a>
            <a href="#" className="hover:text-yellow-400">📸</a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} StayFit Gym. All rights reserved by Umair Raza.
      </div>
    </footer>
  );
}

export default Footer;
