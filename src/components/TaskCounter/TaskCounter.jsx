import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { selectTasksCount } from "../../redux/Tasks/selectors";

export const TaskCounter = () => {
  // const tasks = useSelector(selectTasks);
  // const count = tasks.reduce(
  //   (acc, task) => {
  //     if (task.completed) {
  //       acc.completed += 1;
  //     } else {
  //       acc.active += 1;
  //     }
  //     return acc;
  //   },
  //   { completed: 0, active: 0 }
  // );
  const count = useSelector(selectTasksCount);
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
