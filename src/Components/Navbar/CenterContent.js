import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "image/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setFullScreen } from "redux/dom/domSlicer";

function CenterContent(props) {
  const fullScreen = useSelector((state) => state.dom.fullScreen);
  const dispatch = useDispatch();

  return (
    <NavLink
      to={`${props.link ? props.link : props.children.toLowerCase()}`}
      className={({ isActive }) => (isActive ? "text-white" : undefined)}
    >
      <div
        className={`mx-5 cursor-pointer hover:text-white`}
        onClick={
          fullScreen
            ? () => dispatch(setFullScreen())
            : () => {
                return;
              }
        }
      >
        <span className="tabletmax:hidden">{props.children}</span>

        <span className="tabletmin:hidden">
          <Icon sizex="24px" name={`${props.children.toLowerCase()}`} />
        </span>
      </div>
    </NavLink>
  );
}

export default CenterContent;
