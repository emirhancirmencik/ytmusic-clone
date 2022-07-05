import React, { useState, useEffect } from "react";
import Search from "./Navbar/Search";
import logo from "../image/logo.svg";
import { Icon } from "../image/Icons";
import CenterContent from "./Navbar/CenterContent";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`h-16 px-4 flex  space-x-4 justify-between items-center	box-border fixed w-full bg-black z-10 ${
        scrollPosition > 0 ? "border-b-[1px] border-b-whitealpha3" : ""
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="ml-[2px] w-[80px] h-[24px]" />
        </Link>
      </div>
      <div className=" pl-20 text-whitealpha1 flex items-center justify-between font-[700] text-[20px] leading-[1.2]">
        <CenterContent link="/">Home</CenterContent>
        <CenterContent>Explore</CenterContent>
        <CenterContent>Library</CenterContent>
        <Search />
      </div>
      <div className="h-16 flex items-center justify-between">
        <div className="p-2">
          <a href="/">
            <Icon sizex="26" name="chromecast" />
          </a>
        </div>
        <div className="p-2">
          <a href="/">
            <Icon sizex="26" name="settings" />
          </a>
        </div>
        <a
          href="#."
          className="bg-white font-bold text-sm rounded-sm text-3 h-8 inline-flex items-center text-lightthemetext py-0 px-4 ml-2"
        >
          SIGN IN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
