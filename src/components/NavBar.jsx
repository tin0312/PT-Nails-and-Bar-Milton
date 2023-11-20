import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import storeLogo from "../assets/images/store-logo.jpg";
import instagramIcon from "../assets/images/instagram-icon.svg";
import facebookIcon from "../assets/images/facebook-icon.svg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="header-container w-3/4 mx-auto flex items-center desktop:justify-between mobile:justify-between">
      {!isMenuOpen && <div className="header-logo-container">
        <Link className="site-logo" to="/">
          <img
            className="desktop:w-2/12 mobile:w-3/12 rounded-full"
            src={storeLogo}
            alt="dark-logo"
          />
        </Link>
      </div>}

      {/* Hamburger Menu Icon */}
      <div className="desktop:hidden">
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } flex navigation-link-container desktop:gap-4 items-center mobile:gap-6`}
      >
        <NavLink
          to="."
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          HOME
        </NavLink>
        <NavLink
          to="/services/manicure"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/gallery"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          
        >
          GALLERY 
        </NavLink>
       { !isMenuOpen && <div className="social-icon-container flex gap-2 items-center">
          <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
            <img className="w-6" src={facebookIcon} alt="facebook-icon" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
            <img className="w-10" src={instagramIcon} alt="instagram-icon" />
          </a>
        </div>}
      </nav>
    </div>
  );
}
