import React from "react";
import testiBg from '../assets/images/strength.jpg'
function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      price: "$20/month",
      features: [
        "Access to gym equipment",
        "1 group class per week",
        "Locker facility",
      ],
      highlight: false,
    },
    {
      name: "Standard Plan",
      price: "$40/month",
      features: [
        "Unlimited gym access",
        "3 group classes per week",
        "Personal trainer guidance",
        "Nutrition consultation",
      ],
      highlight: true, // Featured plan
    },
    {
      name: "Premium Plan",
      price: "$60/month",
      features: [
        "Unlimited gym & classes",
        "Dedicated personal trainer",
        "Diet & workout plan",
        "Priority support",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative min-h-[130vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-gray-900"
      style={{ backgroundImage: `url(${testiBg})` }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>  */}
      <div className="max-w-6xl mx-auto px-6 text-center rounded-2xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Membership <span className="text-red-600">Plans</span>
        </h2>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-8 border transition transform hover:scale-105 ${
                plan.highlight
                  ? "bg-black-100 text-white border-red-600"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>

              <ul className="space-y-3 mb-6 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-600 font-bold mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold shadow-md transition ${
                  plan.highlight
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-red-600 text-gray-900 hover:bg-red-600"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
