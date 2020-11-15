import React from 'react';
import styled from "styled-components";
import Stripes from "./USATriangles/Stripes/Stripes";
import Stars from "./USATriangles/Stars/Stars";
import USATrianglesMaths from './USATriangles/USATrianglesMaths';

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

// TODO:
// * a11y 👏
// * change Distance to Sizes (maybe)
// * click change theme


// https://www.ushistory.org/betsy/flagetiq3.html

const USAComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
  background: fuchsia;
`;

export default class USATriangles extends React.Component {

  HEIGHT = 60 / 1.9;
  STRIPE_COUNT = 13;

  constructor(props) {
    super(props);
    this.state = {
      currentStyle: 'default' // see demo styles above
    };
  }

  onClick = () => {
    console.log('🇺🇸');
    USATrianglesMaths.hello()
    // * TODO: click change theme
  }

  render() {
    const colors = USATrianglesMaths.colors();
    const counts = USATrianglesMaths.counts();
    const sizes = USATrianglesMaths.sizes();
    const style = USATrianglesMaths.style();

    return (
      <USAComponent id="usa" style={style.flag} onClick={this.onClick}>
        <Stripes
          colors={colors.stripes}
          counts={counts.stripes}
          sizes={sizes.stripes}
        />
        <Stars
          colors={colors.stars}
          counts={counts.stars}
          sizes={sizes.stars}
          style={style.stars}
        />
      </USAComponent>
    );
  }
}
