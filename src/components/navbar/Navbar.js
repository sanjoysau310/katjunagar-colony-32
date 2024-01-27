import { NavLink } from "react-router-dom";
import "./navbar.css";

import React, { useState } from "react";

export const Navbar = () => {
  const [navClass, setNavClass] = useState("navbar");
  const toggleNav = () => {
    navClass === "navbar"
      ? setNavClass("navbar-mobile")
      : setNavClass("navbar");
  };

  const closeNav = () => {
    setNavClass("navbar");
  };
  return (
    <nav id="navbar" className={navClass}>
      <ul>
        <li>
          <NavLink to="" className="nav-link scrollto" onClick={closeNav}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="nav-link scrollto" onClick={closeNav}>
            About
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="events" className="nav-link scrollto" onClick={closeNav}>
            Events
            {/* <i className="fa fa-chevron-down" /> */}
          </NavLink>
          <ul>
            <li>
              <NavLink
                to="upcomingEvents"
                className="nav-link scrollto"
                onClick={closeNav}>
                Upcoming
              </NavLink>
            </li>
            <li>
              <NavLink
                to="gallery"
                className="nav-link scrollto"
                onClick={closeNav}>
                Gallery
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="members"
            className="nav-link scrollto"
            onClick={closeNav}>
            Members
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink
            to="bewithus"
            className="nav-link scrollto"
            onClick={closeNav}>
            Be with us
            {/* <i className="fa fa-chevron-down" /> */}
          </NavLink>
          <ul>
            <li>
              <NavLink
                to="register"
                className="nav-link scrollto"
                onClick={closeNav}>
                Join Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="plans"
                className="nav-link scrollto"
                onClick={closeNav}>
                Membership Plans
              </NavLink>
            </li>
            <li>
              <NavLink
                to="donate"
                className="nav-link scrollto"
                onClick={closeNav}>
                Donate
              </NavLink>
            </li>
            {/* 
            <li className="dropdown">
              <a href="#">
                <span>Deep Drop Down</span>{" "}
                <i className="bi bi-chevron-right" />
              </a>
              <ul>
                <li>
                  <a href="#">Deep Drop Down 1</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 4</a>
                </li>
                <li>
                  <a href="#">Deep Drop Down 5</a>
                </li>
              </ul>
            </li>
             */}
          </ul>
        </li>
        {/* 
        <li className="dropdown megamenu">
          <a href="#">
            <span>Mega Menu</span> <i className="bi bi-chevron-down" />
          </a>
          <ul>
            <li>
              <a href="#">Column 1 link 1</a>
              <a href="#">Column 1 link 2</a>
              <a href="#">Column 1 link 3</a>
            </li>
            <li>
              <a href="#">Column 2 link 1</a>
              <a href="#">Column 2 link 2</a>
              <a href="#">Column 3 link 3</a>
            </li>
            <li>
              <a href="#">Column 3 link 1</a>
              <a href="#">Column 3 link 2</a>
              <a href="#">Column 3 link 3</a>
            </li>
            <li>
              <a href="#">Column 4 link 1</a>
              <a href="#">Column 4 link 2</a>
              <a href="#">Column 4 link 3</a>
            </li>
          </ul>
        </li>
         */}
        <li>
          <NavLink
            to="contact"
            className="nav-link scrollto"
            onClick={closeNav}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="login"
            className="getstarted scrollto"
            onClick={closeNav}>
            Login
          </NavLink>
        </li>
      </ul>
      {navClass === "navbar" ? (
        <i className="fa fa-bars mobile-nav-toggle" onClick={toggleNav} />
      ) : (
        <i className="fa fa-times mobile-nav-toggle" onClick={toggleNav} />
      )}
    </nav>
  );
};
