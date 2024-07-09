import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const taskInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },

    removeTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleCompleted(state, action) {
      for (let task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }
    },
  },
});
export const { addTask, removeTask, toggleCompleted } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

// export const filtersReducer = createReducer(filtersInitialState, (builder) => {
//   builder.addCase(setStatusFilter, (state, action) => {
//     state.status = action.payload;
//   });
// });

// export const taskReducer = (state = taskInitialState, action) => {
//   (builder) => {
//     builder
//       .addCase(task / addTask, (state, action) => {
//         state.push(action.payload);
//       })
//       .addCase(task / removeTask, (state, action) => {
//         return state.filter((task) => task.id !== action.payload);
//       })
//       .addCase(task / toggleCompleted, (state, action) => {
//         for (task of state) {
//           if (task.id === action.payload) {
//             task.completed = !task.completed;
//           }
//         }
//       });
//   };
// };
