import React from "react";
import StarTriangle from "./StarTriangle";
import Styles from "../../../../../../utils/Styles";
import Arrays from "../../../../../../utils/Arrays";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";
import StarCluster from "./StarCluster";

// render 5 stars and display:none for the last star where it should be 4
// shift content down half a star

const StarClusterLineComponent = styled.div`
  position: absolute;
  height: 100%;
  /* border-right: 10px solid violet; */
  top: 0;
  /* background: lightcyan; */
`;

export default class StarClusterLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      starCount: props.starCount,
      fourStarPadding: props.fourStarPadding,
      style: {
        left: props.xAxis,
      },
    };
  }

  getYAxis(height, index, count, top) {
    const stripePosition = Distance.positionAtIndex(height, index, count);
    const yAxis = stripePosition + top;
    return yAxis + "%";
  }

  // I did not math this, just eye-balled
  padFourStars(){
    return this.state.fourStarPadding;
  }

  render() {
    const count = this.state.count;
    const fourStars = this.state.starCount === 4;
    const padding = fourStars ? this.padFourStars() : 0;

    return (
      <StarClusterLineComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(count), (e, clusterLineIndex) => {
          const yAxis = this.getYAxis(100, clusterLineIndex, count - 1, padding);
          const id = `star-cluster-${clusterLineIndex}`;

          const hideCluster = fourStars && count === clusterLineIndex + 1;
          return (
            <StarCluster
              key={id}
              id={id}
              yAxis={yAxis}
              colorState={this.props.colorState}
              hideCluster={hideCluster}
            />
          );
        })}
      </StarClusterLineComponent>
    );
  }
}
