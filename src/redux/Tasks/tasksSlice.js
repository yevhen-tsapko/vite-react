import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, deleteTask, addTask } from "./operations";
const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((task) => task.id !== action.payload);
      })
      .addCase(deleteTask.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
