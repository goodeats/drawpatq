import React from 'react';
import styled from "styled-components";
import Stripes from "./USATriangles/Stripes/Stripes";
import Attributes from './XmasTreeTriangles/Attributes'
import Arrays from '../../../../utils/Arrays';

// lessons learned and things I got out of this:

// demo styles:

// TODO:
// * a11y 👏
// * change Distance to Sizes (maybe)


// https://www.ushistory.org/betsy/flagetiq3.html

const USAComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
  cursor: pointer;
`;

export default class USATriangles extends React.Component {

  THEMES = ['solid', 'rainbow', 'grayscale']

  constructor(props) {
    super(props);
    this.state = {
      colors: Attributes.colors(this.props.theme),
      counts: Attributes.counts(),
      sizes: Attributes.sizes(),
      style: Attributes.style(this.props.theme)
    };
  }

  onClick = () => {
    console.log('🇺🇸');
    const currentThemeIndex = this.THEMES.indexOf(this.props.theme);
    const newTheme = Arrays.rotateNextIndex(this.THEMES, currentThemeIndex + 1)
    this.props.onThemeChange(newTheme)
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
      </USAComponent>
    );
  }
}
