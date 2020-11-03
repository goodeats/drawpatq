import React from "react";
import styled from "styled-components";
import Title from './Title';
import Navigation from '../utils/Navigation';

const CanvasComponent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > div {
    flex: 1;
  }
  z-index: 1;
`;

export default class Canvas extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const title = this.props.title;
    return (
      <CanvasComponent>
        <Title title={title} />
        {Navigation.getComponent(title)}
      </CanvasComponent>
    );
  }
}
