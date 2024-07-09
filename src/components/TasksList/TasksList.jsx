import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { Task } from "../Task/Task";
import css from "./TasksList.module.css";
import { getStatusFilter, getTasks } from "../../redux/selectors";

const getVisibleTasks = (tasks, filterStatus) => {
  switch (filterStatus) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TasksList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);
  return (
    <ul>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
