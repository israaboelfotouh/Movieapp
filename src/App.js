import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Wishlist from "./Components/Wishlist";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";

import "./css/navbar.css";
import "./css/Search.css";
import "./css/MoviList.css";
import "./css/MovieDetails.css";
// import "./css/MoviDetails.css"; // تأكد من استيراد أي CSS خاص بتفاصيل الفيلم

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
