import React from "react";
import StarClusterLine from "./StarClusterLine";
import Styles from "../../../../../../utils/Styles";
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
  background: turquoise;
`;

export default class StarClusterLines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 11,
      padding: 10,
      style: {}
    };
  }

  componentDidMount() {
    this.setStyles();
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  setStyles() {
    const padding = this.state.padding;
    const paddedLength = Distance.paddedLength(100, padding);
    this.setStyle("height", paddedLength + '%');
    this.setStyle("width", paddedLength + "%");
    this.setStyle("top", padding + "%");
    this.setStyle("left", padding + "%");
    this.setStyle("outline", "5px solid red");

  }

  getXAxis(length, index, count) {
    return Distance.positionAtIndex(length, index, count) + '%';
  }

  render() {
    const count = this.state.count;
    return (
      <StarClusterLinesComponent id="star-lines" style={this.state.style}>
        {Array.from(Array(count), (e, starClusterLineIndex) => {
          const starCount = Maths.isEven(starClusterLineIndex) ? 5 : 4;
          const xAxis = this.getXAxis(100, starClusterLineIndex, count - 1);
          const id = `star-cluster-line-${starClusterLineIndex}`;

          return (
            <StarClusterLine
              key={id}
              id={id}
              xAxis={xAxis}
              colorState={this.props.colorState}
              starCount={starCount}
            />
          );
        })}
      </StarClusterLinesComponent>
    );
  }
}
