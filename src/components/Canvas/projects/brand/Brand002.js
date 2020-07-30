import React from "react";
import Container from "../../Container";
import Letter from "../../text/Letter";
import styled from "styled-components";

// Concept:

//    P
//   P P
//  A   T
// A A T T

// static
// static randomized
// animations
// animations randomized

const BackgroundComponent = styled.div`
  content: ${(props) => props.style.height || "initial"};
  height: ${(props) => props.style.height};
  width: ${(props) => props.style.width || "initial"};
  /* TODO: restore these when new component created */
  position: ${(props) => props.style.position || "absolute"};
  top: ${(props) => props.style.top || 0};
  left: ${(props) => props.style.left || 0};
  right: ${(props) => props.style.right || "initial"};
  background: ${(props) => props.style.background || "red"};
  border: ${(props) => props.style.border || "none"};
  text-align: center;
`;

export default class Brand extends React.Component {
  BRAND_TEXT = "PPPAAATTT";
  BRAND_HEIGHT = 200;
  BRAND_WIDTH = this.equilateralWidth(this.BRAND_HEIGHT);

  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: "100%",
        width: "100%",
        backgroundColor: "blue",
        zIndex: -1,
      },
    };
  }

  componentDidMount() {
    // console.log("hello from Brand 2");
  }

  equilateralWidth(height) {
    return (height * 2) / Math.sqrt(3);
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  setLetterHeight(index) {
    return this.BRAND_HEIGHT / 2;
  }

  setLetterWidth(index) {
    return this.BRAND_WIDTH / 2;
  }

  setLetterTop(index, letterHeight) {
    return index === 0 ? "0" : "50%";
  }

  setLetterLeft(index, letterWidth) {
    if (index === 0) {
      return letterWidth / 2;
    } else {
      return index === 1 ? "0" : letterWidth;
    }
  }

  // P
  renderLetterContainer(letter, i) {
    const letterHeight = this.setLetterHeight(i);
    const letterWidth = this.setLetterWidth(i);
    const letterTop = this.setLetterTop(i, letterHeight);
    const letterLeft = this.setLetterLeft(i, letterWidth);

    return (
      <Container
        key={i}
        styles={{
          width: letterWidth + "px",
          top: letterTop,
          left: letterLeft,
          background: "none",
        }}
        content={
          <Letter
            letter={letter}
            index={i}
            styles={{
              color: "#fff",
            }}
          />
        }
      />
    );
  }

  setClusterHeight(index) {
    return this.BRAND_HEIGHT;
  }

  setClusterWidth(index) {
    return this.BRAND_WIDTH;
  }

  setClusterLetterTop(index, letterHeight) {
    return index === 0 ? "0" : "50%";
  }

  setClusterLetterLeft(index, letterWidth) {
    if (index === 0) {
      return "calc(50% - " + letterWidth / 2 + "px)";
    } else {
      return index === 1 ? "0" : "initial"; // go off right for last one
    }
  }

  setClusterLetterRight(index, letterWidth) {
    return index === 2 ? "0" : "intial";
  }

  // "PPPAAATTT" => ["PPP", "AAA", "TTT"]
  splitBrandText() {
    // https://stackoverflow.com/a/8359929 mad lad
    return this.BRAND_TEXT.match(/.{1,3}/g);
  }

  // cluster letter has sub triangle with 3 of same letter
  //    P
  //   P P
  renderClusterLetter(text, index) {
    const clusterHeight = this.setClusterHeight(index);
    const clusterWidth = this.setClusterWidth(index);
    const clusterTop = this.setClusterLetterTop(index, clusterHeight);
    const clusterLeft = this.setClusterLetterLeft(index, clusterWidth);
    const clusterRight = this.setClusterLetterRight(index, clusterWidth);
    return (
      <Container
        key={index}
        styles={{
          height: clusterHeight,
          width: clusterWidth,
          top: clusterTop,
          left: clusterLeft,
          right: clusterRight,
          background: "none",
        }}
        content={
          <div>
            {text.split("").map((letter, i) => {
              return this.renderLetterContainer(letter, i);
            })}
          </div>
        }
      />
    );
  }

  // cluster has all 3 letters in their triangles
  //    P
  //   P P
  //  A   T
  // A A T T

  renderCluster() {
    const height = this.BRAND_HEIGHT;
    const width = this.BRAND_WIDTH;
    const background = "#000";
    const borderWidth = height / 4;
    return (
      <Container
        styles={{
          height: height * 2,
          width: width * 2,
          top: "calc(50% - " + (height + borderWidth) + "px)",
          left: "calc(50% - " + (width + borderWidth) + "px)",
          background: background,
          border: borderWidth + "px solid" + background,
        }}
        content={
          <div>
            {this.splitBrandText().map((v, i) => {
              return this.renderClusterLetter(v, i);
            })}
          </div>
        }
      />
    );
  }

  // front and center
  renderBrand() {
    return <div>{this.renderCluster()}</div>;
  }

  renderBackground() {
    return <BackgroundComponent style={this.state.style} />;
  }

  render() {
    return (
      <div>
        {this.renderBrand()}
        {this.renderBackground()}
      </div>
    );
  }
}
