import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TeamContent from "../components/TeamContent";

const Team = () => {
  return (
    <div>
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900">
            Teams
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-full mx-auto py-6 sm:px-6 lg:px-0">
          {/* Replace with your content */}
            <TeamContent />
          {/* /End replace */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
