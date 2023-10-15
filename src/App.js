import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33C7'];

  return (
    <div className="App">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
