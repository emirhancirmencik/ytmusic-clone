import React from "react";
import { Link } from "react-router-dom";

function CenterContent(props) {
  return (
    <Link to={`${props.link ? props.link : props.children.toLowerCase()}`}>
      <div className={`mx-5 mt-2 cursor-pointer hover:text-white`}>
        {props.children}
      </div>
    </Link>
  );
}

export default CenterContent;
