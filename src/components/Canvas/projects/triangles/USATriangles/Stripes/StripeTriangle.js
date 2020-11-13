import React from "react";
import Triangle from "../../../../shapes/Triangle";

// the many triangles that fill in a red or white stripe
// left defaults to random (along stripe line)

const StripeTriangle = (props) => {

  // prevent calc effort by Triangle for random top
  // it won't matter when absolute positioned on a line
  const top = 0;

  return (
    <Triangle
      top={top}
      lowerWidth={props.lowerWidth}
      upperWidth={props.upperWidth}
      color={props.color}
    />
  );
}

export default StripeTriangle;
