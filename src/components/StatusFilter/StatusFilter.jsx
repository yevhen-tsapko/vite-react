import css from "./StatusFilter.module.css";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filtersSlice";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.status);
  const handleOnClick = (filter) => {
    dispatch(setStatusFilter(filter));
  };
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => {
          handleOnClick(statusFilters.all);
        }}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => {
          handleOnClick(statusFilters.active);
        }}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => {
          handleOnClick(statusFilters.completed);
        }}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
