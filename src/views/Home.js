import React from "react";
import List from "Components/Home/List";
function Home() {
  return (
    <div className="w-full flex flex-col pt-64">
      <div className="absolute left-0 top-0 right-0 h-[720px] z-[1] bg-cover bg-[center_top_-3rem] bg-mybg">
        <div className="w-full h-full bg-gradient-to-b from-blackalpha1 to-black"></div>
      </div>
      <List
        strapline="START RADIO FROM A SONG"
        header="Quick picks"
        type="Album"
      />
      <List header="Quick picks" type="Mini" />
      <List header="Quick picks" type="Mini" />
      <List header="Quick picks" type="Mini" />
    </div>
  );
}

export default Home;
