import React from "react";
import Triangle from "../../../../shapes/Triangle";

// the white stars we all love

const StarTriangle = (props) => {
  return (
    <Triangle
      top={props.top}
      left={props.left}
      lowerWidth={5}
      upperWidth={10}
      color={props.color}
    />
  );
}

export default StarTriangle;
