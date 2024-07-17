import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../redux/Tasks/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../redux/Tasks/operations";
import { TasksList } from "../components/TasksList/TasksList";
import { TaskForm } from "../components/TaskForm/TaskForm";

export const TasksPage = () => {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <TaskForm />
      <div>{isLoading && "Request in progress..."}</div>
      <TasksList />
    </>
  );
};
