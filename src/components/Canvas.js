import React from "react";
import styled from "styled-components";
import Triangle from "./Canvas/shapes/Triangle";
import SquareContainer from "./Canvas/shapes/SquareContainer";
import Brand from "./Canvas/projects/brand/Brand";

const CanvasComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    flex: 1;
  }
`;

export default class Canvas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shape: this.props.shape,
      count: 10 * this.props.navPosition
    }
  }

  componentDidMount(){
    this.setState({ count: Math.max(10 * this.props.navPosition, 1) });
  }

  render() {
    return (
      <CanvasComponent>
        <div>
          {this.props.shape === "squares" &&
            Array.from(Array(this.state.count), (e, i) => {
              return <SquareContainer key={i} />;
            })}

          {this.props.shape === "triangles" &&
            Array.from(
              Array(this.state.count * this.props.navPosition),
              (e, i) => {
                return <Triangle key={i} lowerWidth={40} upperWidth={60} />;
              }
            )}

          {this.props.category === "brand" && <Brand />}
        </div>
      </CanvasComponent>
    );
  }
}
