import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/Auth/selectors";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

// eslint-disable-next-line react/prop-types
export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
