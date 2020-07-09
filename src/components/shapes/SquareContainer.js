import React from "react";
import styled from "styled-components";
import Square from './Square';

const SquareContainerComponent = styled.div`
  position: relative;
  top: 100px;
  /* width: 100px; */
  height: ${(props) => props.style.height || "100vh"};

  background: ${(props) => props.style.backgroundColor || 'none'};
`;

export default class SquareContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squareCount: this.props.count,
      style: {
        height: 10
      },
    };
  }

  componentDidMount() {
    this.setSquareCount()
    this.setState({
      style: {
        height: this.setHeight(),
      },
    });
  }

  componentWillUnmount () {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  setSquareCount(){
    // would be fun to introduce multiple squares at different intervals
    // for now, going with one square
    // // https://stackoverflow.com/a/40806673
    // this.intervalId = setInterval(function(){
    //   var newCount = this.state.squareCount += 1;
    //   this.setState({ squareCount: newCount });
    //   if (this.state.squareCount > 3) clearInterval(this.intervalId);
    // }.bind(this), 333);
  }

  setHeight() {
    var height = this.props.height;
    if (height) {
      // add pixels if integer
      return typeof height === "string" ? height : height + "px";
    } else {
      return;
    }
  }

  render() {
    return (
      <SquareContainerComponent style={this.state.style}>
        {Array.from(Array(this.state.squareCount), (e, i) => {
          return <Square key={i} height={150} backgroundColor={'random'} />;
        })}
      </SquareContainerComponent>
    );
  }
}
