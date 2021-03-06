import { nanoid } from "@reduxjs/toolkit";
import ScrollButtons from "Components/Home/ScrollButtons";
import React from "react";
import { useRef } from "react";

import genres from "../../static/genres";

function GenresList() {
  const ref = useRef(0);
  return (
    <div className="flex flex-col justify-between ytmedmax:w-[1264px] ytmedmin:w-[1489px] mx-auto z-20 mb-16">
      <div className="flex justify-between">
        <h1 className="text-white text-[45px] font-bold">Moods &amp; Genres</h1>
        <ScrollButtons
          element={ref}
          offsetNumber={1}
          elementNumber={13}
          marginValue={4.5}
        />
      </div>

      <div
        ref={ref}
        className="flex mylist w-full overflow-x-scroll scroll-smooth mt-5"
      >
        <div className="flex w-full h-full">
          {[...Array(13)].map((_, i) => {
            return (
              <div
                className={`ytmedmin:w-[226.33px] ytmedmax:w-[190.66px] justify-start mr-6 flex-shrink-0 ${
                  i === 13 - 1 && "mr-16"
                }`}
                key={nanoid()}
              >
                {genres?.map((genre, j) => {
                  if (j >= i * 4 && j <= (i + 1) * 4 - 1)
                    return (
                      <div
                        className="flex bg-whitealpha5 hover:bg-black1 py-3 mb-4 pl-5 items-start  whitespace-pre-line max-h-12 font-bold text-[14px] border-l-[6px] rounded"
                        style={{ borderColor: genre.color }}
                        key={nanoid()}
                      >
                        {genre.text}
                      </div>
                    );
                  return "";
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GenresList;
