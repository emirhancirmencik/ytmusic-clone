import React from "react";
import Search from "./Navbar/Search";
import logo from "../image/logo.svg";
import { Icon } from "../image/Icons";
import CenterContent from "./Navbar/CenterContent";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="h-16 px-4 flex space-x-4 justify-between items-center	box-border">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            width={89}
            height={24}
            alt="logo"
            className="mt-1 ml-[2px]"
          />
        </Link>
      </div>
      <div className="h-12 pl-20 text-whitealpha1 flex items-center justify-between font-[700] text-[22px]">
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
