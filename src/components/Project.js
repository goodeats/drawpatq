import React from "react";
import styled from "styled-components";
import Title from './Title';
import ProjectButton from './ProjectButton';
import Throttle from '../utils/Throttle';
import Arrays from '../utils/Arrays';
import Distance from '../utils/Distance';
import USATriangles from "./Canvas/projects/triangles/USATriangles";
import XmasTreeTriangles from "./Canvas/projects/triangles/XmasTreeTriangles";
import Projects from "../lib/Projects";
import ManyTriangles from "./Canvas/projects/triangles/ManyTriangles";
import TooManyTriangles from "./Canvas/projects/triangles/TooManyTriangles";
import ShadedTriangles from "./Canvas/projects/triangles/ShadedTriangles";
import ShadedAndTintedTriangles from "./Canvas/projects/triangles/ShadedAndTintedTriangles";
import LittleTriangles from "./Canvas/projects/triangles/LittleTriangles";
import ColorTriangles from "./Canvas/projects/triangles/ColorTriangles";
import AlignedTriangles from "./Canvas/projects/triangles/AlignedTriangles";
import ClusteredTriangles from "./Canvas/projects/triangles/ClusteredTriangles";
import TintdTriangles from "./Canvas/projects/triangles/TintedTriangles";

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
      theme: props.theme || 'default',
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

  containerStyles(styles){
    const widthPx = Distance.percentageWindowWidthToPx(styles.widthPercent);
    const heightPx = widthPx / (styles.ratio.width / styles.ratio.height);
    const height = heightPx + styles.unit;
    const width = widthPx + styles.unit;
    return {
      height: height,
      width: width
    }
  }

  setStyles(){
    const container = this.props.container;
    const frame = container.frame;
    const matte = container.matte;
    const canvas = container.canvas;
    const containerStyles = this.containerStyles(container.container);
    this.setStyle('containerHeight', containerStyles.height);
    this.setStyle('containerWidth', containerStyles.width);
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
    this.setState({ reload: false }, this.setStyles)
  }

  reload = () => {
    this.setState({ reload: true }, this.reloaded)
  }

  onThemeChange = () => {
    const themes = this.props.themes;
    const currentThemeIndex = themes.indexOf(this.state.theme);
    const theme = Arrays.rotateNextIndex(themes, currentThemeIndex + 1)
    this.setState({ reload: true, theme: theme }, this.reloaded)
  }

  currentProjects(){
    return [
      ['usa', <USATriangles themes={this.props.themes} theme={this.state.theme} onThemeChange={this.onThemeChange}/>],
      ['xmas', <XmasTreeTriangles theme={this.state.theme} onThemeChange={this.onThemeChange} />],
      ['triangles', <ManyTriangles />],
      ['little triangles', <LittleTriangles />],
      ['too many triangles', <TooManyTriangles />],
      ['transparent triangles', <ColorTriangles />],
      ['shaded triangles', <ShadedTriangles />],
      ['tinted triangles', <TintdTriangles />],
      ['shades and tints', <ShadedAndTintedTriangles />],
      ['in a row', <AlignedTriangles />],
      ['clustered', <ClusteredTriangles />],
    ]
  }

  currentProject(title){
    return !this.state.reload && this.currentProjects().find((project) => { return project[0] === title })[1];
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
                {this.currentProject(title)}
              </CanvasContainerComponent>
            </CanvasComponent>
          </MatteComponent>
        </Framecomponent>
        <ProjectButton text={'reload'} onClick={this.reload}/>
        {this.props.themes && <ProjectButton text={'change'} onClick={this.onThemeChange}/>}

        {/* {!this.state.reload && this.currentProject()} */}
      </ProjectComponent>
    );
  }
}
