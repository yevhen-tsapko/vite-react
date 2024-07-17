import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TasksList.module.css";
import { selectVisibleTasks } from "../../redux/selectors";

export const TasksList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
