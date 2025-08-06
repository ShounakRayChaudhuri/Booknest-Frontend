// src/App.jsx
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import Reviews from "./components/Reviews";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Layout from "./components/Layout";
import SearchResults from "./components/SearchResults"; // ✅ new import

function App() {
  const [authUser] = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        {/* Layout-wrapped routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/search/:category" element={<SearchResults />} />
        </Route>

        {/* Standalone route */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;


