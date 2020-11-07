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
    this.setStyle("top", this.props.yAxis);
  }

  render() {
    return (
      <Triangle
        top={this.props.top}
        lowerWidth={10}
        upperWidth={20}
        color={this.props.color}
      />
    );
  }
}
