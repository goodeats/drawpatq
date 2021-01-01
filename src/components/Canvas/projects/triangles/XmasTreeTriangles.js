import React from 'react';
import styled from "styled-components";
import Attributes from './XmasTreeTriangles/Attributes'
import Arrays from '../../../../utils/Arrays';
import Tree from './XmasTreeTriangles/Tree/Tree';

// lessons learned and things I got out of this:

// demo styles:

// TODO:
// * a11y 👏
// * change Distance to Sizes (maybe)


// https://www.ushistory.org/betsy/flagetiq3.html

const XmasTreeComponent = styled.div`
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
      dimensions: Attributes.dimensions(this.props.theme)
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
    const dimensions = state.dimensions;

    return (
      <XmasTreeComponent id="xmastree" style={dimensions.container} onClick={this.onClick}>
        <Tree
          colors={colors.tree}
          counts={counts.tree}
          sizes={sizes.tree}
        />
      </XmasTreeComponent>
    );
  }
}
