import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./components/core/Home";
import Footer from "./components/core/Footer";
import Contact from "./components/core/Contact";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./pages/SingleBlog";
import Register from "./pages/Register";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />

          <Route path="/blogs/:id" element={<SingleBlog />} />

          {/* AUTH */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
