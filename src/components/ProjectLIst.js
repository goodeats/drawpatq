import React from "react";
import styled from "styled-components";
import SubTitle from './SubTitle';
import Project from './Project';
import Projects from "../lib/Projects";

const ProjectListComponent = styled.main`
  width: 100%;
  position: relative;
  left: 0%;

  /* https://stackoverflow.com/a/27461685 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export default class ProjectList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <ProjectListComponent>
        {/* <SubTitle title={'you can touch the art here'} /> */}
        <SubTitle title={'an experiment in generative art'} />
        {Projects.all().map((project, key) => {
          return (
            <Project
              key={key}
              title={project.title}
              tagline={project.tagline}
              container={project.container}
              themes={project.themes}
            />
          )
        })}
      </ProjectListComponent>
    );
  }
}
