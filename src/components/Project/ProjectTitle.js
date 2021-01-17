import React from "react";
import styled from "styled-components";
import Colors from '../../utils/Colors'

const TitleComponent = styled.h3`
  flex-grow: 0;
  color: ${(props) => Colors.black};
  font-weight: 100;
`;

export default class ProjectTitle extends React.Component {

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
