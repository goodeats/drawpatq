import React from "react";
import Stripe from "./Stripe";
// import Styles from "../../../../../utils/Styles";
import Maths from "../../../../../../utils/Maths";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";

const StripeComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export default class Stripes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 13,
      flagHeight: 60 / 1.9,
    };
  }

  getStripeYAxis(height, stripeIndex, stripeCount, top) {
    const stripePosition = Distance.positionAtIndex(height, stripeIndex, stripeCount);
    const yAxis = stripePosition + top;
    return yAxis + "%";
  }

  getStripeColor(isRed){
    return isRed ? this.props.red : this.props.white;
  }

  // fill triangles to give line a width
  setTriangleWidths() {
    const flagHeightToPx = window.innerHeight * (this.state.flagHeight / 100);
    const baseHeight = flagHeightToPx / this.state.count;
    const buffer = 5;
    const lowerWidth = baseHeight - buffer;
    const upperWidth = baseHeight + buffer;
    return { lowerWidth: lowerWidth, upperWidth: upperWidth };
  }

  render() {
    const count = this.state.count;
    const triangleWidths = this.setTriangleWidths();

    return (
      <StripeComponent id="stripes">
        {Array.from(Array(count), (e, stripeIndex) => {
          const yAxis = this.getStripeYAxis(100, stripeIndex, count, 0);
          const colorState = this.getStripeColor(Maths.isEven(stripeIndex))

          return (
            <Stripe
              key={`stripe-${stripeIndex}`}
              id={`stripe-${stripeIndex}`}
              yAxis={yAxis}
              colorState={colorState}
              triangleWidths={triangleWidths}
            />
          );
        })}
      </StripeComponent>
    );
  }
}
