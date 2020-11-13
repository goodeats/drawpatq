import React from "react";
import Triangle from "../../../../shapes/Triangle";

// the white stars we all love placed specifically on the x,y axis of the star cluster

const StarTriangle = (props) => {

  // prevent calc effort by Triangle for random top,left
  // it won't matter when absolute positioned on a dot
  const pos = 0;

  return (
    <Triangle
      top={pos}
      left={pos}
      lowerWidth={props.lowerWidth}
      upperWidth={props.upperWidth}
      color={props.color}
    />
  );
}

export default StarTriangle;
