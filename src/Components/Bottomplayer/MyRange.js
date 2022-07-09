import React from "react";

import { Range, getTrackBackground } from "react-range";

function MyRange({ value, step, min, max, onChange, colors, styles }) {
  return (
    <div className="group">
      {" "}
      <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={(values) => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="h-9 flex w-full"
            style={{
              ...props.style,
            }}
          >
            <div
              ref={props.ref}
              className={`h-[2px] w-full self-center bg-youtubered ${styles[0]}`}
              style={{
                background: getTrackBackground({
                  values: [value],
                  colors,
                  min,
                  max,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged, index }) =>
          index === 0 && (
            <div
              {...props}
              className={`h-3 w-3 ${styles[1]} ${
                !isDragged ? "opacity-0" : ""
              } justify-center items-center box-border focus:outline-none`}
              style={{
                ...props.style,
                cursor: "pointer",
              }}
            >
              {console.log(props)}
            </div>
          )
        }
      />
    </div>
  );
}

export default MyRange;
