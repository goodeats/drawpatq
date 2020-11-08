import React from 'react';
import styled from "styled-components";
import Styles from '../../../../utils/Styles';
import Stripes from "./USATriangles/Stripes/Stripes";
import Stars from "./USATriangles/Stars/Stars";

const USAComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
`;

export default class USATriangles extends React.Component {

  // https://flagcolor.com/american-flag-colors/
  RED = { r: 191, g: 13, b: 62 }
  WHITE = { r: 255, g: 255, b: 255 }
  BLUE = { r: 10, g: 49, b: 97 }

  COLOR_STATE_RED = Styles.buildColor(this.RED, { includeDefaultStyle: true })
  COLOR_STATE_WHITE = Styles.buildColor(this.WHITE, { includeDefaultStyle: true })
  COLOR_STATE_BLUE = Styles.buildColor(this.BLUE, { includeDefaultStyle: true })

  constructor(props) {
    super(props)
    this.state = {
      position: {
        height: 60, // make equal to diff of min/max top
        width: 60, // make equal to diff of min/max left
        minTop: 20,
        maxTop: 80,
        minLeft: 20,
        maxLeft: 80
      },
    };
  }

  render() {
    return (
      <USAComponent id="usa">
        <Stripes
          position={this.state.position}
          red={this.COLOR_STATE_RED}
          white={this.COLOR_STATE_WHITE}
        />
        <Stars
          blue={this.COLOR_STATE_BLUE}
          white={this.COLOR_STATE_WHITE}
        />
      </USAComponent>
    );
  }
}
