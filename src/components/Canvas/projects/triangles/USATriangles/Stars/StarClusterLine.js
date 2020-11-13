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
      fourStars: props.starCount === 4,
      style: {
        left: props.xAxis,
      },
    };
  }

  // napkin math will do
  padFourStars(){
    return this.state.fourStars ? (1 / 4 * 100 / 2) : 0;
  }

  render() {
    const count = this.state.count;
    const fourStars = this.state.fourStars;
    const starWidth = this.props.starWidth;

    return (
      <StarClusterLineComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(count), (e, index) => {
          const yAxis = Distance.positionAtIndexOnAxis(index, count, 100, this.padFourStars());
          const id = `star-cluster-${index}`;

          const hideCluster = fourStars && index === count - 1;
          return (
            <StarCluster
              key={id}
              id={id}
              count={10}
              yAxis={yAxis}
              starWidth={starWidth}
              colorState={this.props.colorState}
              colorAttributes={this.props.colorAttributes}
              hideCluster={hideCluster}
            />
          );
        })}
      </StarClusterLineComponent>
    );
  }
}
