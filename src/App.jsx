import React from "react";
import Hero from "./components/section/Hero";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import TopNewArticles from "./components/section/TopNewArticles";
const App = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <TopNewArticles />
      <Footer />
    </div>
  );
};

export default App;
