import React from "react";
import styled, { keyframes } from "styled-components";
import Colors from "../../utils/Colors";

// I kind of love this
// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

// keyframe must be declared first
const rotate = keyframes`
  0% {
    left: 0;
    border-radius: 0;
    transform: rotate(0deg) scale(1);
  }

  25% {
    left: -100px;
    left: ${(props) => props.style.height * -1 + props.style.units}
  }

  50% {
    border-radius: 50px;
    border-radius: ${(props) => props.style.height / 2 + props.style.units}
    opacity: 0;
    transform: rotate(180deg) scale(0.4);
  }

  75% {
    left: 100px;
    left: ${(props) => props.style.height + props.style.units}
  }

  100% {
    left: 0;
    border-radius: 0;
    transform: rotate(360deg) scale(1);
  }
`;

const SquareComponent = styled.div`
  content: ${(props) => props.testContent};
  position: relative;

  width: ${(props) => props.style.height || "100px"};
  height: ${(props) => props.style.height || "100px"};

  background: ${(props) => props.style.backgroundColor || '#000'};

  transform: rotate(45deg);
  animation: ${rotate} 3s linear infinite;
`;


export default class Square extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      style: {
        backgroundColor: 'blue',
        units: 'px'
      },
      testContent: ''
    };
  }

  componentDidMount(){
    this.setHeight();
    console.log(this.state.style.height);
    this.setBackgroundColor();
    // this.setState({
    //   style: {
    //     backgroundColor: this.setBackgroundColor()
    //   },
    // });
  }

  setHeight(){
    var style = { ...this.state.style };
    var height = this.props.height;
    switch (height) {
      // place resusable key names first
      case "random":
        style.height = this.setRandomHeight(100, 4);
        break;
      case typeof height === "string":
        // return whatever the string says
        style.height = height;
        style.units = '';
        break;
      default:
        style.height = height || 100;
    }
    console.log('height: ' + height);
    // debugger
    // this.setState({ style });

    this.setState({
      style: {
        ...this.state.style,
        height: 400,
      },
    });
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

    this.setState({ style: {
      backgroundColor: bgColor
    }});
  }

  setRandomHeight(max, min = 0){
    // getRandomInt(max, min = 0) not working?
    var testContent = Math.random() * (Math.floor(max) - Math.floor(min)) + min;
    console.log(testContent);
    this.setState({testContent});
    return testContent;
  }

  // TODO: put this in a utils file
  getRandomInt(max, min = 0) {
    return Math.random() * (Math.floor(max) - Math.floor(min)) + min;
  }

  onClick = () => {
    console.log('click')
    this.setState((prev) => ({ clicked: !prev.clicked }));

    setTimeout(() => {
      this.setState((prev) => ({ clicked: !prev.clicked }));
    }, 1000);
  };

  onMouseOver = () => {
    this.setState({
      style: {
        backgroundColor: Colors.getRandomHex()
      },
    });
  }

  render() {
    return (
      <SquareComponent
        onClick={this.onClick}
        onMouseOver={this.onMouseOver}
        text={this.state.clicked ? "Copied!" : "Copy"}
        color={this.state.color}
        style={this.state.style}
        testContent={this.state.testContent}
      />
    );
  }
}
