import React from "react";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";
import StarCluster from "./StarCluster";

// render 5 stars and display:none for the last star where it should be 4
// shift content down half a star

const StarClusterLineComponent = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
`;

const StarClusterLine = (props) => {

  const count = props.maxStars;
  const fourStars = props.fourStars;
  const starWidth = props.starWidth;
  const clusterTriangleCount = props.clusterTriangleCount;

  // napkin math will do
  const padFourStars = () => {
    return fourStars ? (1 / 4 * 100 / 2) : 0;
  }

  return (
    <StarClusterLineComponent id={props.id} style={{ left: props.xAxis}}>
      {Array.from(Array(count), (e, index) => {
        const yAxis = Distance.positionAtIndexOnAxis(index, count, 100, padFourStars());
        const hideCluster = fourStars && index === count - 1;
        const id = `star-cluster-${index}`;

        return (
          <StarCluster
            key={id}
            id={id}
            count={clusterTriangleCount}
            yAxis={yAxis}
            starWidth={starWidth}
            colorState={props.colorState}
            colorAttributes={props.colorAttributes}
            hideCluster={hideCluster}
          />
        );
      })}
    </StarClusterLineComponent>
  );
}

export default StarClusterLine;
