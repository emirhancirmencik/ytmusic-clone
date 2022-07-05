import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "image/Icons";

function CenterContent(props) {
  return (
    <NavLink
      to={`${props.link ? props.link : props.children.toLowerCase()}`}
      className={({ isActive }) => (isActive ? "text-white" : undefined)}
    >
      <div className={`mx-5 cursor-pointer hover:text-white`}>
        <span className="tabletmax:hidden">{props.children}</span>

        <span className="tabletmin:hidden">
          <Icon sizex="24px" name={`${props.children.toLowerCase()}`} />
        </span>
      </div>
    </NavLink>
  );
}

export default CenterContent;
