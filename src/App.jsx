import { Routes, Route } from "react-router-dom";
import BlogPage from "./components/Blog/BlogPage";
import BlogDetailsPage from "./components/BlogDetails/BlogDetailsPage";
import HomePage from "./components/homePage/HomePage";
import CoursesPage from './components/Courses/CoursesPage';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:slug" element={<BlogDetailsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Routes>
  );
}
