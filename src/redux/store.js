import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./Tasks/tasksSlice";
import { authReducer } from "./Auth/slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});
