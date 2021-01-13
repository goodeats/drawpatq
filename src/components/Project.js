import React from "react";
import styled from "styled-components";
import Title from './Title';
import Throttle from '../utils/Throttle';
import USATriangles from "./Canvas/projects/triangles/USATriangles";
import XmasTreeTriangles from "./Canvas/projects/triangles/XmasTreeTriangles";

const ProjectComponent = styled.main`
  height: ${(props) => props.style.containerHeight || '300px'};
  width: ${(props) => props.style.containerWidth || '300px' };
  display: block;
  margin: 0 auto 500px;
`;

// https://seabergframing.com/framing-101/parts-custom-picture-frame/

const Framecomponent = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;

  border: 1px solid black;
  border-width: ${(props) => props.style.frameWidth}px;
  border-color: ${(props) => props.style.frameColor || 'black'};
`;

const GlazingComponent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  /* TODO: experiment with this later */
`;

const MatteComponent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  border: 1px solid white;
  border-width: ${(props) => props.style.matteWidth}px;
  border-color: ${(props) => props.style.matteColor || 'white'};
`;

const CanvasComponent = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${(props) => props.style.canvasBackground || 'white'};
`;

const CanvasContainerComponent = styled.div`
  height: calc(100% - ${(props) => props.style.canvasPadding * 2 + props.style.canvasPaddingUnit});
  width: calc(100% - ${(props) => props.style.canvasPadding * 2 + props.style.canvasPaddingUnit});
  position: absolute;
  top: ${(props) => props.style.canvasPadding + props.style.canvasPaddingUnit};
  left: ${(props) => props.style.canvasPadding + props.style.canvasPaddingUnit};
`;

export default class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      reload: false,
      theme: props.theme,
      style: {}
    }
  }

  componentDidMount() {
    this.setStyles()
    window.addEventListener('resize', Throttle.throttle(this.reload, 100));
  }

  // https://dev.to/walecloud/updating-react-nested-state-properties-ga6
  setStyle(attr, value){
    const { style } = { ...this.state };
    const currentStyle = style;
    currentStyle[attr] = value;
    this.setState({ style: currentStyle });
  }

  setStyles(){
    const container = this.props.container;
    const frame = container.frame;
    const matte = container.matte;
    const canvas = container.canvas;
    this.setStyle('containerHeight', container.containerHeight || '300px');
    this.setStyle('containerWidth', container.containerWidth || '300px');
    this.setStyle('frameWidth', frame.width || 30);
    this.setStyle('frameColor', frame.color || 'black');
    this.setStyle('matteWidth', matte.width || 50);
    this.setStyle('matteColor', matte.color || 'antiquewhite');
    this.setStyle('canvasPadding', canvas.padding || 5);
    this.setStyle('canvasPaddingUnit', canvas.paddingUnit || 5);
    this.setStyle('canvasBackground', canvas.background || 'white');
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

  currentProjects = () => {
    return [
      <USATriangles theme={this.state.theme} onThemeChange={this.onThemeChange} />,
      <XmasTreeTriangles theme={this.state.theme} onThemeChange={this.onThemeChange} />
    ]

  }

  currentProject = () => {
    return this.currentProjects()[0];
  }

  render() {
    const title = this.props.title;
    return (
      <ProjectComponent className='project' style={this.state.style} >
        <Title title={title} />

        {/* https://seabergframing.com/framing-101/parts-custom-picture-frame/ */}
        <Framecomponent className='frame' style={this.state.style} >
          <GlazingComponent />
          <MatteComponent className='matte' style={this.state.style} >
            <CanvasComponent className='canvas' style={this.state.style} >
              <CanvasContainerComponent className='canvasContainer' style={this.state.style} >
                {this.currentProject()}
              </CanvasContainerComponent>
            </CanvasComponent>
          </MatteComponent>
        </Framecomponent>

        {/* {!this.state.reload && this.currentProject()} */}
      </ProjectComponent>
    );
  }
}
