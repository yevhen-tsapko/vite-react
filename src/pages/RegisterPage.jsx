import { useDispatch } from "react-redux";
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefoult();
    const form = evt.currentTarget;
    dispatch({
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input type="text" name="name" placeholder="Enter your name" />
      </label>
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
