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

  componentDidMount(){
    console.log('welcome to pppaaattt')
  }

  navigate(navPosition){
    this.setState({navPosition: parseInt(navPosition)});
  }

  render(){
    return (
      <div className="App">
        {<Header title={"PPPAAATTT"} />}
        <Canvas navPosition={this.state.navPosition} category={'brand'} />
        <Canvas navPosition={this.state.navPosition} shape={'triangles'} />
        <Canvas navPosition={this.state.navPosition} shape={'triangles'} />
        <Canvas navPosition={this.state.navPosition} shape={'triangles'} />
        <Canvas navPosition={this.state.navPosition} shape={'triangles'} />
        <Canvas navPosition={this.state.navPosition} shape={'triangles'} />
        <Footer
          navPosition={this.state.navPosition}
          onNavigate={this.navigate}
        />
      </div>
    );
  }

}
