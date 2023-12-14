import React from "react";

const NavTabs = (props) => {
  return (
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <button
          class={`nav-link ${props.activeTab === 0 ? "active" : ""}`}
          href="#"
          onClick={() => props.handleNavTabClick(0)}
        >
          Unique users per day
        </button>
      </li>
      <li class="nav-item">
        <button
          class={`nav-link ${props.activeTab === 1 ? "active" : ""}`}
          href="#"
          onClick={() => props.handleNavTabClick(1)}
        >
          Posts per day
        </button>
      </li>
      <li class="nav-item">
        <button
          class={`nav-link ${props.activeTab === 2 ? "active" : ""}`}
          href="#"
          onClick={() => props.handleNavTabClick(2)}
        >
          Comments per day
        </button>
      </li>
      <li class="nav-item">
        <button
          class={`nav-link ${props.activeTab === 3 ? "active" : ""}`}
          href="#"
          onClick={() => props.handleNavTabClick(3)}
        >
          Unanswered Questions per day
        </button>
      </li>
    </ul>
  );
};

export default NavTabs;
