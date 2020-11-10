import React from "react";
import Triangle from "../../../../shapes/Triangle";

// the many triangles that fill in a red or white stripe

export default class StripeTriangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
    };
  }

  render() {
    return (
      <Triangle
        top={this.props.top}
        lowerWidth={this.props.lowerWidth}
        upperWidth={this.props.upperWidth}
        color={this.props.color}
      />
    );
  }
}
