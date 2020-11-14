import React from "react";
import StarClusterLine from "./StarClusterLine";
import Maths from "../../../../../../utils/Maths";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";

// render 5 stars and display:none for the last star where it should be 4
// shift content down half a star

// shrink this
const StarClusterLinesComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const StarClusterLines = (props) => {

  const count = props.count; // columns of stars

  const starWidth = props.starWidth;
  const maxStars = props.maxStars;
  const colorState = props.colorState;
  const colorAttributes = props.colorAttributes;

  return (
    <StarClusterLinesComponent id="star-lines" style={props.style}>
      {Array.from(Array(count), (e, index) => {
        const xAxis = Distance.positionAtIndexOnAxis(index, count);
        const id = `star-cluster-line-${index}`;

        return (
          <StarClusterLine
            key={id}
            id={id}
            xAxis={xAxis}
            starWidth={starWidth}
            colorState={colorState}
            maxStars={maxStars}
            fourStars={Maths.isOdd(index)}
            colorAttributes={colorAttributes}
            clusterTriangleCount={5}
          />
        );
      })}
    </StarClusterLinesComponent>
  );
}

export default StarClusterLines;
