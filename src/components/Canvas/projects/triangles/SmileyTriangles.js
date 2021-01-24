import React from 'react';
import styled from "styled-components";
import Attributes from './SmileyTriangles/Attributes'
import Arrays from '../../../../utils/Arrays';
import Face from './SmileyTriangles/Smiley/Face';
import Eye from './SmileyTriangles/Smiley/Eye';
import Mouth from './SmileyTriangles/Smiley/Mouth';

// lessons learned and things I got out of this:

// demo styles:

// TODO:
// * a11y 👏
// * change Distance to Sizes (maybe)


// https://www.ushistory.org/betsy/flagetiq3.html

const SmileyComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px;
  cursor: pointer;
`;

export default class USATriangles extends React.Component {

  THEMES = ['solid', 'rainbow', 'grayscale']

  constructor(props) {
    super(props);
    this.state = {
      colors: Attributes.colors(this.props.theme),
      counts: Attributes.counts(this.props),
      sizes: Attributes.sizes(this.props),
    };
  }

  onClick = () => {
    console.log('😮');
    const currentThemeIndex = this.THEMES.indexOf(this.props.theme);
    const newTheme = Arrays.rotateNextIndex(this.THEMES, currentThemeIndex + 1)
    this.props.onThemeChange(newTheme)
  }

  render() {
    const state = this.state;
    const colors = state.colors;
    const counts = state.counts;
    const sizes = state.sizes;

    return (
      <SmileyComponent id="smiley" onClick={this.onClick}>
        <Face
          colors={colors.face}
          counts={counts.face}
          sizes={sizes.face}
        />
        <Eye
          side={'left'}
          colors={colors.eye}
          counts={counts.eye}
          sizes={sizes.eye}
          yoyo={true}
        />
        <Eye
          side={'right'}
          colors={colors.eye}
          counts={counts.eye}
          sizes={sizes.eye}
        />
        <Mouth
          colors={colors.mouth}
          counts={counts.mouth}
          sizes={sizes.mouth}
        />

        {/* this is perfect, keep this - just list this */}
        <span style={{
          top: 0,
          left: '150%',
        }}>😮</span>
      </SmileyComponent>
    );
  }
}
