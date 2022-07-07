import React, { useRef } from "react";
import { Icon } from "../../../image/Icons";
import { useDispatch } from "react-redux";
import {
  setButtonPosition,
  setDropdownActive,
} from "../../../redux/dom/domSlicer";
import { useRect, useScroll } from "../../../hooks/useWindowDimensions";
function Buttons() {
  const myref = useRef(0);
  const dispatch = useDispatch();
  const pos = useRect(myref);
  const scroll = useScroll();
  function handleClick() {
    dispatch(
      setButtonPosition({
        x: pos.x + 138,
        y: pos.y + 42,
        scroll: pos.y,
      })
    );

    console.log(
      myref.current.parentElement.parentElement.parentElement.scrollLeft
    );

    dispatch(setDropdownActive());
  }
  return (
    <div
      ref={myref}
      className="hidden ml-auto pr-5 mr-5 w-1/3 justify-between items-center text-whitealpha1 group-hover:inline-flex"
    >
      {" "}
      <span className="cursor-pointer">
        <Icon name="like" sizex="20px" className="" />
      </span>
      <span className="cursor-pointer rotate-180">
        <Icon name="like" sizex="20px" className="" />
      </span>
      <span className="cursor-pointer" onClick={handleClick}>
        <Icon name="settings" sizex="20px" />
      </span>
    </div>
  );
}

export default Buttons;
