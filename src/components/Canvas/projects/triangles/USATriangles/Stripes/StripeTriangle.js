import React from "react";
import Triangle from "../../../../shapes/Triangle";

// the many triangles that fill in a red or white stripe
// left defaults to random (along stripe line)

const StripeTriangle = (props) => {

  return (
    <Triangle
      top={props.top}
      lowerWidth={props.lowerWidth}
      upperWidth={props.upperWidth}
      color={props.color}
    />
  );
}

export default StripeTriangle;