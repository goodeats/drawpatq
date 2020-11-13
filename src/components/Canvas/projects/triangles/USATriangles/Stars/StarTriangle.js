import React from "react";
import Triangle from "../../../../shapes/Triangle";

// the white stars we all love

const StarTriangle = (props) => {
  return (
    <Triangle
      top={props.top}
      left={props.left}
      lowerWidth={props.lowerWidth}
      upperWidth={props.upperWidth}
      color={props.color}
    />
  );
}

export default StarTriangle;
