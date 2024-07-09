import "./App.css";
import { AppBar } from "../AppBar/AppBar";
import { Layout } from "../Layout/Layout";
import { TasksList } from "../TasksList/TasksList";
import { TaskForm } from "../TaskForm/TaskForm";

function App() {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TasksList />
    </Layout>
  );
}

export default App;
