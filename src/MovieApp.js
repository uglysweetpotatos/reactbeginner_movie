import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MovieVideo from "./routes/MovieVideo";
import EmptyPage from "./components/EmptyPage";
import Login from "./routes/login";

function MovieApp() {
  return (
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
        <Route path={`/Movie`} element={<Home />} />
        <Route path="/MovieVideo/:id" element={<MovieVideo />} />
        <Route path="*" element={<EmptyPage />} />
      </Routes>
    </Router>
  );
}

export default MovieApp;
