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

export default class Stars extends React.Component {

  STRIPE_COUNT = 13;
  BLUE_HEIGHT_STRIPE_INDEX = 7;

  constructor(props) {
    super(props);
    this.state = {
      stripeCountBlueIndex: 7,
      stripeCount: 13,
      style: {},
    };
  }

  getStarWidth(){
    return {lowerWidth: 5, upperWidth: 10}
  }

  getBlueStarWidth(){
    return {lowerWidth: 10, upperWidth: 20}
  }

  render() {
    const starWidth = this.getStarWidth();
    const blueStarWidth = this.getBlueStarWidth();

    const style = this.props.style;
    const styleStars = style.stars;
    const styleStarClusterLines = style.starClusterLines;

    return (
      <StarsComponent id="stars" style={styleStars}>
        <Blue
          count={4000}
          color={this.props.blue}
          starWidth={blueStarWidth}
          colorAttributes={this.props.colorAttributes}
        />
        <StarClusterLines
          maxStars={5}
          count={this.props.countStarColumn}
          style={styleStarClusterLines}
          starWidth={starWidth}
          colorState={this.props.white}
          colorAttributes={this.props.colorAttributes}
        />
      </StarsComponent>
    );
  }
}
