import React from "react";
import styled from "styled-components";
import Triangle from "./shapes/Triangle";
import SquareContainer from "./shapes/SquareContainer";

const CanvasComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default class Canvas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shape: 'squares',
      count: 10
    }
  }

  render() {
    return (
      <CanvasComponent>
        {this.state.shape === 'squares' &&
          Array.from(Array(this.state.count), (e, i) => {
          return <SquareContainer key={i} />;
        })}

        {this.state.shape === 'triangles' &&
          Array.from(Array(this.state.count), (e, i) => {
          return <Triangle key={i} lowerWidth={10} upperWidth={20} />;
        })}
      </CanvasComponent>
    );
  }
}
