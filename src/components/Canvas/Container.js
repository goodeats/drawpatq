import React from "react";
import styled from "styled-components";

// I kind of love this
// https://github.com/styled-components/styled-components/issues/1746#issuecomment-434224968

const ContainerComponent = styled.div`
  content: ${(props) => props.style.height + props.style.units};
  height: ${(props) => props.style.height + props.style.units};
  width: ${(props) => props.style.width + props.style.units};
  position: ${(props) => props.style.position || "absolute"};
  top: ${(props) => props.style.top || 0};
  left: ${(props) => props.style.left || 0};
  background: ${(props) => props.style.background || "red"};
`;

export default class Container extends React.Component {
  Container_TEXT = "PPPAAATTT";

  constructor(props) {
    super(props);
    this.state = {
      style: {
        height: "100",
        width: "100",
        background: "red",
        units: "px",
      },
    };
  }

  componentDidMount() {
    console.log('hello from Container')
    this.setContainerComponentStyles();
  }

  setContainerComponentStyles(){
    const props = this.props;
    if (props.height) this.setStyle("height", props.height || 100);
    if (props.width) this.setStyle("width", props.width || 100);
    if (props.position) this.setStyle("position", props.position);
    if (props.background) this.setStyle("background", props.background);
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
