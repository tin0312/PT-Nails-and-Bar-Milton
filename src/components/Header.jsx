import React from "react";
import { Link, NavLink } from "react-router-dom";
import darkBgLogo from "../assets/images/darkBgLogo.jpg";
import instagramIcon from "../assets/images/instagram-icon.svg"
import facebookIcon from "../assets/images/facebook-icon.svg"

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header className="header-wrapper pt-4 pb-20 w-screen">
      <div className="header-container w-3/4 mx-auto flex items-center justify-between">
        <div className="header-logo-container">
          <Link className="site-logo" to="/">
            <img
              className="w-2/12 rounded-full"
              src={darkBgLogo}
              alt="dark-logo"
            />
          </Link>
        </div>
        <nav className="navigation-link-container flex gap-4 items-center">
          <NavLink
            to="."
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/promotion"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            PROMOTION
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
          <div className="social-icon-container flex gap-2 items-center">
            <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
              <img
                className="w-6"
                src={facebookIcon}
                alt="facebook-icon"
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61553458505834&mibextid=LQQJ4d">
              <img
                className="w-10"
                src={instagramIcon}
                alt="instagram-icon"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
