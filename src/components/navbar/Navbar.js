import { NavLink } from "react-router-dom";
import "./navbar.css";

import React from "react";

export const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink to="" className="nav-link scrollto">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="nav-link scrollto">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="events" className="nav-link scrollto">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="gallery" className="nav-link scrollto">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink to="members" className="nav-link scrollto">
            Members
          </NavLink>
        </li>
        <li className="dropdown">
          <NavLink to="bewithus" className="nav-link scrollto">
            Be with us
            <i className="fa fa-chevron-down" />
          </NavLink>
          <ul>
            <li>
              <NavLink to="register" className="nav-link scrollto">
                Join Us
              </NavLink>
            </li>
            <li>
              <NavLink to="donate" className="nav-link scrollto">
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
          <NavLink to="contact" className="nav-link scrollto">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="login" className="getstarted scrollto">
            Login
          </NavLink>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
  );
};
