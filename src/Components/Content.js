import React from "react";
import Navbar from "Components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home";
import Explore from "../views/Explore";
import Library from "../views/Library";

function Content() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </main>
  );
}

export default Content;
