import React from "react";
import servicesBg from "../assets/images/hero.jpg"; // Section background
import strengthBg from "../assets/images/strength.jpg";
import cardioBg from "../assets/images/cardio.jpg";
import yogaBg from "../assets/images/flexibility.jpg";
import trainerBg from "../assets/images/trainer.jpg";

function OurServices() {
  const services = [
    {
      title: "Strength Training",
      description:
        "Build muscle, increase strength, and push your limits with our modern equipment and guided workout plans.",
      bg: strengthBg,
    },
    {
      title: "Cardio & Endurance",
      description:
        "Burn calories, improve stamina, and stay in shape with our advanced cardio equipment and HIIT sessions.",
      bg: cardioBg,
    },
    {
      title: "Yoga & Flexibility",
      description:
        "Relax your mind and body with yoga and stretching classes designed for all fitness levels.",
      bg: yogaBg,
    },
    {
      title: "Personal Training",
      description:
        "Get customized workout and nutrition plans tailored to your personal goals with our certified trainers.",
      bg: trainerBg,
    },
  ];

  return (
    <section
      id="services"
       className="relative min-h-[130vh] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      {/* Dark overlay for readability */}
      

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-red-600">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our <span className="text-white">Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer transform transition duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${service.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Text content */}
              <div className="relative z-10 flex flex-col justify-center items-center h-full p-6 text-white bg-black/30 group-hover:bg-black/0 transition">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-sm text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
