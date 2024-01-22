import React, { useEffect, useState } from "react";
import banner1 from "../../../assets/images/landing/75th-4.png";
import banner2 from "../../../assets/images/landing/75th-5.png";
import "./landingPage.css";

export const LandingPage = () => {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag(!flag);
    }, 3000);
    return () => clearInterval(interval);
  }, [flag]);
  return (
    <div>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                We offer modern solutions for growing your business
              </h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>
                We are team of talented designers making websites with Bootstrap
              </h2>
              <div data-aos="fade-up" data-aos-delay={600}>
                <div className="text-center text-lg-start">
                  <a
                    href="#about"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Get Started</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay={200}>
              {flag ? (
                <img src={banner1} className="img-fluid" alt="banner1" />
              ) : (
                <img src={banner2} className="img-fluid" alt="banner2" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
