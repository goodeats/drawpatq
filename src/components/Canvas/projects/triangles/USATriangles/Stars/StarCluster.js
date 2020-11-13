import React from "react";
import StarTriangle from "./StarTriangle";
import Styles from "../../../../../../utils/Styles";
import Arrays from "../../../../../../utils/Arrays";
import styled from "styled-components";

const StarComponent = styled.div`
  position: absolute;
`;

export default class StarCluster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: ["none", "shade", "tint"],
      count: 10,
      style: {
        top: props.yAxis,
        display: 'block'
      },
    };
  }

  componentDidMount() {
    this.setStyles();
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value) {
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  setStyles() {
    if (this.props.hideCluster ) this.setStyle("display", 'none');
  }

  setColor(index, colorState) {
    const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
    return Styles.setColor(colorState, attribute);
  }

  render() {
    return (
      <StarComponent id={this.props.id} style={this.state.style}>
        {Array.from(Array(this.state.count), (e, index) => {
          const color = this.setColor(index, this.props.colorState);
          const id = `star-cluster-tri-${index}`;

          return (
            <StarTriangle
              key={id}
              id={id}
              top={this.state.yAxis}
              color={color}
              lowerWidth={5}
              upperWidth={10}
            />
          );
        })}
      </StarComponent>
    );
  }
}
