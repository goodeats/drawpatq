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
  const sizes = props.sizes;

  // quick and dirty way to flush union to upper left
  // noticed that setting left like this was unneccessary
  styleStars.top = sizes.blue.upperWidth / -2 + 'px';
  const styleStarClusterLines = style.starClusterLines;

  const counts = props.counts;
  const colors = props.colors;

  return (
    <StarsComponent id="stars" style={styleStars}>
      <Blue
        count={counts.blue}
        color={colors.blue}
        starWidth={sizes.blue}
        colorAttributes={colors.attributes}
      />
      <StarClusterLines
        maxStars={counts.stars}
        count={counts.starColumns}
        style={styleStarClusterLines}
        starWidth={sizes.stars}
        colorState={colors.white}
        colorAttributes={colors.attributes}
      />
    </StarsComponent>
  );
}

export default Stars;
