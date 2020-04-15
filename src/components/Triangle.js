import React from 'react';
import './Triangle.css';

export default class Triangle extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      width: this.getRandomInt(200, 50),
      top: 0,
      left: 0,
      borderWidth: 0,
      borderColor: "",
      transform: {},
    };
  }

  componentWillMount(){
    this.setTriangleStyles()
  }

  setTriangleStyles(){
    this.setState({
      top: this.setRandomPos(),
      left: this.setRandomPos(true),
      borderWidth: this.setWidth(),
      borderColor: this.setBorderColor(),
      transform: this.setTransform()
    });
  }

  setRandomPos(left = false){
    const percentage = this.getRandomInt(100);
    return "calc(" + percentage + "% - " + this.equilateralHeight(this.state.width) + "px)";
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
    // https://www.paulirish.com/2009/random-hex-color-code-snippets/
    const hexCode = Math.floor(Math.random() * 16777215).toString(16);
    return 'transparent transparent #' + hexCode + ' transparent';
  }

  setTransform(){
    // at 120deg an equilateral triangle appears upright
    const rotation = this.getRandomInt(120)
    return 'rotate(' + rotation + 'deg)';
  }

  render(){
    return (
      <div
        class="Triangle Triangle-equilateral"
        style={{
          top: this.state.top,
          left: this.state.left,
          borderWidth: this.state.borderWidth,
          borderColor: this.state.borderColor,
          transform: this.state.transform
        }}
      ></div>
    );
  }
}
