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

  // need state width before these can be set
  setTriangleStyles(){
    this.setState({
      arrangement: this.setArrangement(),

      // placement
      top: this.props.top || this.setRandomPos(),
      left: this.props.left || this.setRandomPos(),
    });
  }

  // this calc works to fill the triangles on the edges of the whole view
  // the furthest off the view can only be half
  setRandomPos(){
    return "calc(" + Maths.randomNumber(100, 0) + "% - " + this.state.height / 2 + "px)";
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

  render(){
    return (
      <TriangleComponent
        className="Triangle Triangle-equilateral"
        style={{
          top: this.state.top,
          left: this.state.left,
          borderWidth: this.state.arrangement,
          borderColor: this.state.color,
          opacity: this.state.opacity,
          transform: this.state.transform,
        }}
      />
    );
  }
}
