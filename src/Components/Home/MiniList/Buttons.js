import React, { useRef } from "react";
import { Icon } from "../../../image/Icons";
import { useDispatch } from "react-redux";
import {
  setButtonPosition,
  setDropdownActive,
} from "../../../redux/dom/domSlicer";
import {
  useRect,
  useWindowDimensions,
} from "../../../hooks/useWindowDimensions";
function Buttons() {
  const myref = useRef(0);
  const dispatch = useDispatch();
  const pos = useRect(myref);
  const windowDimension = useWindowDimensions();

  function handleClick() {
    let x = pos.x + 15;
    let y = pos.y + 24;

    if (y + 418 > windowDimension.height) {
      y += -442;
    }

    if (x + 240 > windowDimension.width) {
      x += -264;
    }

    dispatch(
      setButtonPosition({
        x: x,
        y: y,
      })
    );

    dispatch(setDropdownActive("mini"));
  }
  return (
    <div className="hidden ml-auto pr-5 mr-5 w-1/3 justify-between items-center text-whitealpha1 group-hover:inline-flex">
      {" "}
      <span className="cursor-pointer">
        <Icon name="like" sizex="20px" className="" />
      </span>
      <span className="cursor-pointer rotate-180">
        <Icon name="like" sizex="20px" className="" />
      </span>
      <span ref={myref} className="cursor-pointer" onClick={handleClick}>
        <Icon name="settings" sizex="20px" />
      </span>
    </div>
  );
}

export default Buttons;
