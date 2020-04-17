import React from 'react';
import './App.css';
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import ReloadButton from "./components/ReloadButton";

function App() {
  return (
    <div className="App">
      <Header title={'10,000 Triangles'} />
      <Canvas />
      <ReloadButton />
    </div>
  );
}

export default App;
