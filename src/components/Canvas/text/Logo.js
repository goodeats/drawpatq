import React from "react";
import styled, { keyframes } from "styled-components";
import Letter from './Letter';

// I kind of love this
// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

// keyframe must be declared first
const rotate = keyframes`
  /* 0% {
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
  } */
`;

const LogoComponent = styled.div`
  content: ${(props) => props.style.height + props.style.units};
  position: relative;
  top: 100px;
  left: 0;
  font-size: 100px;
  font-size: ${(props) => props.style.height + props.style.units};

  /* background: ${(props) => props.style.backgroundColor || "#000"}; */

  /* transform: rotate(45deg);
  animation: ${rotate} 6s linear infinite; */
`;

export default class Logo extends React.Component {

  LOGO_TEXT = 'PPPAAATTT'

  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: "blank",
        units: "px",
      },
    };
  }

  componentDidMount() {
    // console.log('hello from Logo')

  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  render() {
    return (
      <LogoComponent style={this.state.style}>
        <div>
          <Letter letter={"P"} />
          <Letter letter={"P"} />
          <Letter letter={"P"} />
        </div>
      </LogoComponent>
    );

  }
}
