import React from "react";
import "./beWithUs.css";
import { Link } from "react-router-dom";

export const BeWithUs = () => {
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Be with us</h2>
          <p>Join a large family as you can</p>
        </header>
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={200}>
            <div className="service-box blue">
              <i className="ri-discuss-line icon" />
              <h3>Donate</h3>
              <p>Offer what you have to server better</p>
              <Link to="/donate" className="read-more">
                <span>Read More</span> <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={400}>
            <div className="service-box green">
              <i className="ri-discuss-line icon" />
              <h3>Membership Plans</h3>
              <p>Know our members plans</p>
              <Link to="/plans" className="read-more">
                <span>See More</span> <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={500}>
            <div className="service-box red">
              <i className="ri-discuss-line icon" />
              <h3>Join Us</h3>
              <p>Be a part of large family</p>
              <Link to="/register" className="read-more">
                <span>Click here</span> <i className="fa fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
