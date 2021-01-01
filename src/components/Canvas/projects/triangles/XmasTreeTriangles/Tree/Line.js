import React from "react";
import Styles from "../../../../../../utils/Styles";
import styled from "styled-components";
import TreeTriangle from "./TreeTriangle";

const LineComponent = styled.div`
  position: absolute;
  width: 100%;
  flex: 1;
`;

const Stripe = (props) => {

  // upper/lower widths of triangles along stripe line
  const sizes = props.sizes;

  // colors will rotate evenly among the attributes passed in
  const colorState = props.colorState;
  const randomColor = colorState.random;
  // have option to flatten colors
  const colorAttributes = props.colorAttributes || [];

  const styles = {
    width: props.xAxis,
    top: props.yAxis
  }

  return (
    <LineComponent id={props.id} style={styles}>

      {Array.from(Array(props.triangleCount), (e, index) => {
        // shade/tint stripe triangles
        const randomColorState = randomColor ? Styles.getRandomColorState() : null;
        const color = Styles.setColorByAttributeIndex(randomColorState || colorState, index, colorAttributes);

        return (
          <TreeTriangle
            key={`tree-tri-${index}`}
            color={color}
            sizes={sizes}
          />
        );
      })}
    </LineComponent>
  );
}

export default Stripe;
