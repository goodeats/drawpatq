import React from 'react';
import styled from "styled-components";
import Attributes from './XmasTreeTriangles/Attributes'
import Arrays from '../../../../utils/Arrays';
import Tree from './XmasTreeTriangles/Tree/Tree';
import Triangle from '../../shapes/Triangle';

// lessons learned and things I got out of this:

// demo styles:

// TODO:
// * a11y 👏
// * change Distance to Sizes (maybe)

const BrandComponent = styled.div`
  position: absolute;
  height: 60%;
  width: 60%;
  top: 20%;
  left: 20%;
  cursor: pointer;
`;

export default class BrandTrianges extends React.Component {

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
    console.log('yo');
  }

  render() {
    const state = this.state;
    const colors = state.colors;
    const counts = state.counts;
    const sizes = state.sizes;
    const dimensions = state.dimensions;

    return (
      <BrandComponent id="brand" onClick={this.onClick}>
        <Triangle
          lowerWidth={sizes.lowerWidth}
          upperWidth={sizes.upperWidth}
        />
      </BrandComponent>
    );
  }
}
