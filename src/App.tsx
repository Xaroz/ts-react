import React from 'react';
import './App.css';
import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text="Hello" person={{firstName: "Pedrito", lastName: "Raito"}} />
    </div>
  );
}

export default App;
