import React from 'react';
import './Triangle.css';

export default class Triangle extends React.Component {

  constructor(props){
    super(props)
    const upperWidth = this.props.upperWidth || 40;
    const lowerWidth = this.props.lowerWidth || 10;
    this.state = {
      width: this.getRandomInt(upperWidth, lowerWidth),
      top: 0,
      left: 0,
      borderWidth: 0,
      borderColor: "",
      opacity: 1,
      transform: {},
    };
  }

  componentDidMount(){
    this.setTriangleStyles()
  }

  setTriangleStyles(){
    this.setState({
      top: this.setRandomPos(),
      left: this.setRandomPos(),
      borderWidth: this.setWidth(),
      borderColor: this.setBorderColor(),
      opacity: 1 || this.setOpacity(),
      transform: this.setTransform()
    });
  }

  // this calc works to fill the triangles on the edges of the whole view
  setRandomPos(){
    return "calc(" + Math.random() * 100 + "% - " + this.equilateralHeight(this.state.width) / 2 + "px)";
  }

  getRandomInt(max, min = 0) {
    return Math.random() * (Math.floor(max) - Math.floor(min)) + min;
  }

  setWidth(){
    return '0 ' + this.state.width + 'px ' + this.equilateralHeight(this.state.width, 50) + 'px ' + this.state.width + 'px';
  }

  equilateralHeight(width){
    return this.state.width * Math.sqrt(3);
  }

  setBorderColor(){
    return 'transparent transparent #' + this.getRandomHex() + ' transparent';
  }

  // https://www.paulirish.com/2009/random-hex-color-code-snippets/
  getRandomHex(){
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  setOpacity(){
    return Math.random();
  }

  setTransform(){
    // at 120deg an equilateral triangle appears upright
    const rotation = this.getRandomInt(120)
    return 'rotate(' + rotation + 'deg)';
  }

  render(){
    return (
      <div
        className="Triangle Triangle-equilateral"
        style={{
          top: this.state.top,
          left: this.state.left,
          borderWidth: this.state.borderWidth,
          borderColor: this.state.borderColor,
          opacity: this.state.opacity,
          transform: this.state.transform,
        }}
      ></div>
    );
  }
}
