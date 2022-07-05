import React from "react";
import { Icon } from "../../../image/Icons";

function Buttons() {
  return (
    <div className="hidden ml-auto pr-5 mr-5 w-1/3 justify-between items-center text-whitealpha1 group-hover:inline-flex">
      {" "}
      <span className="cursor-pointer">
        <Icon name="like" sizex="20px" className="" />
      </span>
      <span className="cursor-pointer rotate-180">
        <Icon name="like" sizex="20px" className="" />
      </span>
      <span className="cursor-pointer">
        <Icon name="settings" sizex="20px" />
      </span>
    </div>
  );
}

export default Buttons;
