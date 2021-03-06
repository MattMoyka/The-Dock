import { useState } from "react";
import "./Signin.css";
import { signIn } from "../../Services/users";
import { useHistory, Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

export default function Signin(props) {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/items");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
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
      return (
        <button type="submit" className="submit-button-sign-in">
          Sign In
        </button>
      );
    }
  };

  const { email, password } = form;

  return (
    <Layout>
      <div className="form-div">
        <form className="form-sign-in" onSubmit={onSignIn}>
          <h3 id="signin-title">Login to Your Account</h3>
          <div className="inputs">
            <label>Email</label>
            <input
              required
              className="input"
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Password</label>
            <input
              required
              className="input"
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {renderError()}
          <Link to='/signup'>Don't have an account? Create One</Link>
        </form>
      </div>
    </Layout>
  );
}
