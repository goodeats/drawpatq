import React from 'react';
import styled, { keyframes } from 'styled-components';
import Colors from '../../../utils/Colors';

// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

// keyframe must be declared first
const rotate = keyframes`
  0% {
    border-radius: 0;
    transform: rotate(0deg) scale(1);
  }

  50% {
    border-radius: 50px;
    border-radius: ${(props) => props.style.height + props.style.units}
    opacity: 0;
    transform: rotate(360deg) scale(0.2);
  }

  100% {
    border-radius: 0;
    transform: rotate(0deg) scale(1);
  }
`;

const SquareComponent = styled.div`
  content: ${(props) => props.style.height + props.style.units};
  position: relative;

  width: 100px;
  width: ${(props) => props.style.height + props.style.units};
  height: 100px;
  height: ${(props) => props.style.height + props.style.units};

  background: ${(props) => props.style.backgroundColor || '#000'};

  transform: rotate(45deg);
  animation: ${rotate} 6s linear infinite;
`;

export default class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      style: {
        backgroundColor: 'blue',
        units: 'px'
      }
    };
  }

  componentDidMount(){
    this.setHeight();
    console.log(this.state.style.height);
    this.setBackgroundColor();
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value){
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  setHeight(){
    var propsHeight = this.props.height;
    var styleHeight;
    switch (propsHeight) {
      // place resusable key names first
      case 'random':
        styleHeight = this.setRandomHeight(100, 4);
        break;
      case typeof propsHeight === 'string':
        // return whatever the string says
        styleHeight = propsHeight;
        this.setStyle('height', '');
        break;
      default:
        styleHeight = propsHeight || 100;
    }

    this.setStyle('height', styleHeight);
  }

  setBackgroundColor(){
    var bgColor;
    var backgroundColor = this.props.backgroundColor;
    switch (backgroundColor){
      case 'random':
        bgColor = Colors.getRandomHex();
        break;
      default:
        bgColor = backgroundColor || '#000';
    }

    this.setStyle('backgroundColor', bgColor);
  }

  setRandomHeight(max, min = 0){
    // getRandomInt(max, min = 0) not working?
    return Math.random() * (Math.floor(max) - Math.floor(min)) + min;
  }

  // TODO: put this in a utils file
  getRandomInt(max, min = 0) {
    return Math.random() * (Math.floor(max) - Math.floor(min)) + min;
  }

  changeBackground = () => {
    this.setStyle('backgroundColor', Colors.getRandomHex());
  }

  render() {
    return (
      <SquareComponent
        onMouseOver={this.changeBackground}
        onClick={this.changeBackground}
        style={this.state.style}
        testContent={this.state.testContent}
      />
    );
  }
}
