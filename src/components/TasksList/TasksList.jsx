import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TasksList.module.css";
import { selectAllTasks } from "../../redux/Tasks/selectors";

export const TasksList = () => {
  const tasks = useSelector(selectAllTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} id={task.id} />
        </li>
      ))}
    </ul>
  );
};
