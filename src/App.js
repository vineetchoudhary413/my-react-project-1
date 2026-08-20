/*import React from "react";
import Header from "./component/Header";
//import SearchSection from "./component/SearchSection";
import CategoryList from "./component/CategoryList";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SearchSection />
      <CategoryList />
    </div>
  );
 }

export default App;*/
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import SearchResults from "./pages/SearchResults";

function App() {
  // The search text is "state" that lives here, in the parent component,
  // because both the Navbar (which needs to update it) and the
  // SearchResults page (which needs to read it) need access to it.
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearchChange(value) {
    setSearchTerm(value);
    // As soon as the user starts typing, take them to the results page.
    if (value.trim() !== "") {
      navigate("/search");
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route
            path="/category/:categoryId/:articleId"
            element={<ArticlePage />}
          />
          <Route
            path="/search"
            element={<SearchResults searchTerm={searchTerm} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;



