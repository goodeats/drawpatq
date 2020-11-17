import React from "react";
import styled from "styled-components";
import Styles from '../../../../../../utils/Styles'
import Triangle from '../../../../shapes/Triangle';

// randomly placed blue triangles to fill the background of the stars

const BlueComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Blue = (props) => {
  const starWidth = props.starWidth;
  const lowerWidth = starWidth.lowerWidth;
  const upperWidth = starWidth.upperWidth;

  const colorState = props.color;
  const randomColor = colorState.random;
  // have option to flatten colors
  const colorAttributes = props.colorAttributes || [];

  return(
    <BlueComponent id="container-blue-background">
      {Array.from(Array(props.count), (e, index) => {
        const randomColorState = randomColor ? Styles.getRandomColorState() : null;
        const color = Styles.setColorByAttributeIndex(randomColorState || colorState, index, colorAttributes);

        return <Triangle
          key={`blue-${index}`}
          lowerWidth={lowerWidth}
          upperWidth={upperWidth}
          color={color}
        />
      })}
    </BlueComponent>
  )
}

export default Blue;
