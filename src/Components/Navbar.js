import React from "react";
import Search from "./Navbar/Search";
import logo from "../image/logo.svg";
import minilogo from "../image/minilogo.svg";
import { Icon } from "../image/Icons";
import CenterContent from "./Navbar/CenterContent";
import { Link } from "react-router-dom";
import { useScroll } from "hooks/useWindowDimensions";

function Navbar() {
  const scrollPosition = useScroll();

  return (
    <nav
      className={`h-16 px-4 flex space-x-4 justify-between items-center	box-border transition-[background] duration-500 fixed w-full z-30 ${
        scrollPosition > 0
          ? "border-b-[1px] border-b-whitealpha3 bg-black"
          : "bg-transparent "
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="ml-[2px] min-w-[80px] min-h-[24px] smlmax:hidden"
          />
          <img
            src={minilogo}
            alt="logo"
            className="ml-[2px] min-w-[24px] min-h-[24px] smlmin:hidden"
          />
        </Link>
      </div>
      <div className=" pl-20 tabletmax:pl-0 text-whitealpha1 flex items-center  font-[700] text-[20px] leading-[1.2]">
        <CenterContent link="/">Home</CenterContent>
        <CenterContent>Explore</CenterContent>
        <CenterContent>Library</CenterContent>
        <Search />
        <span className="tabletmin:hidden text-white">
          <CenterContent>Chromecast</CenterContent>
        </span>
      </div>
      <div className="h-16 flex items-center justify-between">
        <div className="p-2 tabletmax:hidden items-start">
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
          className="bg-white font-bold text-sm rounded-sm text-3 h-8 inline-flex items-center min-w-[81.25px] whitespace-nowrap text-lightthemetext py-0 px-4 ml-2 tabletmax:mr-5"
        >
          SIGN IN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
