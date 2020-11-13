import React from "react";
import StripeTriangle from "./StripeTriangle";
import Styles from "../../../../../../utils/Styles";
import styled from "styled-components";

const StripeComponent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;

const Stripe = (props) => {

  // upper/lower widths of triangles along stripe line
  const stripeWidth = props.stripeWidth;

  // colors will rotate evenly among the attributes passed in
  const colorState = props.colorState;
  const colorAttributes = props.colorAttributes || [];

  return (
    <StripeComponent id={props.id} style={{top: props.yAxis}}>
      {Array.from(Array(props.triangleCount), (e, index) => {
        // shade/tint stripe triangles
        const color = Styles.setColorByAttributeIndex(colorState, index, colorAttributes);

        return (
          <StripeTriangle
            key={`stripe-tri-${index}`}
            color={color}
            lowerWidth={stripeWidth.lowerWidth}
            upperWidth={stripeWidth.upperWidth}
          />
        );
      })}
    </StripeComponent>
  );
}

export default Stripe;
