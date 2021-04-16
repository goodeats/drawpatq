import React from 'react';
import styled from "styled-components";
import Attributes from './NikeTriangles/Attributes'
import Arrays from '../../../../utils/Arrays';
import Styles from '../../../../utils/Styles';
import Triangle from '../../shapes/Triangle';
import NikeLogo from '../../../../nike.svg';

const NikeComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px;
  cursor: pointer;
`;

const SwooshImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 50%;
  margin: 0 auto;
`;

const SwooshContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  display: flex;
  align-items: center;
`;

const TriangleContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 1;
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
      <NikeComponent id="nike" onClick={this.onClick}>
        <TriangleContainer>
          {Array.from(Array(counts.background.triangles), (e, index) => {
            const color = Styles.setColorByAttributeIndex(colors.background.color, index, colors.background.attributes);
            return <Triangle
              key={`blue-${index}`}
              lowerWidth={sizes.background.lowerWidth}
              upperWidth={sizes.background.upperWidth}
              color={color}
            />
          })}
        </TriangleContainer>

        <SwooshContainer>
          <SwooshImage
            id='swoosh'
            src={NikeLogo}
            alt={'Just do it'} />
        </SwooshContainer>
      </NikeComponent>
    );
  }
}
