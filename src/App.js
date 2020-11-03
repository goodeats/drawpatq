import React from 'react';
import './App.css';
import Canvas from "./components/Canvas";
import CanvasList from "./components/CanvasList";
import Watermark from "./components/Watermark";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      selectedCanvas: null
    };
    this.goHome = this.goHome.bind(this);
    this.selectCanvas = this.selectCanvas.bind(this);
  }

  componentDidMount(){
    console.log('welcome to pppaaattt')
  }

  goHome(){ this.setState({ selectedCanvas: null }); }
  selectCanvas(selectedCanvas){ this.setState({ selectedCanvas }); }

  render(){
    const selectedCanvas = this.state.selectedCanvas;

    return (
      <div className="App">
        {selectedCanvas && <Watermark onClick={this.goHome} />}
        {selectedCanvas ?
          <Canvas title={selectedCanvas} /> :
          <CanvasList onSelect={this.selectCanvas} />
        }
      </div>
    );
  }

}
