import React from "react";
import StarTriangle from "./StarTriangle";
import Styles from "../../../../../../utils/Styles";
import Arrays from "../../../../../../utils/Arrays";
import styled from "styled-components";

const StarComponent = styled.div`
  position: absolute;
`;

export default class StarCluster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: ["none", "shade", "tint"],
      count: 10,
      style: {
        top: props.yAxis,
      }
    };
  }

  setColor(index, colorState) {
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    return Styles.setColor(colorState, attribute);
  }

  render() {
    return (
      <StarComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(this.state.count), (e, index) => {
          const color = this.setColor(index, this.props.colorState);
          const id = `star-cluster-tri-${index}`;

          return (
            <StarTriangle
              key={id}
              id={id}
              top={this.state.yAxis}
              color={"gold" || color}
            />
          );
        })}
      </StarComponent>
    );
  }
}
