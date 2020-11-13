import React from "react";
import StarTriangle from "./StarTriangle";
import Styles from "../../../../../../utils/Styles";
import styled from "styled-components";

const StarClusterComponent = styled.div`
  position: absolute;
`;

const StarCluster = (props) => {

  // upper/lower widths of triangles upon star cluster
  const starWidth = props.starWidth;
  const lowerWidth = starWidth.lowerWidth;
  const upperWidth = starWidth.upperWidth;

  const colorState = props.colorState;
  const colorAttributes = props.colorAttributes;

  const setStyle = () => {
    const style = { top: props.yAxis }
    if (props.hideCluster) style.display = 'none'
    return style;
  }

  return (
    <StarClusterComponent id={props.id} style={setStyle()}>
      {Array.from(Array(props.count), (e, index) => {
        const color = Styles.setColorByAttributeIndex(colorState, index, colorAttributes);
        const id = `star-cluster-tri-${index}`;

        return (
          <StarTriangle
            key={id}
            id={id}
            color={color}
            lowerWidth={lowerWidth}
            upperWidth={upperWidth}
          />
        );
      })}
    </StarClusterComponent>
  );
}

export default StarCluster;
