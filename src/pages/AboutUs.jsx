import React from "react";
import AboutContent from "../components/AboutContent";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900">
            About Us
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-0">
          {/* Replace with your content */}
          <AboutContent />
          {/* /End replace */}
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
