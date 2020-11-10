import React from 'react';
import styled from "styled-components";
import Styles from '../../../../utils/Styles';
import Stripes from "./USATriangles/Stripes/Stripes";
import Stars from "./USATriangles/Stars/Stars";

// https://www.ushistory.org/betsy/flagetiq3.html

const USAComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
`;

export default class USATriangles extends React.Component {
  // https://flagcolor.com/american-flag-colors/
  RED = { r: 191, g: 13, b: 62 };
  WHITE = { r: 255, g: 255, b: 255 };
  BLUE = { r: 10, g: 49, b: 97 };

  COLOR_STATE_RED = Styles.buildColor(this.RED, { includeDefaultStyle: true });
  COLOR_STATE_WHITE = Styles.buildColor(this.WHITE, { includeDefaultStyle: true });
  COLOR_STATE_BLUE = Styles.buildColor(this.BLUE, { includeDefaultStyle: true });

  constructor(props) {
    super(props);
    this.state = {
      width: 60,
      position: {
        height: 60, // make equal to diff of min/max top
        width: 60, // make equal to diff of min/max left
        minTop: 20,
        maxTop: 80,
        minLeft: 20,
        maxLeft: 80,
      },
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
    const width = this.state.width;
    const height = 60 || width / 1.9; // real height looks really weird
    const position = this.state.position;
    this.setStyle("height", `${height}%`);
    this.setStyle("width", `${width}%`);
    this.setStyle("top", `${(100 - height) / 2}%`);
    this.setStyle("left", `${position.minLeft}%`);
  }

  render() {
    return (
      <USAComponent id="usa" style={this.state.style}>
        <Stripes
          position={this.state.position}
          red={this.COLOR_STATE_RED}
          white={this.COLOR_STATE_WHITE}
        />
        <Stars blue={this.COLOR_STATE_BLUE} white={this.COLOR_STATE_WHITE} />
      </USAComponent>
    );
  }
}
