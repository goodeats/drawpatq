import React from "react";
import Styles from '../../../../../../utils/Styles'
import Arrays from "../../../../../../utils/Arrays";
import Distance from "../../../../../../utils/Distance";
import styled from "styled-components";
import Triangle from '../../../../shapes/Triangle';

const BlueComponent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

export default class Blue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attributes: ["none", "shade", "tint"],
      count: 4000,
      style: {
        top: props.yAxis,
      },
    };
  }

  getStripeYAxis(height, stripeIndex, stripeCount, top) {
    const stripePosition = Distance.positionAtIndex(height, stripeIndex, stripeCount);
    const yAxis = stripePosition + top;
    return yAxis + "%";
  }

  render() {
    return(
      <BlueComponent id="container-blue-background">
        {Array.from(Array(this.state.count), (e, index) => {
          // shade/tint stripe triangles
          const attribute = Arrays.rotateNextIndex(this.state.attributes, index);
          const color = Styles.setColor(this.props.blue, attribute);

          return <Triangle
            key={`blue-${index}`}
            lowerWidth={10}
            upperWidth={20}
            color={color}
          />
        })}
      </BlueComponent>
    )
  }
}
