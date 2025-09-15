import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/core/Navbar";
import Home from "./components/core/Home";
import Footer from "./components/core/Footer";
import Contact from "./components/core/Contact";
import BlogsPage from "./pages/BlogsPage";
import SingleBlog from "./pages/SingleBlog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Admin from "./components/core/Admin";

const App = () => {
  const location = useLocation();
  const handleLayout = location.pathname.startsWith("/admin");
  console.log(handleLayout);
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsPage />} />

        <Route path="/blogs/:id" element={<SingleBlog />} />

        <Route path="/contact" element={<ContactUs />} />

        {/* AUTH */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* ADMIN */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!handleLayout && <Contact />}
      {!handleLayout && <Footer />}
    </div>
  );
};

export default App;
