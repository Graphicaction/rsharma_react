import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <div className="nav-contents mx-2">
      <div className="my-5">
          <img className="img img-thumbnail mb-2" src={require('../../images/mypic.jpg')} alt="My pic" />
          <h3>Rashmi Sharma</h3>
          <h5><i>Full-Stack Web Developer</i></h5>
      </div>
      <div className="nav flex-column">
        <ul className="navbar-nav">
          <li className="nav-item my-2">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active font-weight-bold"
                  : "nav-link font-weight-bold"
              }
            >
              About me
            </Link>
          </li> 
          <li className="nav-item my-2">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active font-weight-bold" : "nav-link font-weight-bold"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item my-2">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active font-weight-bold" : "nav-link font-weight-bold"}
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
                    <i className="fa fa-linkedin fa-lg mr-3"></i>
                </a>
                
                <a rel="noopener noreferrer" href="https://github.com/Graphicaction" target="_blank" className="button button-icon">
                    <i className="fa fa-github fa-lg ml-3"></i>
                </a>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Navbar;