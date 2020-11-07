import React from 'react';
import Triangle from '../../shapes/Triangle';
import Styles from '../../../../utils/Styles';
import Maths from '../../../../utils/Maths';
import Arrays from '../../../../utils/Arrays';
import Distance from '../../../../utils/Distance';
import Stripes from "./USATriangles/Stripes/Stripes";
import Stars from "./USATriangles/Stars/Stars";
import styled from 'styled-components';
import Blue from './USATriangles/Stars/Blue';
import StarTriangle from './USATriangles/Stars/StarTriangle';
import StarCluster from './USATriangles/Stars/StarCluster';
import StarClusterLine from './USATriangles/Stars/StarClusterLine';
import StarClusterLines from './USATriangles/Stars/StarClusterLines';

const USAComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
  background: red;
`;
export default class USATriangles extends React.Component {

  // https://flagcolor.com/american-flag-colors/
  RED = { r: 191, g: 13, b: 62 }
  WHITE = { r: 255, g: 255, b: 255 }
  BLUE = { r: 10, g: 49, b: 97 }
  XWHITE = { r: 0, g: 0, b: 255 }

  COLOR_STATE_RED = Styles.buildColor(this.RED, { includeDefaultStyle: true })
  COLOR_STATE_WHITE = Styles.buildColor(this.WHITE, { includeDefaultStyle: true })
  COLOR_STATE_BLUE = Styles.buildColor(this.BLUE, { includeDefaultStyle: true })
  COLOR_STATE_XWHITE = Styles.buildColor(this.XWHITE, { includeDefaultStyle: true })

  constructor(props) {
    super(props)
    this.state = {
      position: {
        minTop: 20,
        maxTop: 80,
        minLeft: 20,
        maxLeft: 80,
        height: 60, // make equal to diff of min/max top
        width: 60, // make equal to diff of min/max left
        background: 'gold'
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
          white={this.COLOR_STATE_XWHITE}
        />
      </USAComponent>
    );
  }
}
