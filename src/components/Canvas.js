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
      shape: 'triangles',
      count: 10 * this.props.navPosition
    }
  }

  componentDidMount(){
    this.setState({ count: Math.max(10 * this.props.navPosition, 1) });
  }

  render() {
    return (
      <CanvasComponent>
        {this.state.shape === 'squares' &&
          Array.from(Array(this.state.count), (e, i) => {
          return <SquareContainer key={i} />;
        })}

        {this.state.shape === 'triangles' &&
          Array.from(Array(this.state.count * this.props.navPosition), (e, i) => {
          return <Triangle key={i} lowerWidth={40} upperWidth={60} />;
        })}
      </CanvasComponent>
    );
  }
}
