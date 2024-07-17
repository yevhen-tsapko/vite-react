import { useDispatch } from "react-redux";
export const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefoult();
    const form = evt.currentTarget;
    dispatch({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" placeholder="Enter your email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
