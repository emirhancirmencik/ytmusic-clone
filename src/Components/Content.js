import React, { useEffect } from "react";
import Navbar from "Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Explore from "../views/Explore";
import Library from "../views/Library";
import Dropdown from "./Dropdown";

function Content() {
  return (
    <main className="pb-96">
      <Dropdown />
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
