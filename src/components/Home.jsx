import React from "react";
import Navbar from "./Layout/Navbar";
import ArticlePublisher from "./section/ArticlePublisher";
import Footer from "./Layout/Footer";
const Home = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navbar />
      <ArticlePublisher />
      <Footer />
    </div>
  );
};

export default Home;
