import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer";
import FullArticle from "./pages/FullArticle";
import NewsArticles from "./pages/NewsArticles";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsArticles />} />
          <Route path="/full" element={<FullArticle />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
