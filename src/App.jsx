import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/blog/BlogPage";
import BlogDetailsPage from "./components/blogDetailes/BlogDetailsPage";
import HomePage from "./components/homePage/HomePage";
import CoursesPage from "./components/courses/CoursesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Routes>
  );
};

export default App;
