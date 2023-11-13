import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Sidebar from "./components/sidebar";
import NavBar from "./components/navbar";
import Summary from "./components/summary";
import Trends from "./components/trends";

function App() {
  const [activeItem, setActiveItem] = useState(0); // Initialize the active item

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar-wrapper col-1">
            <Sidebar />
          </div>
          <div className="content-wrapper col">
            <h5>Dashboard</h5>
            <NavBar activeItem={activeItem} handleNavItemClick={handleNavItemClick} />
            {activeItem === 0 && <Summary />}
            {activeItem === 1 && <Trends />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
