import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ navTheme, currentPage }) => {
  const location = useLocation();
  
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/about') return 'details';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const activePage = getActivePage();

  return (
    <nav className={`navbar navbar--${navTheme}`}>
      <ul>
        <li>
          <Link 
            to="/" 
            className={activePage === 'home' ? 'active' : ''}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about"
            className={activePage === 'details' ? 'active' : ''}
          >
            Details
          </Link>
        </li>
        <li>
          <Link 
            to="/contact"
            className={activePage === 'contact' ? 'active' : ''}
          >
            Thank You
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;