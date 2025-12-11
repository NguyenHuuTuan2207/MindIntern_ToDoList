import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.unshift({
        id: Date.now().toString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.map(t =>
        t.id === action.payload
          ? { ...t, completed: !t.completed }
          : t
      );
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    editTodo(state, action: PayloadAction<{ id: string; newTitle: string }>) {
      state.todos = state.todos.map(t =>
        t.id === action.payload.id
          ? { ...t, title: action.payload.newTitle }
          : t
      );
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
