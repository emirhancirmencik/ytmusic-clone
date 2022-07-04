import React from "react";
import { NavLink } from "react-router-dom";

function CenterContent(props) {
  return (
    <NavLink
      to={`${props.link ? props.link : props.children.toLowerCase()}`}
      className={({ isActive }) => (isActive ? "text-white" : undefined)}
    >
      <div className={`mx-5 mt-2 cursor-pointer hover:text-white`}>
        {props.children}
      </div>
    </NavLink>
  );
}

export default CenterContent;
