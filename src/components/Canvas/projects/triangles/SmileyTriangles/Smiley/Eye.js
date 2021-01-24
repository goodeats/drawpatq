import React from "react";
import styled from "styled-components";
import Arrays from "../../../../../../utils/Arrays";
import Triangle from "../../../../shapes/Triangle";
import Styles from "../../../../../../utils/Styles";

const EyeComponent = styled.div`
  position: absolute;
  overflow: hidden;
  border-radius: 100%;
`;

const Eye = (props) => {

  const counts = props.counts;
  const triangles = counts.triangles;

  const sizes = props.sizes;
  const containerHeight = sizes.containerHeight;
  const lowerWidth = sizes.lowerWidth;
  const upperWidth = sizes.upperWidth;

  const colors = props.colors;
  const colorAttributes = colors.attributes;

  const getColor = (index) => {
    return Arrays.rotateNextIndex(colors.colors, index);
  }

  const eyeTopPos = (leftEye) => {
    return `calc(100% / 3)`;
  }

  const eyeLeftPos = (props) => {
    const leftFactor = props.side === 'left' ? 1 : 2;
    const leftPct = ( 100 * ( leftFactor / 3 )) + '%'
    const widthPx = upperWidth * 2 + 'px';
    return `calc(${leftPct} - ${widthPx})`;
  }

  const styles = (props) => {
    return {
      height: containerHeight + 'px',
      width: containerHeight + 'px',
      top: eyeTopPos(props),
      left: eyeLeftPos(props),

    }
  }

  return (
    <EyeComponent
      id={`eye-${props.side}`}
      style={styles(props)}
    >
      {Array.from(Array(triangles), (e, index) => {
        const colorState = getColor(index)
        const color = Styles.setColorByAttributeIndex(colorState, index, colorAttributes);
        return (
          <Triangle
            key={`tri-${index}`}
            color={color}
            lowerWidth={lowerWidth}
            upperWidth={upperWidth}
          />
        )
      })}
    </EyeComponent>
  );
}

export default Eye;
