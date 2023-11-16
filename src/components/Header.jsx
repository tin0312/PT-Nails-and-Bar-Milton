import React from "react";
import { Link, NavLink } from "react-router-dom";

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
              src="./src/assets/images/darkBgLogo.jpg"
              alt="light-logo"
            />
          </Link>
        </div>
        <nav className="navigation-link-container flex gap-4">
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
            to="/services"
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
        </nav>
      </div>
    </header>
  );
}
