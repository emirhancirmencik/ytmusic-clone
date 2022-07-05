import React from "react";
import List from "Components/Home/List";

function Home() {
  return (
    <div className="w-full flex flex-col overflow-y-auto pt-16">
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
