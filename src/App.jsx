import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullArticle from "./pages/FullArticle";
import NewsArticles from "./pages/NewsArticles";
import Layout from "./components/layouts/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsArticles />} />
          <Route path="/fullArticle" element={<FullArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
