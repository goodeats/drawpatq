import React from 'react';
import './Triangle.css';
import Colors from '../../../utils/Colors';
import Maths from '../../../utils/Maths';
import Distance from '../../../utils/Distance';
import styled from 'styled-components';

const TriangleComponent = styled.div`
  position: absolute;
`;
export default class Triangle extends React.Component {

  UPPER_WIDTH = this.props.upperWidth || 40;
  LOWER_WIDTH = this.props.lowerWidth || 10;
  TRIANGLE_WIDTH = Maths.getRandomInt(this.UPPER_WIDTH, this.LOWER_WIDTH);
  TRIANGLE_HEIGHT = Distance.equilateralHeight(this.TRIANGLE_WIDTH);

  constructor(props){
    super(props)
    this.state = {
      width: this.props.width || this.TRIANGLE_WIDTH,
      height: this.TRIANGLE_HEIGHT,
      color: this.setColor(),
      opacity: this.props.opacity || 1,
      transform: this.setTransform()
    };
  }

  componentDidMount(){
    this.setTriangleStyles()
  }

  // don't forget value could be 0
  getPropsTop(props, height){
    return props !== undefined ? props : Distance.setRandomTrianglePos(height)
  }

  getPropsLeft(props, height){
    return props !== undefined ? props : Distance.setRandomTrianglePos(height)
  }

  // need state width before these can be set
  setTriangleStyles(){
    const height = this.state.height;
    this.setState({
      arrangement: this.setArrangement(),

      // placement
      top: this.getPropsTop(this.props.top, height),
      left: this.getPropsLeft(this.props.left, height),
    });
  }

  // setting to equilateral
  setArrangement(){
    const height = this.state.height;
    const width = this.state.width;
    return `0 ${width}px ${height}px ${width}px`;
  }

  setColor(){
    const color = this.props.color || Colors.getRandomHex();
    return `transparent transparent ${color} transparent`;
  }

  setTransform(){
    // at 120deg an equilateral triangle appears upright
    const rotation = this.props.rotation || Maths.getRandomInt(120)
    return 'rotate(' + rotation + 'deg)';
  }

  styles(){
    const propsStyle = this.props.style || {};
    const triangleStyle = {
      top: this.state.top,
      left: this.state.left,
      borderWidth: this.state.arrangement,
      borderColor: this.state.color,
      opacity: this.state.opacity,
      transform: this.state.transform,
    }
    return Object.assign(propsStyle, triangleStyle);
  }

  render(){
    return (
      <TriangleComponent
        className="Triangle Triangle-equilateral"
        style={this.styles()}
      />
    );
  }
}
