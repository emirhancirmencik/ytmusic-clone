import React from "react";
import { Icon } from "../../image/Icons";

function DropdownElement(props) {
  return (
    <div>
      <div
        className={`hover:bg-whitealpha4 flex items-center w-full cursor-pointer`}
        href="/"
      >
        <span className="py-3 pl-4 text-whitealpha1">
          <Icon name={props.icon} sizex="24px" />
        </span>
        <span className="mx-2 text-sm font-bold"></span>
        {props.text}
      </div>
    </div>
  );
}

export default DropdownElement;
