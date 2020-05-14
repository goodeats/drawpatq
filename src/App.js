import React from 'react';
import './App.css';
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Header title={"Squares"} />
      <Canvas />
      <Footer />
    </div>
  );
}

export default App;
