import React from "react";
import StripeTriangle from "./StripeTriangle";
import Styles from "../../../../../../utils/Styles";
import styled from "styled-components";
import Colors from "../../../../../../utils/Colors";

const StripeComponent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;

const Stripe = (props) => {

  // upper/lower widths of triangles along stripe line
  const sizes = props.sizes;

  // colors will rotate evenly among the attributes passed in
  const colorState = props.colorState;
  const randomColor = colorState.random;
  // have option to flatten colors
  const colorAttributes = props.colorAttributes || [];

  return (
    <StripeComponent id={props.id} style={{top: props.yAxis}}>
      {Array.from(Array(props.triangleCount), (e, index) => {
        // shade/tint stripe triangles
        const randomColorState = randomColor ? Styles.getRandomColorState() : null;
        const color = Styles.setColorByAttributeIndex(randomColorState || colorState, index, colorAttributes);

        return (
          <StripeTriangle
            key={`stripe-tri-${index}`}
            color={color}
            sizes={sizes}
          />
        );
      })}
    </StripeComponent>
  );
}

export default Stripe;
