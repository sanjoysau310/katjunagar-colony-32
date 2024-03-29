import React, { useEffect, useState } from "react";
import banner1 from "../../../assets/images/landing/banner1.png";
import banner2 from "../../../assets/images/landing/banner2.png";
import logo1 from "../../../assets/images/landing/logo1.png";
import banner3 from "../../../assets/images/landing/banner3.png";
import banner4 from "../../../assets/images/landing/banner4.png";
import banner5 from "../../../assets/images/landing/banner5.png";

import "./landingPage.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

export const LandingPage = () => {
  const images = [logo1, banner2, banner4, banner1, banner3, banner5];
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              We live in a Colony where Culture Defines us
            </h1>
            <h2 data-aos="fade-up" data-aos-delay={400}>
              We are one big, happy family
            </h2>
            <div data-aos="fade-up" data-aos-delay={600}>
              <div className="text-center text-lg-start">
                <Link
                  to="register"
                  className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Join Us</span>
                  <i className="fa fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 hero-img"
            data-aos="zoom-out"
            data-aos-delay={200}>
            {/* {flag ? (
              <img src={banner1} className="img-fluid" alt="banner1" />
            ) : (
              <img src={logo1} className="img-fluid" alt="banner2" />
            )} */}
            <ImageSlider images={images} />
          </div>
        </div>
      </div>
    </section>
  );
};
