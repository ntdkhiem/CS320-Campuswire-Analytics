import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import NavBar from './components/navbar';

function App() {
  const [activeItem, setActiveItem] = useState(0); // Initialize the active item

  const handleNavItemClick = (item) => {
    setActiveItem(item);
  }

  return (
    <div className="App">
      <h5>Dashboard</h5>
      <NavBar activeItem={activeItem} handleNavItemClick={handleNavItemClick} />
    </div>
  );
}

export default App;
