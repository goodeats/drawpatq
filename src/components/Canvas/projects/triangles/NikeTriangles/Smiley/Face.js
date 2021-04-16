import React from "react";
import styled from "styled-components";
import Arrays from "../../../../../../utils/Arrays";
import Triangle from "../../../../shapes/Triangle";
import Styles from "../../../../../../utils/Styles";

const FaceComponent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  border-radius: 100%;
`;

const Face = (props) => {

  const counts = props.counts;
  const triangles = counts.triangles;

  const sizes = props.sizes;
  const lowerWidth = sizes.lowerWidth;
  const upperWidth = sizes.upperWidth;

  const colors = props.colors;
  const colorAttributes = colors.attributes;

  const getFaceColor = (index) => {
    return Arrays.rotateNextIndex(colors.colors, index);
  }

  return (
    <FaceComponent id="face">
      {Array.from(Array(triangles), (e, index) => {
        const colorState = getFaceColor(index)
        const color = Styles.setColorByAttributeIndex(colorState, index, colorAttributes);
        return (
          <Triangle
            key={`line-${index}`}
            color={color}
            lowerWidth={lowerWidth}
            upperWidth={upperWidth}
          />
        )
      })}
    </FaceComponent>
  );
}

export default Face;
