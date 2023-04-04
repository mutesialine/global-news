import React from "react";
import Home from "./components/section/Home";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
const App = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
