import React from "react";
import styled from "styled-components";
import Colors from '../utils/Colors'

const TitleComponent = styled.h1`
  flex-grow: 0;
  color: ${(props) => Colors.black};
  font-weight: 100;
  z-index: 2;
`;

export default class Title extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <TitleComponent>
        {this.props.title}
      </TitleComponent>
    );
  }
}
