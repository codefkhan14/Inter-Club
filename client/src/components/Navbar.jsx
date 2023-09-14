import React, { useState } from "react";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isDropdownLearn, setDropdownLearn] = useState(false);
  const [isDropdownContest, setDropdownContest] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdownLearning = () => {
    setDropdownLearn(!isDropdownLearn);
  };
  const toggleDropdownContest = () => {
    setDropdownContest(!isDropdownContest);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="top-navbar">

   
    <nav className="navbar">
      <div className="navbar-logo">
        <h2 className="navbarname">
          <Link to="/">INTER Club</Link>
        </h2>
      </div>
      <div
        className={`mobile-menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <RxCross1 /> : <RiMenu3Fill />}
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li className="navbar-item">
          <Link to="/" className="navbar-link active">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/About" className="navbar-link">
            About
          </Link>
        </li>

        <li className="navbar-item dropdown">
          <div className="navbar-link" onClick={toggleDropdownLearning}>
            Learning
            <i className={`arrow ${isDropdownLearn ? "up" : "down"}`}>
              {isDropdownLearn ? <MdArrowDropUp /> : <MdArrowDropDown />}{" "}
            </i>
          </div>
          {isDropdownLearn && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/Learning/Technologies" className="dropdown-link">
                  Technologies
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Learning/Programming-Language" className="dropdown-link">
                  Programming Language
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Learning/Quize" className="dropdown-link">
                  Quize
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Learning/Interview-prepration" className="dropdown-link">
                  Interview Prepration
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="navbar-item dropdown">
          <div className="navbar-link" onClick={toggleDropdownContest}>
            Contest
            <i className={`arrow ${isDropdownContest ? "up" : "down"}`}>
              {isDropdownContest ? <MdArrowDropUp /> : <MdArrowDropDown />}{" "}
            </i>
          </div>
          {isDropdownContest && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/Contest/Quize-contest" className="dropdown-link">
                  Quize Contest
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Contest/Coding-contest" className="dropdown-link">
                  Coding Contest
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="navbar-item">
          <Link to="/Contact" className="navbar-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
