import React from "react";
import "./navbar.css";

const NavBar = (props) => {
  const items = ["Summary", "Trends", "Contributors", "Statistics"];

  return (
    <nav className="navbar navbar-expand-lg bg-body-white">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {items.map((item, id) => (
              <li className="nav-item">
                <button
                  className={`nav-link ${props.activeItem === id ? "active" : ""}`}
                  href="#"
                  onClick={() => props.handleNavItemClick(id)}
                >
                  {item}
                </button>
                {id === props.activeItem && <div className="active-line"></div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
