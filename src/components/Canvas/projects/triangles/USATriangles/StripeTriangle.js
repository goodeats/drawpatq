import React from "react";
import Triangle from "../../../shapes/Triangle";

const StripeTriangle = (props) => {
  return (
    <Triangle
      // key={`stripe-${index}`}
      top={props.top}
      left={props.left}
      lowerWidth={10}
      upperWidth={20}
      color={props.color}
    />
  );
};

export default StripeTriangle;
