import React from 'react';
import './Triangle.css';

export default class Triangle extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      width: this.getRandomInt(300),
      top: 0,
      left: 0,
      borderWidth: 0,
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
    });
  }

  setRandomPos(left = false){
    const percentage = this.getRandomInt(100);
    return "calc(" + percentage + "% - " + this.equilateralHeight(this.state.width) + "px)";
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  setWidth(){
    return '0 ' + this.state.width + 'px ' + this.equilateralHeight(this.state.width) + 'px ' + this.state.width + 'px';
  }

  equilateralHeight(width){
    return this.state.width * Math.sqrt(3);
  }

  render(){
    return (
      <div
        class="Triangle Triangle-equilateral"
        style={{
          top: this.state.top,
          left: this.state.left,
          borderWidth: this.state.borderWidth,
          borderColor: "transparent transparent #fff transparent",
        }}
      ></div>
    );
  }
}
