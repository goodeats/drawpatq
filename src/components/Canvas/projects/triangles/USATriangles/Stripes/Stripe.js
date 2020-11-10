import React from "react";
import StripeTriangle from "./StripeTriangle";
import Styles from "../../../../../../utils/Styles";
import Arrays from "../../../../../../utils/Arrays";
import styled from "styled-components";

const StripeComponent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  background: gold;
`;

export default class Stripe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: ["none", "shade", "tint"],
      count: 300,
      flagHeight: 60 / 1.9,
      stripeCount: 13,
      style: {
        top: props.yAxis,
      },
    };
  }

  setColor(index, colorState) {
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    return Styles.setColor(colorState, attribute);
  }

  setTriangleWidths() {
    const flagHeightToPx = window.innerHeight * (this.state.flagHeight / 100);
    const baseHeight = flagHeightToPx / this.state.stripeCount;
    const buffer = 5;
    const lowerWidth = baseHeight - buffer;
    const upperWidth = baseHeight + buffer;
    return { lowerWidth: lowerWidth, upperWidth: upperWidth };
  }

  render() {
    const yAxis = this.props.yAxis;
    const triangleWidths = this.setTriangleWidths()

    return (
      <StripeComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(this.state.count), (e, index) => {
          // shade/tint stripe triangles
          const color = this.setColor(index, this.props.colorState);

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
