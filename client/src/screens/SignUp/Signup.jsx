import { useState } from "react";
import { signUp } from "../../Services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Signup.css";

export default function SignUp(props) {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  console.log(form);

  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      history.push("/items");
    } catch (error) {
      console.error(error);
      setForm({
        username: "",
        email: "",
        phone: "",
        password: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };

  const { username, email, password, phone } = form;

  return (
    <Layout>
      <div className="form-div">
        <h3>Sign Up</h3>

        <form onSubmit={onSignUp}>
          <label>Username</label>
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <label>Email address</label>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            required
            name="phone"
            value={phone}
            type="text"
            placeholder="Phone"
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
}
