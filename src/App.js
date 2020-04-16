import React from 'react';
import './App.css';
import Triangle from './components/Triangle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drawpatq!</h1>
        {Array.from(Array(10000), (e, i) => {
          return <Triangle />;
        })}
      </header>
    </div>
  );
}

export default App;
