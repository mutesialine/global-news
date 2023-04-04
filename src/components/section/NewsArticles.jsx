import React from "react";
import Footer from "../Layout/Footer";
import Navbar from "../layout/Navbar";
import ArticleList from "./ArticleList";
import ArticlePublisher from "./ArticlePublisher";

const NewsArticles = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Navbar />
      <ArticlePublisher />
      <ArticleList />
      <Footer />
    </div>
  );
};

export default NewsArticles;
