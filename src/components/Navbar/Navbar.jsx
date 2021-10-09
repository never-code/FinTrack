import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
      <>
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              FINANCIAL ANALYSIS
              {/* <i className="fas fa-code"></i> */}
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/expensecal"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  EXPENSE-CALCULATOR
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/emi"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  EMI
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/news"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  NEWS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;