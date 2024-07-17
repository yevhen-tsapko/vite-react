/* eslint-disable react/prop-types */
import { AppBar } from "../AppBar/AppBar";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <main className={css.container}>
      <AppBar />
    </main>
  );
};
