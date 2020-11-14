import React from "react";
import styled from "styled-components";
import Blue from "./Blue";
import StarClusterLines from "./StarClusterLines";

const StarsComponent = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  left: 0;
`;

const Stars = (props) => {

  const style = props.style;
  const styleStars = style.stars;
  const styleStarClusterLines = style.starClusterLines;

  const counts = props.counts;
  const colors = props.colors;

  return (
    <StarsComponent id="stars" style={styleStars}>
      <Blue
        count={counts.blue}
        color={colors.blue}
        starWidth={props.sizes.blue}
        colorAttributes={props.colorAttributes}
      />
      <StarClusterLines
        maxStars={counts.stars}
        count={counts.starColumns}
        style={styleStarClusterLines}
        starWidth={props.sizes.stars}
        colorState={colors.white}
        colorAttributes={props.colorAttributes}
      />
    </StarsComponent>
  );
}

export default Stars;
