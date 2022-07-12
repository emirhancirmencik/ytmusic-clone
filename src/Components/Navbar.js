import React from "react";
import Search from "./Navbar/Search";
import logo from "../image/logo.svg";
import minilogo from "../image/minilogo.svg";
import { Icon } from "../image/Icons";
import CenterContent from "./Navbar/CenterContent";
import { Link } from "react-router-dom";
import { useScroll } from "hooks/useWindowDimensions";
import { useSelector } from "react-redux";

function Navbar() {
  const scrollPosition = useScroll();
  const isDropdownActive = useSelector((state) => state.dom.isDropdownActive);
  const fullScreen = useSelector((state) => state.dom.fullScreen);

  return (
    <nav
      className={`h-16 px-4 flex justify-between w-fullnotscroll items-center	box-border transition-[background] duration-500 fixed z-30 ${
        scrollPosition.y > 0 || fullScreen
          ? "border-b-[1px] border-b-whitealpha3 bg-black"
          : "bg-transparent "
      } ${isDropdownActive && "w-fullnotscroll"}`}
    >
      <div className="inline-block z-10 ">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="min-w-[80px] mb-[3px] min-h-[24px] smlmax:hidden"
          />
          <img
            src={minilogo}
            alt="logo"
            className="min-w-[24px] mb-[3px] min-h-[24px] smlmin:hidden"
          />
        </Link>
      </div>
      <div className="tabletmax:pl-0 text-whitealpha1 flex items-center absolute w-fullnotscroll justify-center font-[700] text-[20px] leading-[1.2]">
        <CenterContent link="/">Home</CenterContent>
        <CenterContent>Explore</CenterContent>
        <CenterContent>Library</CenterContent>
        <Search />
        <span className="tabletmin:hidden text-white">
          <CenterContent>Chromecast</CenterContent>
        </span>
      </div>
      <div className="h-16 flex z-10 items-center justify-between">
        <div className="p-2 tabletmax:hidden items-start">
          <span href="/" className="cursor-pointer">
            <Icon sizex="26" name="chromecast" />
          </span>
        </div>
        <div className="p-2">
          <span href="/" className="cursor-pointer">
            <Icon sizex="26" name="settings" />
          </span>
        </div>
        <span
          href="#."
          className="bg-white cursor-pointer font-bold text-sm rounded-sm text-3 h-8 inline-flex items-center min-w-[81.25px] whitespace-nowrap text-lightthemetext py-0 px-4 ml-2 tabletmax:mr-5"
        >
          SIGN IN
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
