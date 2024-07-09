/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { removeTask, toggleCompleted } from "../../redux/tasksSlice";
import css from "./Task.module.css";
import { MdClose } from "react-icons/md";

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <input
        onChange={() => {
          dispatch(toggleCompleted(task.id));
        }}
        type="checkbox"
        checked={task.completed}
        className={css.checkbox}
      />
      <p className={css.text}>{task.text}</p>
      <button
        type="button"
        className="css.btn"
        onClick={() => {
          dispatch(removeTask(task.id));
        }}
      >
        <MdClose size={24} />
      </button>
    </div>
  );
};
