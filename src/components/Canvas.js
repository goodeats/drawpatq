import React from "react";
import styled from "styled-components";
import Triangle from "./Canvas/shapes/Triangle";
import SquareContainer from "./Canvas/shapes/SquareContainer";
import Brand000 from "./Canvas/projects/brand/Brand000";
import Brand001 from "./Canvas/projects/brand/Brand001";
import Brand002 from "./Canvas/projects/brand/Brand002";
// import Brand003 from "./Canvas/projects/brand/Brand003";

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

  BRANDS = [<Brand000 />, <Brand001 />, <Brand002 />];//, <Brand003/>];
  // BRANDS = [<Brand003/>];

  getBrandIndex(){
    const navPos = this.props.navPosition;
    let index = this.props.navPosition;
    const brandsLength = this.BRANDS.length;
    if (navPos < brandsLength) return index;

    if (navPos === brandsLength) {
      return 0;
    } else {
      while (index >= brandsLength) {
        index = index - brandsLength;
      }
      return index;
    }
  }

  renderBrand(){
    return this.BRANDS[this.getBrandIndex()];
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

          {this.props.category === "brand" && this.renderBrand()}
        </div>
      </CanvasComponent>
    );
  }
}
