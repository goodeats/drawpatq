import React from "react";
import styled from "styled-components";
import Distance from '../utils/Distance';
import Brand from './Canvas/projects/brand/Brand000';
import Colors from "../utils/Colors";

const WatermarkComponent = styled.a`
  height: ${(props) => props.style.height || '100px'};
  width: ${(props) => props.style.height || '100px'};
  position: absolute;
  bottom: ${(props) => props.style.height || '100px'};
  right: ${(props) => props.style.height || '100px'};
  padding: ${(props) => props.style.padding || 0};
  background: ${(props) => Colors.tintPrimary };
         -o-transition: all .2s ease;
     -moz-transition: all .2s ease;
  -webkit-transition: all .2s ease;
          transition: all .2s ease;

  &:hover {
    background: ${(props) => Colors.primary };;
  }
  border-radius: 9px; /* iPhone apps */

  /* outline: 1px solid red; */
  cursor: pointer;
  /* all child elements too */
  * {
    cursor: pointer;
  }
  z-index: 2;
`;

const WatermarkContainer = styled.div`
  position: relative;
`;

export default class Watermark extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: 50
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.setStyles();
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  setStyles(){
    const style = this.state.style;
    const height = style.height;
    // make it equilateral to match the brand shape
    const width = Distance.equilateralWidth(height);
    this.setStyle("height", height + 'px');
    this.setStyle("width", width + 'px');

    // give extra cushion on the bottom since the brand content is currently spilling out a bit down there
    // maybe fix if you care later
    const padding = height / 5;
    const paddingStyle = `${padding}px ${padding}px ${padding * 2}px`;
    this.setStyle("padding", paddingStyle)
  }

  handleClick(){
    this.props.onClick();
  }

  render() {
    return (
      <WatermarkComponent style={this.state.style} onClick={this.handleClick}>
        <WatermarkContainer>
          <Brand height={this.state.style.height / 2} />
        </WatermarkContainer>
      </WatermarkComponent>
    );
  }
}
