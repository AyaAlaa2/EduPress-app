import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import BlogDetailsPage from "./components/blogDetailes/BlogDetailsPage";
import HomePage from "./components/homePage/HomePage";
import CoursesPage from "./components/courses/CoursesPage";
import CourseDetailesPage from "./components/courseDetailes/CourseDetailesPage";
import Error from "./components/Error";
import FAQPage from "./components/faq/FAQPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUs from "./components/contactUs/ContactUs";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";
import SearchResult from "./components/search/SearchResult";
import LoginPage from "./components/registerPages/LoginPage";
import Signup from "./components/registerPages/Signup";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/course/:courseId" element={<CourseDetailesPage />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
