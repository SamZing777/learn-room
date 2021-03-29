import React, { Fragment } from "react";
import Navigation from "../../partials/navigation";

const Signup = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="body">
        <h3 className="title">Create your learnroom account</h3>
        <div className="authentication-container">
          <div className="login-with-email">
            <form>
              <div className="input-container">
                <p>Name</p>
                <input type="text" placeholder="email" />
              </div>
              <div className="input-container">
                <p>Email</p>
                <input type="text" placeholder="email" />
              </div>
              <div className="input-container">
                <p>Password</p>
                <input type="password" placeholder="password" />
              </div>
              <div className="input-container">
                <p>Confirm Password</p>
                <input type="password" placeholder="Confirm password" />
              </div>
              <div className="input-container">
                <button className="auth-btn">Sign me up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
