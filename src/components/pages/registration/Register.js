import { Link } from "react-router-dom";
import "./register.css";

import React from "react";

export const Register = () => {
  return (
    <section id="register" className="register">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Registration</h2>
          <p>Become a Member</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6 offset-md-3 mt-2 p-4">
            <form className="register-form">
              <div className="row gy-4">
                <div className="col-md-12 ">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <div className="col-md-12 ">
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter Phone Number"
                    required
                  />
                </div>
                <div className="col-md-12 ">
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter Full Address"
                    required
                  />
                </div>
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
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    name="cPassword"
                    placeholder="Enter Confirm Password"
                    required
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Submit</button>
                </div>
                <div className="col-md-12 text-center">
                  Already a member? <Link to="/login">Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
