import React from "react";
import Stripe from "./Stripe";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";
import Arrays from "../../../../../../utils/Arrays";

const StripesComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Stripes = (props) => {

  const counts = props.counts;
  const stripes = counts.stripes;
  const stripeTriangles = counts.stripeTriangles

  const sizes = props.sizes;
  const colors = props.colors;
  const colorAttributes = colors.attributes;

  const getStripeColor = (index) => {
    return Arrays.rotateNextIndex(colors.stripeColors, index);
  }

  return (
    <StripesComponent id="stripes">
      {Array.from(Array(stripes), (e, index) => {
        const yAxis = Distance.positionAtIndexOnAxis(index, stripes);
        const colorState = getStripeColor(index)

        return (
          <Stripe
            key={`stripe-${index}`}
            id={`stripe-${index}`}
            triangleCount={stripeTriangles}
            yAxis={yAxis}
            sizes={sizes}
            colorState={colorState}
            colorAttributes={colorAttributes}
          />
        );
      })}
    </StripesComponent>
  );
}

export default Stripes;
