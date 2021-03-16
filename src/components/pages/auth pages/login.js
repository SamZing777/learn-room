import React, { Fragment } from "react";
import Navigation from "../../partials/navigation";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <Fragment>
      <Navigation />
      <div className="body">
        <h3 className="title">Log into your learnroom account</h3>
        <div className="authentication-container">
          <div className="social-account-logins-container">
            <a href="#social-login" className="social-login-button facebook">
              <span className="icon">
                <FaFacebook />
              </span>
              <span className="name">Login with Facebook</span>
            </a>
            <a href="#social-login" className="social-login-button google">
              <span className="icon">
                <FaGoogle />
              </span>
              <span className="name">Login with Google</span>
            </a>
            <a href="#social-login" className="social-login-button apple">
              <span className="icon">
                <FaApple />
              </span>
              <span className="name">Login with Apple</span>
            </a>
          </div>
          <div className="login-with-email">
            <h3 className="title">Login with email</h3>
            <form>
              <div className="input-container">
                <input type="text" placeholder="email" />
              </div>
              <div className="input-container">
                <input type="password" placeholder="password" />
              </div>
              <div className="input-container">
                <button className="auth-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
