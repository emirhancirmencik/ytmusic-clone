import React, { useRef } from "react";
import { Icon } from "../../image/Icons";
import AlbumListElement from "./AlbumList/AlbumListElement";
import MiniListElement from "./MiniList/MiniListElement";
import ScrollButtons from "./ScrollButtons";

function List(props) {
  const ref = useRef(0);
  const type = props.type;

  return (
    <div className="w-[1489px] pt-8 mx-auto">
      {props.strapline && (
        <div
          className={`${
            props.strapline.length === 0 ? "d-none" : ""
          } text-grey2 mb-[2px] text-[17px] p-1`}
        >
          {props.strapline}
        </div>
      )}
      <div className="flex justify-between">
        <h1 className="text-white text-[45px] font-bold">{props.header}</h1>
        <ScrollButtons element={ref} offsetNumber={6} elementNumber={18} />
      </div>
      <div
        ref={ref}
        className="flex w-full overflow-x-hidden scroll-smooth mt-5"
      >
        {type === "Mini" ? (
          <>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
            <div className="flex flex-col w-1/3 flex-shrink-0">
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
              <MiniListElement />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-shrink-0">
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
              <AlbumListElement />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default List;
