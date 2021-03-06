import React from 'react';
import styled from "styled-components";
import Stripes from "./USATriangles/Stripes/Stripes";
import Stars from "./USATriangles/Stars/Stars";
import USATrianglesMaths from './USATriangles/USATrianglesMaths';
import Arrays from '../../../../utils/Arrays';

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
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export default class USATriangles extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      colors: USATrianglesMaths.colors(this.props.theme),
      counts: USATrianglesMaths.counts(),
      sizes: USATrianglesMaths.sizes(),
      style: USATrianglesMaths.style(this.props.theme)
    };
  }

  onClick = () => {
    console.log('🇺🇸');
    this.props.onThemeChange();
  }

  render() {
    const state = this.state;
    const colors = state.colors;
    const counts = state.counts;
    const sizes = state.sizes;
    const style = state.style;

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
