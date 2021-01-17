import React from 'react';
import './App.css';
import Canvas from "./components/Canvas";
import CanvasList from "./components/CanvasList";
import Watermark from "./components/Watermark";
import Title from './components/Title';
import ProjectList from './components/ProjectLIst';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCanvas: null,
      theme: 'default'
    };
    this.goHome = this.goHome.bind(this);
    this.selectCanvas = this.selectCanvas.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  componentDidMount(){
    console.log('welcome to pppaaattt')
  }

  goHome(){ this.setState({ selectedCanvas: null }); }
  selectCanvas(selectedCanvas){ this.setState({ selectedCanvas }); }
  changeTheme = (theme) => { this.setState({ theme })}

  render(){
    const selectedCanvas = this.state.selectedCanvas;

    return (
      <div className="App">
        {selectedCanvas && <Watermark onClick={this.goHome} />}
        <Title logo />
        <ProjectList />
        {/* {selectedCanvas ?
          <Canvas
            title={selectedCanvas}
            theme={this.state.theme}
            onThemeChange={this.changeTheme}
          /> :
          <CanvasList onSelect={this.selectCanvas} />
        } */}
      </div>
    );
  }

}
