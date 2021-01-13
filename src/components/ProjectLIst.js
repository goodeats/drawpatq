import React from "react";
import styled from "styled-components";
import Colors from '../utils/Colors';
import Title from './Title';
import Project from './Project';

const ProjectListComponent = styled.main`
  width: 100%;
  position: relative;
  left: 0%;

  /* https://stackoverflow.com/a/27461685 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ListContainterComponent = styled.div`
  overflow: hidden;
  flex-grow: 1;
  position: relative;
`;

const ListComponent = styled.ul`
  height: auto;
  width: 100%;
  padding: 20px 0;
  list-style: none;
  text-align: center;

  /* for smooth scrolling */
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  /* flex: 0 1 auto; */
  overflow: auto;
  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
`;

const ListItemComponent = styled.li`
  width: 100%;
  padding: 20px 0;
  background: #fff;
  font-size: 20px;
  border-bottom: ${(props) => `1px solid ${Colors.gray}`};

       -o-transition: all .2s ease;
     -moz-transition: all .2s ease;
  -webkit-transition: all .2s ease;
          transition: all .2s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

const ListItemLinkComponent = styled.a`
  color: ${(props) => Colors.primary};
  text-decoration: none;
`;

export default class ProjectList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  projects(){
    const multiplier = 300 * 1.2;
    return [
      {
        title: 'usa',
        container: {
          containerHeight: 1 * multiplier + 'px',
          containerWidth: 1.9 * multiplier + 'px',
          frame: {
            width: 10,
            color: 'black'
          },
          matte: {
            width: 20,
            color: 'antiquewhite'
          },
          canvas: {
            padding: 40,
            paddingUnit: 'px',
            background: 'white'
          }
        }
      },
      // {
      //   title: 'usa',
      //   container: {
      //     frame: {
      //       width: 1,
      //       color: 'black'
      //     },
      //     matte: {
      //       width: 3,
      //       color: 'antiquewhite'
      //     },
      //     canvas: {
      //       padding: 5,
      //       background: 'white'
      //     }
      //   }
      // }
    ]
  }

  render() {
    return (
      <ProjectListComponent>
        <Title title={'you can touch the art'} />
        {
          this.projects().map((project, key) => {
            return (
              <Project
                key={key}
                title={project.title}
                container={project.container}
              />
            )
          })
        }
      </ProjectListComponent>
    );
  }
}
