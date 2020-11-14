import React from 'react';
import styled from "styled-components";
import Styles from '../../../../utils/Styles';
import Stripes from "./USATriangles/Stripes/Stripes";
import Stars from "./USATriangles/Stars/Stars";
import Distance from '../../../../utils/Distance';

// lessons learned and things I got out of this:
// * much more robust utils for extensible functions for future designs
// * most components can really just be const's, not classes
// ** aching refactor to break out of one file then convert to const
// ** and that's ok, was very "startupy" about it; prototyping > method
// ** classes might be good for interactive ideas
// * put calculations in a separate file just like the components
// ** with calcs' entry into components connecting on this file (the base project file)

// demo styles:
// brand the shade/tint/none style rotation
// solid colors (no shade/tint)
// random colors -- kaleidoscope effect (on stripes/stars/both)
// grayscale
// add signature
// take screenshot


// https://www.ushistory.org/betsy/flagetiq3.html

const USAComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
`;

export default class USATriangles extends React.Component {

  WIDTH = 60;
  HEIGHT = 60 / 1.9;
  STRIPE_COUNT = 13;
  BLUE_HEIGHT_STRIPE_INDEX = 7;

  // https://flagcolor.com/american-flag-colors/
  RED = { r: 191, g: 13, b: 62 };
  WHITE = { r: 255, g: 255, b: 255 };
  BLUE = { r: 10, g: 49, b: 97 };

  COLOR_STATE_RED = Styles.buildColor(this.RED, { includeDefaultStyle: true });
  COLOR_STATE_WHITE = Styles.buildColor(this.WHITE, { includeDefaultStyle: true });
  COLOR_STATE_BLUE = Styles.buildColor(this.BLUE, { includeDefaultStyle: true });

  COLOR_ATTRIBUTES = ['none', 'shade', 'tint'];

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

  // fill triangles to give line a width
  // TODO: make configurable in case I want "extra thin/thick" for example
  stripeWidth = () => {
    const flagHeightToPx = window.innerHeight * (this.HEIGHT / 100);
    const baseHeight = flagHeightToPx / this.STRIPE_COUNT;
    return Distance.setRandomTriangleWidths(baseHeight, { buffer: 5 })
  }

  triangleSizes(){
    return {
      stars: {
        blue: {
          lowerWidth: 10,
          upperWidth: 20
        },
        stars: {
          lowerWidth: 5,
          upperWidth: 10
        }
      }
    }
  }

  counts(){
    return {
      stars: {
        blue: 4000,
        stars: 5,
        starColumns: 11
      }
    }
  }

  styleStars = () => {
    // https://www.inchcalculator.com/american-flag-size-proportions-calculator/
    const paddedWidth = 6.3;
    const paddedHeight = 5.4;

    return {
      stars: {
        height: this.BLUE_HEIGHT_STRIPE_INDEX / this.STRIPE_COUNT * 100 + "%",
        width: 0.76 / 1.9 * 100 + "%"
      },
      starClusterLines: {
        height: Distance.paddedLength(100, paddedHeight) + "%",
        width: Distance.paddedLength(100, paddedWidth) + "%",
        top: paddedHeight + "%",
        left: paddedWidth + "%"
      }
    }
  }

  render() {
    return (
      <USAComponent id="usa" style={this.state.style}>
        <Stripes
          count={13}
          colors={[this.COLOR_STATE_RED, this.COLOR_STATE_WHITE]}
          red={this.COLOR_STATE_RED}
          white={this.COLOR_STATE_WHITE}
          stripeWidth={this.stripeWidth()}
        />
        <Stars
          blue={this.COLOR_STATE_BLUE}
          white={this.COLOR_STATE_WHITE}
          colorAttributes={this.COLOR_ATTRIBUTES}
          style={this.styleStars()}
          countStarColumn={11}
          sizes={this.triangleSizes().stars}
          counts={this.counts().stars}
        />
      </USAComponent>
    );
  }
}
