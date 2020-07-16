import React from "react";
import styled from "styled-components";

// I kind of love this
// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

const LetterComponent = styled.span`
  /* position: relative;
  top: 100px;
  left: 0; */
  font-size: 100px;
  font-size: ${(props) => props.style.height + props.style.units};
`;

export default class Letter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        units: "px",
      },
    };
  }

  componentDidMount() {
    console.log("hello from Letter");
    console.log(this.props.letter)
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  yo(){
    console.log(this.props.letter)
    return true;
  }

  render() {
    return this.yo() && <LetterComponent style={this.state.style}>{this.props.letter}</LetterComponent>;
  }
}
