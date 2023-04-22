import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullArticle from "./pages/FullArticle";
import NewsArticles from "./pages/NewsArticles";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewsArticles />} />
        <Route path="/fullArticle" element={<FullArticle />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
