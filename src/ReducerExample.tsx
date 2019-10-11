import React, { useReducer, useState } from "react";

type Actions =
  | { type: "add"; text: string; id: number }
  | { type: "remove"; idx: number };

interface Todo {
  id: number;
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false, id: action.id }];
    case "remove":
      return state.filter(todo => action.idx !== todo.id);
    default:
      return state;
  }
};

export const ReducerExample: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [text, setText] = useState<string>("");
  const [todoId, setTodoId] = useState<number>(0);

  return (
    <div>
      <input
        value = {text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "add", text: text, id: todoId });
          setTodoId(todoId + 1);
          setText("");
        }}
      >
        +
      </button>
      <div>
        <h1>Todo list</h1>
        {todos.map(todo => (
          <div key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                dispatch({ type: "remove", idx: todo.id });
              }}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
