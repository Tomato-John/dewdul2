import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  return (
    <>
      <header className="Header">
        <div className="Header-left">
          <button className="Menu-button" onClick={toggleSidebar}>
            ☰ Menu
          </button>
          <Link to="/" className="Header-title">
            Dewdul.com
          </Link>
        </div>
        <button className="Sign-in-button">Sign In</button>
      </header>
      <div className={`Sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
        <button className="Close-button" onClick={toggleSidebar}>
          &times;
        </button>
        <nav className="Sidebar-nav">
          <Link to="/" onClick={toggleSidebar}>Home</Link>
          <Link to="/about" onClick={toggleSidebar}>About Dewdul</Link>
          <a href="#">Profile</a>
          <a href="#">Draw</a>
        </nav>
      </div>
      {isSidebarOpen && <div className="Overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Header;
