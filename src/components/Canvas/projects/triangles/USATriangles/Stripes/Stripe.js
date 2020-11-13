import React from "react";
import StripeTriangle from "./StripeTriangle";
import Styles from "../../../../../../utils/Styles";
import Arrays from "../../../../../../utils/Arrays";
import styled from "styled-components";

const StripeComponent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
`;

export default class Stripe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: ["none", "shade", "tint"],
      count: 300,
      style: {
        top: props.yAxis,
      },
    };
  }

  setColor(index, colorState) {
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    return Styles.setColor(colorState, attribute);
  }

  render() {
    const yAxis = this.props.yAxis;
    const colorState = this.props.colorState;
    const triangleWidths = this.props.triangleWidths;

    return (
      <StripeComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(this.state.count), (e, index) => {
          // shade/tint stripe triangles
          const color = this.setColor(index, colorState);

          return (
            <StripeTriangle
              key={`stripe-tri-${index}`}
              top={yAxis}
              color={color}
              lowerWidth={triangleWidths.lowerWidth}
              upperWidth={triangleWidths.upperWidth}
            />
          );
        })}
      </StripeComponent>
    );
  }
}
