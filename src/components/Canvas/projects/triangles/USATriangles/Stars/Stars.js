import React from "react";
import styled from "styled-components";
import Blue from "./Blue";
import StarClusterLines from "./StarClusterLines";

const StarsComponent = styled.div`
  position: absolute;
  height: 50%;
  width: 50%;
  top: 0;
  left: 0;
  background: blue;
`;

export default class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StarsComponent id="stars">
        <Blue blue={this.props.blue} />
        <StarClusterLines colorState={this.props.white} />
      </StarsComponent>
    );
  }
}
