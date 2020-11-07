import React from "react";
import StarClusterLine from "./StarClusterLine";
import Styles from "../../../../../../utils/Styles";
import Maths from "../../../../../../utils/Maths";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";

// render 5 stars and display:none for the last star where it should be 4
// shift content down half a star

const StarClusterLinesComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: turquoise;
`;

export default class StarClusterLines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 11,
    };
  }

  getXAxis(length, index, count, top) {
    const stripePosition = Distance.positionAtIndex(length, index, count);
    const yAxis = stripePosition + top;
    return yAxis + "%";
  }

  render() {
    const count = this.state.count;
    return (
      <StarClusterLinesComponent id='star-lines'>
        {Array.from(Array(count), (e, starClusterLineIndex) => {
          const starCount = Maths.isEven(starClusterLineIndex) ? 5 : 4;
          const xAxis = this.getXAxis(100, starClusterLineIndex, count - 1, 0);
          const id = `star-cluster-line-${starClusterLineIndex}`;

          return (
            <StarClusterLine
              key={id}
              id={id}
              xAxis={xAxis}
              colorState={this.props.colorState}
              starCount={starCount}
            />
          )
        })}
      </StarClusterLinesComponent>
    );
  }
}
