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

export default class StarClusterLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      starCount: props.starCount,
      fourStars: props.starCount === 4,
      style: {
        left: props.xAxis,
      },
    };
  }

  getYAxis(height, index, count) {
    const stripePosition = Distance.positionAtIndex(height, index, count);
    const yAxis = stripePosition + this.padFourStars();
    return yAxis + "%";
  }

  // napkin math will do
  padFourStars(){
    return this.state.fourStars ? (1 / 4 * 100 / 2) : 0;
  }

  render() {
    const count = this.state.count;
    const fourStars = this.state.fourStars;

    return (
      <StarClusterLineComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(count), (e, clusterLineIndex) => {
          const yAxis = this.getYAxis(100, clusterLineIndex, count - 1);
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
