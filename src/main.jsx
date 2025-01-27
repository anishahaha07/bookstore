import React from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import BookList from "./components/BookList/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<BookList />} />
        <Route path='books/:id' element={<BookDetails />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
