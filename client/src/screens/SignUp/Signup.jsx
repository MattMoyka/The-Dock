import { useState } from "react";
import { signUp } from "../../Services/users";
import { useHistory, Link } from "react-router-dom";
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
      alert('Please check username and email. Username has to contain letters and numbers only. Email has to be in the correct format. If you already have an account please sign in.')
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
        <button type="submit" className="submit-button-sign-up">
          Sign Up
        </button>
      );
    }
  };

  const { username, email, password, phone } = form;

  return (
    <Layout>
      <div className="form-div">
        <form className="form-sign-up" onSubmit={onSignUp}>
          <h3 id="signup-title">Create Account</h3>

          <div className="inputs">
            <label>Username</label>
            <input
              required
              className="input"
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Email Address</label>
            <input
              required
              className="input"
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="inputs">
            <label>Phone Number</label>
            <input
              required
              className="input"
              name="phone"
              value={phone}
              type="text"
              placeholder="Phone"
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
              placeholder="password"
              onChange={handleChange}
            />
          </div>
          {renderError()}
          <Link to='/signin'>Already have an account? Sign In</Link>
        </form>
      </div>
    </Layout>
  );
}
