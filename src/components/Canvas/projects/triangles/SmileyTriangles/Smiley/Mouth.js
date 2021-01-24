import React from "react";
import styled from "styled-components";
import Arrays from "../../../../../../utils/Arrays";
import Triangle from "../../../../shapes/Triangle";
import Styles from "../../../../../../utils/Styles";

const MouthComponent = styled.div`
  position: absolute;
  height: 20%;
  width: 20%;
  top: 60%;
  left: 40%;
  overflow: hidden;
  border-radius: 100%;
`;

const Mouth = (props) => {

  const counts = props.counts;
  const triangles = counts.triangles;

  const sizes = props.sizes;
  const lowerWidth = sizes.lowerWidth;
  const upperWidth = sizes.upperWidth;

  const colors = props.colors;
  const colorAttributes = colors.attributes;

  const getColor = (index) => {
    return Arrays.rotateNextIndex(colors.colors, index);
  }

  const eyeTopPos = (leftEye) => {
    return 2 / 3;
  }

  const eyeLeftPos = (leftEye) => {
    return ( ( props.left ? 1 : 2 ) / 3 );
  }

  return (
    <MouthComponent>
      {Array.from(Array(triangles), (e, index) => {
        const colorState = getColor(index)
        const color = Styles.setColorByAttributeIndex(colorState, index, colorAttributes);
        return (
          <Triangle
            key={`line-${index}`}
            color={color}
            // top={sizes.containerHeight * eyeTopPos(props.left)}
            // left={sizes.containerHeight * eyeLeftPos(props.left)}
            // posUnit={'%'}
            lowerWidth={lowerWidth}
            upperWidth={upperWidth}
          />
        )
      })}
    </MouthComponent>
  );
}

export default Mouth;
