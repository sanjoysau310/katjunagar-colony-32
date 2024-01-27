import React from "react";
import logo from "../../assets/images/logo/logo.png";
import "./footer.css";

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <h4>Our Newsletter</h4>
              <p>Find Queries</p>
            </div>
            <div className="col-lg-6">
              <form action method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <img src={logo} alt="logo" />
                <span>Katjunagar Colony 32</span>
              </a>
              <p>
                We live in a Colony where Culture Defines us. We are one big,
                happy family.
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="fa-brands fa-square-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="fa fa-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" /> <a href="#">Events</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="fa fa-chevron-right" /> <a href="#">Sports</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />{" "}
                  <a href="#">Cultural Program</a>
                </li>
                <li>
                  <i className="fa fa-chevron-right" />{" "}
                  <a href="#">Social Services</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Katjunagar
                <br />
                Kolkata, WB 700032
                <br />
                India <br />
                <br />
                <strong>Phone:</strong> +91-9836167970
                <br />
                <strong>Email:</strong> katjunagarcolony32@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>SanmoS</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">Designed by SanmoS</div>
      </div>
    </footer>
  );
};
