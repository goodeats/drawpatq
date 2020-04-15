import React from 'react';
import './Triangle.css';

export default class Triangle extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      width: 100,
      top: 0,
      borderWidth: 0
    };
  }

  componentWillMount(){
    this.setTriangleStyles()
  }

  setTriangleStyles(){
    this.setState({
      top: this.setPosTop(),
      borderWidth: this.setWidth()
    });
  }

  setPosTop(){
    const setPosPercentage = this.getRandomInt(100);
    return 'calc(' + setPosPercentage + '% - 173px)';
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  setWidth(){
    return '0 ' + this.state.width + 'px ' + this.equilateralHeight() + 'px ' + this.state.width + 'px';
  }

  equilateralHeight(){
    return this.state.width * Math.sqrt(3);
  }

  render(){
    return (
      <div
        class="Triangle Triangle-equilateral"
        style={{
          top: this.state.top,
          left: "0",
          borderWidth: this.state.borderWidth,
          borderColor: "transparent transparent #fff transparent",
        }}
      ></div>
    );
  }
}
