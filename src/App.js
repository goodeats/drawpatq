import React from 'react';
import './App.css';
import Triangle from './components/Triangle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-header-h1">10,000 Triangles</h1>
        {Array.from(Array(10000), (e, i) => {
          return (
            <Triangle
              key={i}
              lowerWidth={10}
              upperWidth={20}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
