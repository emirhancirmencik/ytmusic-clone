import React from "react";
import LeftContent from "./Bottomplayer/LeftContent";
import RightContent from "./Bottomplayer/RightContent";
import CenterContent from "./Bottomplayer/CenterContent";

function BottomPlayer() {
  return (
    <div className="h-[72px] bg-black1 fixed w-full bottom-0 z-30 flex justify-between">
      <LeftContent />
      <CenterContent />
      <RightContent />
    </div>
  );
}

export default BottomPlayer;
