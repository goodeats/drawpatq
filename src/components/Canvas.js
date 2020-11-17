import React from "react";
import styled from "styled-components";
import Title from './Title';
import Navigation from '../utils/Navigation';
import USATriangles from "./Canvas/projects/triangles/USATriangles";

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
    this.state = {
      reload: false,
      theme: props.theme
    }
  }

  reload = () => {
    this.setState({ reload: false })
  }

  onThemeChange = (theme) => {
    // kick up props so theme change sticks when clicking watermark button
    this.props.onThemeChange(theme)
    this.setState({ reload: true, theme: theme }, this.reload)
  }

  currentProject = () => {
    return <USATriangles theme={this.state.theme} onThemeChange={this.onThemeChange} />;
  }

  render() {
    const title = this.props.title;
    return (
      <CanvasComponent>
        <Title title={title} />
        {!this.state.reload && this.currentProject()}
        {/* {Navigation.getComponent(title, this.state.theme)} */}
      </CanvasComponent>
    );
  }
}
