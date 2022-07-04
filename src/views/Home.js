import React from "react";
import MiniList from "Components/Home/MiniList";

function Home() {
  return (
    <div className="w-full flex flex-col overflow-y-auto">
      <MiniList strapline="START RADIO FROM A SONG" header="Quick picks" />
      <MiniList strapline="START RADIO FROM A SONG" header="Quick picks" />
      <MiniList strapline="START RADIO FROM A SONG" header="Quick picks" />
    </div>
  );
}

export default Home;
