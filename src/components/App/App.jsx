import { Layout } from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/Tasks/operations";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage";
import { RegisterPage } from "../../pages/RegisterPage";
import { LoginPage } from "../../pages/LoginPage";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/tasks" element={<TaskPage />}/> */}
      </Route>
    </Routes>
  );
};

export default App;
