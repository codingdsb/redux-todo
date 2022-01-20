import React from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

const App = () => {
  const todosList = useSelector((state) => state.todos.todos);

  return (
    <div className="App">
      <img
        src={
          "https://raw.githubusercontent.com/codingdsb/redux-todo/main/static/redux-logo.svg"
        }
        height="10%"
        style={{ marginBottom: "10px" }}
      />
      <AddTodo />
      <TodoList todos={todosList} />
    </div>
  );
};

export default App;
