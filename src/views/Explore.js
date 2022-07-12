import GenresList from "Components/Explore/GenresList";
import NavButtons from "Components/Explore/NavButtons";
import List from "Components/Home/List";
import React from "react";

function Explore() {
  return (
    <div className="w-full flex flex-col pt-16">
      <NavButtons />
      <List header="New albums & singles" type="Album" />
      <List header="Top songs" type="Mini" />
      <GenresList />
      <List header="Trending" type="Mini" />
      <List header="New music videos" type="Album" />
    </div>
  );
}

export default Explore;
