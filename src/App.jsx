import React from "react";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/section/Hero";
const App = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
