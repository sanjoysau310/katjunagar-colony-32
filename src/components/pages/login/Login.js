import { Link, NavLink } from "react-router-dom";
import "./login.css";

import React from "react";

export const Login = () => {
  return (
    <section id="login" className="login">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Login</h2>
          <p>Member Login</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6 offset-md-3 mt-2 p-4">
            <form className="login-form">
              <div className="row gy-4">
                <div className="col-md-12 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Login</button>
                </div>
                <div className="col-md-12 text-center">
                  Not a member yet? <Link to="/register">Join Us</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
