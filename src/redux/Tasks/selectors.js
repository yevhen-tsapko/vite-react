// import { statusFilters } from "./constants";
// export const selectStatusFilter = (state) => state.filters.status;
// export const selectTasks = (state) => state.tasks.items;

// export const selectIsLoading = (state) => state.tasks.isLoading;

// export const selectError = (state) => state.tasks.error;
// export const selectVisibleTasks = (state) => {
//   const tasks = selectTasks(state);
//   const filterStatus = selectStatusFilter(state);
//   switch (filterStatus) {
//     case statusFilters.active:
//       return tasks.filter((task) => !task.completed);
//     case statusFilters.completed:
//       return tasks.filter((task) => task.completed);
//     default:
//       return tasks;
//   }
// };
// export const selectTasksCount = (state) => {
//   const tasks = selectTasks(state);
//   return tasks.reduce(
//     (acc, task) => {
//       if (task.completed) {
//         acc.completed += 1;
//       } else {
//         acc.active += 1;
//       }
//       return acc;
//     },
//     { completed: 0, active: 0 }
//   );
// };
export const selectLoading = (state) => state.tasks.loading;

// export const selectFilter = (state) => state.tasks.filter;

export const selectAllTasks = (state) => state.tasks.items;