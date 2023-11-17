import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css";

const Sidebar = (props) => {
  const main_menu = ["Notifications", "DMs", "Calendar", "Search"];
  const course_menu = ["Class feed", "Rooms", "Files", "Grades", "Settings"];
  const main_icons = ["bell", "chat", "calendar-week", "search"];
  const course_icons = ["file-earmark-richtext", "hash", "folder", "award", "gear"];

  return (
    <div className="d-flex flex-column align-items-start">
      <div className="brand-logo">Campuswire</div>
      <div className="sidebar navbar">
        <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
          <button className="sidenav nav-link rounded-pill text-start active" type="button">
            <i className="bi bi-clipboard-data-fill"></i>
            <span>Dashboard</span>
          </button>
          {main_menu.map((item, id) => (
            <button className="sidenav nav-link rounded-pill text-start" type="button">
              <i className={`bi bi-${main_icons[id]}`}></i>
              <span>{item}</span>
            </button>
          ))}
        </div>
        <nav className="flex-row">
          <img
            className="rounded-circle active"
            src="https://files.campuswire.com/9dcb53a5-7edb-4a44-8a63-f968140a5513/1692107837674.png"
            alt="CICS UCA"
          />
          <img
            className="rounded-circle"
            src="https://s3-us-west-2.amazonaws.com/campuswire-default-images/group-architecture.png"
            alt="CICS 298A"
          />
          <button type="button" className="btn btn-outline btn-circle">
            <i className="bi bi-chevron-down"></i>
          </button>
        </nav>
        <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
          {course_menu.map((item, id) => (
            <button className="sidenav nav-link rounded-pill text-start" type="button">
              <i className={`bi bi-${course_icons[id]}`}></i>
              <span>{item}</span>
            </button>
          ))}
        </div>
        <button className="collapse-btn d-flex align-items-center" type="button">
          <i className="bi bi-arrow-bar-left"></i>
          <span>Collapse</span>
        </button>
      </div>
      <div className="user-settings">
        <img
          src="https://s3-us-west-2.amazonaws.com/campuswire-default-images/user-cyan.png"
          alt="User"
        />
        <span className="user-name">Sus-User</span>
        <button className="user-btn">
          <i class="bi bi-gift"></i>
        </button>
        <button className="user-btn" href="mailto:help@campuswire.com">
          <i class="bi bi-question-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
