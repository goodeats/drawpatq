import React from "react";
import Distance from "../../../../../../utils/Distance";
import Triangle from "../../../../shapes/Triangle";

// the many triangles that fill in a red or white stripe
// left defaults to random (along stripe line)

const StripeTriangle = (props) => {

  // prevent calc effort by Triangle for random top
  // it won't matter when absolute positioned on a line
  const top = 0;

  const sizes = props.sizes;
  return (
    <Triangle
      top={top}
      lowerWidth={sizes.lowerWidth}
      upperWidth={sizes.upperWidth}
      color={props.color}
    />
  );
}

export default StripeTriangle;
