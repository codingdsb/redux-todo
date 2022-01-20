import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")).todos
      : [],
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    updateTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
      });

      localStorage.setItem("todos", JSON.stringify(state));
    },

    toggleCompleted: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });

      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleCompleted } =
  todoSlice.actions;

export default todoSlice.reducer;
