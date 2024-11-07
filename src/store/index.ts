import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../reducers/todo";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
