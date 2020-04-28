import React from "react";
import styled from "styled-components";
import Triangle from "./shapes/Triangle";
import SquareContainer from "./shapes/SquareContainer";

const CanvasComponent = styled.div`
  display: flex;
`;

export default class Canvas extends React.Component {

  render() {
    return (
      <CanvasComponent>
        {Array.from(Array(3), (e, i) => {
          return <SquareContainer key={i} />;
        })}

        {Array.from(Array(0), (e, i) => {
          return <Triangle key={i} lowerWidth={10} upperWidth={20} />;
        })}
      </CanvasComponent>
    );
  }
}
