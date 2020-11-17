import React from "react";
import styled from "styled-components";
import Title from './Title';
import Throttle from '../utils/Throttle';
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

  componentDidMount() {
    window.addEventListener('resize', Throttle.throttle(this.reload, 100));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reload);
  }

  reloaded = () => {
    this.setState({ reload: false })
  }

  reload = () => {
    this.setState({ reload: true }, this.reloaded)
  }

  onThemeChange = (theme) => {
    // kick up props so theme change sticks when clicking watermark button
    this.props.onThemeChange(theme)
    this.setState({ reload: true, theme: theme }, this.reloaded)
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
