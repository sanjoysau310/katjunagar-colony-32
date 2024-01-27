import { Link, NavLink, useNavigate } from "react-router-dom";
import "./login.css";

import React, { useState } from "react";

import data from "../../../config/creds.json";

export const Login = () => {
  const navigate = useNavigate();
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(creds);
    data.login.map((cred, index) => {
      console.log(cred);
      cred.username === creds.username && cred.password === creds.password
        ? cred.role === "super-admin"
          ? navigate("/sadmin")
          : navigate("/")
        : setMessage("Invalid Credential");
    });
    setCreds({
      username: "",
      password: "",
    });
  };

  return (
    <section id="login" className="login">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Login</h2>
          <p>Member Login</p>
        </header>
        <div className="row gy-4">
          <div className="col-lg-6 offset-md-3 mt-2 p-4">
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-md-12 ">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter Email/Username"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12 text-center">
                  {/* <div className="loading">Loading</div> */}
                  <div className="error-message" />
                  <i>{message}</i>
                  {/* <div className="sent-message">{message}</div> */}
                </div>
                <div className="col-md-12 text-center">
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
