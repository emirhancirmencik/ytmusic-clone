import List from "Components/Home/List";
import React from "react";

function Library() {
  return (
    <div className="w-full flex flex-col pt-32">
      <List header="Recent Activity" type="Album" />
    </div>
  );
}

export default Library;
