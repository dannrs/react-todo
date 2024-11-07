import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { EditTodoPayload, Todo } from "../lib/types";

const getInitialState = (): Todo[] => {
  try {
    const stored = localStorage.getItem("todos");
    if (!stored) return [];

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      console.error("Invalid stored todos format");
    }

    return parsed;
  } catch (err) {
    console.error("Failed to load todos from localStorage:", err);
    return [];
  }
};

const initialState: Todo[] = getInitialState();

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo(state, action: PayloadAction<Todo>) {
      state.unshift(action.payload);
    },
    editTodo(state, action: PayloadAction<EditTodoPayload>) {
      const { id, title } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    reorderTodo(
      state,
      action: PayloadAction<{ draggedId: string; droppedId: string }>
    ) {
      const { draggedId, droppedId } = action.payload;
      const draggedIndex = state.findIndex((todo) => todo.id === draggedId);
      const droppedIndex = state.findIndex((todo) => todo.id === droppedId);

      if (draggedIndex !== -1 && droppedIndex !== -1) {
        const [draggedTodo] = state.splice(draggedIndex, 1);
        state.splice(droppedIndex, 0, draggedTodo);
      }
    },
    deleteTodo(state, action: PayloadAction<string>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { createTodo, editTodo, toggleTodo, reorderTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
