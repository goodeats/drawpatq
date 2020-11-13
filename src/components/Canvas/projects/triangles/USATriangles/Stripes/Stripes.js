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

  const count = props.count;
  const stripeWidth = props.stripeWidth;

  const getStripeColor = (index) => {
    return Arrays.rotateNextIndex(props.colors, index);
  }

  return (
    <StripesComponent id="stripes">
      {Array.from(Array(count), (e, index) => {
        const yAxis = Distance.positionAtIndexOnAxis(index, count);
        const colorState = getStripeColor(index)

        return (
          <Stripe
            key={`stripe-${index}`}
            id={`stripe-${index}`}
            triangleCount={300}
            yAxis={yAxis}
            stripeWidth={stripeWidth}
            colorState={colorState}
            colorAttributes={['none', 'shade', 'tint']}
          />
        );
      })}
    </StripesComponent>
  );
}

export default Stripes;
