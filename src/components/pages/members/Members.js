import React from "react";
import "./members.css";

import data from "../../../config/members.json";

export const Members = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Members</h2>
          {/* <p>Our hard working members</p> */}
        </header>

        {/* <div className="row gy-4">
          <header className="section-header">
            <p>কাটজুনগর কলোনি কমিটি</p>
          </header>
          <div
            className="col-lg-2 col-md-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-delay={100}>
            <div className="member">
              <div className="member-img">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt
                />
                <div className="social">
                  <a href>
                    <i className="bi bi-twitter" />
                  </a>
                  <a href>
                    <i className="bi bi-facebook" />
                  </a>
                  <a href>
                    <i className="bi bi-instagram" />
                  </a>
                  <a href>
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>

              <div className="member-info">
                <h4>Bhabatosh Das</h4>
                <span>President</span>
                <p>2023-Present</p>
                <p>Katjunagar Colony Committee</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="row gy-4">
          {data.departments.map((department, index) => {
            return (
              <>
                <header key={index} className="section-header">
                  <p>{department.name}</p>
                </header>
                {department.keyMembers.map((member, id) => {
                  return (
                    <div
                      className="col-lg-2 col-md-6 d-flex align-items-stretch"
                      data-aos="fade-up"
                      data-aos-delay={100}
                      key={id}>
                      <div className="member">
                        <div className="member-info">
                          <h4>{member.name}</h4>
                          <span>{member.designation}</span>
                          <p>{member.duration}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
