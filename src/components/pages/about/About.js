import React, { useEffect, useState } from "react";

import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery10 from "../../../assets/images/gallery/gallery10.jpg";
import "./about.css";
import { Link } from "react-router-dom";

export const About = () => {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlag(!flag);
    }, 3000);
    return () => clearInterval(interval);
  }, [flag]);
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
                <h2>Katjunagar Colony 32</h2>
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
                  <Link
                    to="/contact"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Know More</span>
                    <i className="fa fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 d-flex align-items-center about-img"
              data-aos="zoom-out"
              data-aos-delay={200}>
              {flag ? (
                <img src={gallery10} className="img-fluid" alt="banner1" />
              ) : (
                <img src={gallery3} className="img-fluid" alt="banner2" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
