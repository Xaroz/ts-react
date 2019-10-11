import React from "react";
import "./App.css";
import { TextField } from "./TextField";
import { Counter } from "./Counter";
import { ReducerExample } from "./ReducerExample";

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField
        text="Hello"
        person={{ firstName: "Pedrito", lastName: "Raito" }}
        handleChange={e => {
          e.preventDefault();
        }}
      />
      <Counter>
        {({ count, setCount }) => (
          <div>
            <div>{count}</div>
            <div>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
          </div>
        )}
      </Counter>
      <ReducerExample />
    </div>
  );
};

export default App;
