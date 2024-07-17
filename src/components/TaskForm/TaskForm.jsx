import css from "./TaskForm.module.css";
import { Button } from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";
export const TaskForm = () => {
  const dispatch = useDispatch();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.elements.text.value;
    if (text !== "") {
      dispatch(addTask(text));
      form.reset();
      return;
    }
    alert("Task cannot be empty. Enter some text!");
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
