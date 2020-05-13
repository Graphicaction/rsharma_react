import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="nav-contents mx-2">
      <div className="my-5">
          <img className="img img-thumbnail mb-3" src={require('../../images/mypic.jpg')} alt="My pic" />
          <h3>Rashmi Sharma</h3>
          <h5><i>Full-Stack Web Developer</i></h5>
      </div>
      <div className="nav flex-column nav-pills h5 mb-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <ul className="navbar-nav">
          <li className="nav-item" id="about-me-tab" data-toggle="pill" role="tab" aria-controls="about-me">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li> 
          <li className="nav-item" id="portfolio-tab" data-toggle="pill" role="tab" aria-controls="portfolio">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item" id="contact-tab" data-toggle="pill" role="tab" aria-controls="contact">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="link-block my-5">
        <div className="link-content">
            <div className="social-icons">
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/rashmi-sharma9/" target="_blank" className="button button-icon">
                    <i className="fa fa-linkedin fa-lg mx-2"></i>
                </a>
                
                <a rel="noopener noreferrer" href="https://github.com/Graphicaction" target="_blank" className="button button-icon">
                    <i className="fa fa-github fa-lg mr-2"></i>
                </a>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Navbar;