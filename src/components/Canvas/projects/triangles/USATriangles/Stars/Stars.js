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

  // https://www.inchcalculator.com/american-flag-size-proportions-calculator/
  setStyles() {
    const height =
      (this.BLUE_HEIGHT_STRIPE_INDEX / this.STRIPE_COUNT) * 100 + "%";
    this.setStyle("height", height);

    const width = (0.76 / 1.9) * 100 + "%";
    this.setStyle("width", width);
  }

  render() {
    return (
      <StarsComponent id="stars" style={this.state.style}>
        <Blue blue={this.props.blue} />
        <StarClusterLines colorState={this.props.white} />
      </StarsComponent>
    );
  }
}
