import React from "react";
import LeftContent from "./Bottomplayer/LeftContent";

function BottomPlayer() {
  return (
    <div className="h-[72px] bg-black1 fixed w-full bottom-0 z-30 flex justify-between">
      <LeftContent />
    </div>
  );
}

export default BottomPlayer;
