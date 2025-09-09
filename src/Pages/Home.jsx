import React from "react";
import About from "../Components/About";
import OurServices from "../Components/OurServices";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/testimonials";
import Contact from "../Components/Contact";
import Hero from "../Components/hero";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <OurServices />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <Contact />
    </>
  );
}

export default Home;
