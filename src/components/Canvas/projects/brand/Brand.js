import React from "react";
import styled, { keyframes } from "styled-components";
import Container from "../../Container";
import Letter from "../../text/Letter";

// Concept:

//    P
//   P P
//  A   T
// A A T T

// static
// static randomized
// animations
// animations randomized

// keyframe must be declared first
const rotate = keyframes`
  /* 0% {
    transform: rotate(0deg) scale(1);
  }

  50% {
    transform: rotate(360deg) scale(0.2);
  }

  100% {
    transform: rotate(0deg) scale(1);
  } */
`;

export default class Brand extends React.Component {
  BRAND_TEXT = "PAT"; // "PPPAAATTT";
  BRAND_HEIGHT = 200;
  BRAND_WIDTH = 300;

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
    console.log('hello from Brand')
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  renderLetterContainer(letter, i){
    const letterHeight = this.BRAND_HEIGHT / 2;
    const letterWidth = this.BRAND_WIDTH / 3;
    const letterTop = i === 1 ? 0 : letterHeight;
    return (
      <Container
        key={i}
        styles={{
          width: letterWidth + "px",
          top: letterTop,
          left: i * letterWidth,
          background: "#000",
        }}
        content={
          <Letter
            letter={letter}
            styles={{
              color: "#fff",
            }}
          />
        }
      />
    );
  }

  // front and center
  renderBrand(){

    return (
      <Container
        styles={{
          height: this.BRAND_HEIGHT + 'px',
          width: this.BRAND_WIDTH + 'px',
          top: "calc(50% - " + this.BRAND_HEIGHT / 2 + "px)",
          left: "calc(50% - " + this.BRAND_WIDTH / 2 + "px)",
          background: '#000'
        }}
        content={
          <div>
            {this.BRAND_TEXT.split("").map((letter, i) => {
              return this.renderLetterContainer(letter, i);
            })}
          </div>
        }
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderBrand()}
      </div>
    );
  }
}
