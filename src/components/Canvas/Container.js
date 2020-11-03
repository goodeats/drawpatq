import React from "react";
import styled from "styled-components";

// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

const ContainerComponent = styled.div`
  content: ${(props) => props.style.height || "initial"};
  height: ${(props) => props.style.height};
  width: ${(props) => props.style.width || "initial"};
  /* TODO: restore these when new component created */
  position: ${(props) => props.style.position || "absolute"};
  top: ${(props) => props.style.top || 0};
  left: ${(props) => props.style.left || 0};
  right: ${(props) => props.style.right || "initial"};
  background: ${(props) => props.style.background || "none"};
  border: ${(props) => props.style.border || "none"};
  cursor: ${(props) => props.style.cursor || "auto"};
  text-align: center;

  /* TODO: create FlexContainer, etc. for inherited class */
  /* display: flex;
  align-items: center; */
`;

export default class Container extends React.Component {
  Container_TEXT = "PPPAAATTT";

  constructor(props) {
    super(props);
    this.state = {
      style: {
        // height: "100px",
        // width: "100px",
        // background: "red",
      },
    };
  }

  componentDidMount() {
    this.setContainerComponentStyles();
  }

  setContainerComponentStyles(){
    const styles = this.props.styles;
    if (styles.height) this.setStyle("height", styles.height);
    if (styles.width) this.setStyle("width", styles.width);
    if (styles.position) this.setStyle("position", styles.position);
    if (styles.top) this.setStyle("top", styles.top);
    if (styles.left) this.setStyle("left", styles.left);
    if (styles.right) this.setStyle("right", styles.right);
    if (styles.background) this.setStyle("background", styles.background);
    if (styles.border) this.setStyle("border", styles.border);
    if (styles.cursor) this.setStyle("cursor", styles.cursor);
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
      <ContainerComponent style={this.state.style}>
        {this.props.content}
      </ContainerComponent>
    );
  }
}
