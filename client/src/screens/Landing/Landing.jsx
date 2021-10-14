import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Landing.css";

export default function Landing(props) {
  return (
    <div className="main-container">
      <Layout user={props.user}>
        <div className="landing">
          <div className="left-landing">
            <p className="glass">
              The Common Travelers'
              <br /> eCommerce
            </p>
            <p>Buy, Sell, Rent, and Trade Anything from Anywhere </p>
            <p>Do you need anything? Because we've got everything!</p>

            <div className="call">
              <Link to="/items" className="text-call">
                Start Your Journey Now
              </Link>
            </div>
          </div>
          <div className="landing-img">
            <img
              src="https://images.unsplash.com/photo-1599229526921-4f29d42b0b41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80.png"
              height="540px"
              width="360px"
              alt="Dock Sunset"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}
