import React from 'react';
import './App.css';
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      navPosition: 0,
      showNavBackward: false,
      showNavForward: true
    };
    this.navigate = this.navigate.bind(this);
  }

  navigate(navPosition){
    this.setState({navPosition: parseInt(navPosition)});
  }

  render(){
    return (
      <div className="App">
        <Header title={"PPPAAATTT"} />
        <Canvas navPosition={this.state.navPosition} />
        <Canvas navPosition={this.state.navPosition} />
        <Canvas navPosition={this.state.navPosition} />
        <Canvas navPosition={this.state.navPosition} />
        <Canvas navPosition={this.state.navPosition} />
        <Footer
          navPosition={this.state.navPosition}
          onNavigate={this.navigate}
        />
      </div>
    );
  }

}
