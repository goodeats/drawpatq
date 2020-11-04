import React from "react";
import styled from "styled-components";
import Colors from '../utils/Colors';
import Navigation from '../utils/Navigation';
import Title from './Title';

const CanvasListComponent = styled.main`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
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

export default class CanvasList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    // preload => uncomment when in dev
    // this.props.onSelect('triangles')
  }

  handleClick(e){
    e.preventDefault();
    this.props.onSelect(e.target.innerText)
  }

  render() {
    return (
      <CanvasListComponent>
        <Title title={'pppaaattt'} />
        <ListContainterComponent>
          <ListComponent>
            {Navigation.projectTitles().map((listItem, key) => {
              return (
                <ListItemLinkComponent
                  key={key}
                  href={'#'}
                  onClick={this.handleClick}
                >
                  <ListItemComponent>
                    {listItem}
                  </ListItemComponent>
                </ListItemLinkComponent>
              )
            })}
          </ListComponent>
        </ListContainterComponent>
      </CanvasListComponent>
    );
  }
}
