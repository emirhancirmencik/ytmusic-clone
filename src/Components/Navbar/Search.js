import React from "react";
import { Icon } from "../../image/Icons";

function Search() {
  return (
    <div className="p-1 mt-2 flex items-center justify-between cursor-pointer hover:text-white">
      <div className="py-3 px-4">
        <Icon sizex="24" sizey="24" name="search" />
      </div>
      <div className="">Search</div>
    </div>
  );
}

export default Search;
