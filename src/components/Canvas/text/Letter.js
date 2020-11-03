import React from "react";
import styled from "styled-components";

// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

const LetterComponent = styled.span`
  /* position: relative;
  top: 100px;
  left: 0; */
  font-size: 100px;
  font-size: ${(props) => props.style.fontSize};
`;

export default class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        fontSize: this.props.fontSize || "100px",
        color: "#000",
        fontFamily: "Helvetica,sans-serif", // in honor of https://designisonefilm.com/
      },
    };
  }

  componentDidMount() {
    this.setLetterComponentStyles();
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  feelingAdventurous(){
    if (!this.props.feelingAdventurous) return;
    if (this.props.index === 1){
      this.setStyle("text-decoration", "underline");
    } else {
      this.setStyle("text-decoration", "overline");
    }
  }

  setLetterComponentStyles(){
    const styles = this.props.styles;
    if (styles.fontSize) this.setStyle("fontSize", styles.fontSize);
    if (styles.lineHeight) this.setStyle("lineHeight", styles.lineHeight);
    if (styles.color) this.setStyle("color", styles.color);
    this.feelingAdventurous();
  }

  render() {
    return <LetterComponent style={this.state.style}>{this.props.letter}</LetterComponent>;
  }
}
