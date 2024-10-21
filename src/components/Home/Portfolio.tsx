"use client";
import React, { useState } from "react";
import BreakoutGame from "../Breakout";

import "./Portfolio.css";

//@ts-ignore
const Cube = ({ frontImage, backImage, height }) => {
  const [currentSide, setCurrentSide] = useState("show-front");
  const isCube = height === "250px";

  const handleMouseEnter = () => {
    setCurrentSide("show-bottom");
  };

  const handleMouseLeave = () => {
    setCurrentSide("show-front");
  };

  if (isCube) {
    // Render the cube template
    return (
      <div className={`scene`}>
        <div
          className={`cube ${currentSide}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="cube__face cube__face--front cursor-pointer"
            style={{
              backgroundImage: `url(${frontImage})`,
            }}
          >
            front
          </div>
          <div
            className="cube__face cube__face--bottom"
            style={{
              backgroundImage: `url(${backImage})`,
            }}
          >
            bottom
          </div>
        </div>
      </div>
    );
  } else {
    //template for non-cubes
    return (
      <div
        style={{
          width: "100%",
          height: height,
          backgroundColor: "lightgray",
        }}
      >
        {/* <div>front</div> */}
        <BreakoutGame />
      </div>
    );
  }
};

export default Cube;
