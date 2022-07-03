import React from "react";
import { Icon } from "../../image/Icons";

function Search() {
  return (
    <div className="p-1 flex items-center justify-between cursor-pointer hover:text-white">
      <div className="py-3 px-4">
        <Icon sizex="32" sizey="26" name="search" />
      </div>
      <div className="">Search</div>
    </div>
  );
}

export default Search;
