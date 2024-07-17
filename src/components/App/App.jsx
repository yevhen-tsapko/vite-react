import { Layout } from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/Tasks/operations";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { RegisterPage } from "../../pages/RegisterPage";
import { LoginPage } from "../../pages/LoginPage";
import { PrivateRoute } from "../PrivateRoute";
import { RestrictedRoute } from "../RestrictedRoute";
import { TasksPage } from "../../pages/TasksPage";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
