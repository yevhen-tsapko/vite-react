import css from "./TaskForm.module.css";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
export const TaskForm = () => {
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };
  return (
    <form onSubmit={handlerSubmit} className={css.form}>
      <input
        type="text"
        name="text"
        className={css.field}
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
