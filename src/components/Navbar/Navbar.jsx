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
              FinTrack
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/budget-tracker"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  BUDGET-TRACKER
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