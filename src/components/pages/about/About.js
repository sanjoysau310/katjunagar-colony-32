import React from "react";

import about from "../../../assets/images/landing/hero-img.png";
import "./about.css";

export const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay={200}>
              <div className="content">
                <h3>Who We Are</h3>
                <h2>
                    Katjunagar Colony 32
                </h2>
                <p>
                  Katjunagar is a neighbourhood located in South Kolkata in the
                  city of Kolkata, West Bengal, India. The adjacent
                  neighbourhoods to the locality include Jadavpur, South City,
                  Poddar Nagar, Jodhpur Park, Lake Gardens, Bikramgarh and Golf
                  Green. Some important institutes in and around the locality
                  include Central Glass and Ceramic Research Institute, Regional
                  Institute of Printing Technology, APC Polytechnic, Indian
                  Association for the Cultivation of Science, Jadavpur
                  University, Indian Institute of Chemical Biology, etc. It is
                  well known for its proximity to South City Mall, Jadavpur
                  University, Gariahat, Prince Anwar Shah Road, Jadavpur railway
                  station and 8B Bus Stand.
                </p>
                <div className="text-center text-lg-start">
                  <a
                    href="#"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>
                    <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay={200}>
              <img src={about} className="img-fluid" alt="about" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
