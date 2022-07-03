import React from "react";
import Search from "./Navbar/Search";

import { Icon } from "../image/Icons";
function Navbar() {
  return (
    <nav className="h-16 px-4 flex space-x-4 justify-between items-center	box-border">
      <div className="flex items-center">
        <a href="/" className="px-2">
          <Icon sizex="80" sizey="24" name="logo" />
        </a>
      </div>
      <div className="h-12  text-whitealpha1 flex items-center justify-between font-bold text-xl">
        <div className="mx-4 cursor-pointer hover:text-white">Home</div>
        <div className="mx-4 cursor-pointer hover:text-white">Explore</div>
        <div className="mx-4 cursor-pointer hover:text-white">Library</div>
        <Search />
      </div>
      <div className="h-16 flex items-center justify-between">
        <div className="p-2">
          <a href="/">
            <Icon sizex="24" name="chromecast" />
          </a>
        </div>
        <div className="p-2">
          <a href="/">
            <Icon sizex="24" name="settings" />
          </a>
        </div>
        <a
          href="/"
          className="bg-white font-bold text-sm rounded-sm text-3 h-8 inline-flex items-center text-lightthemetext py-0 px-4 ml-2"
        >
          SIGN IN
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
