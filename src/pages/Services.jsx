import React from "react";
import { NavLink, Outlet, Route } from "react-router-dom";

export default function Services() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <div className="service-wrapper h-screen flex flex-col items-center">
      <h1 className="text-center font-semibold text-5xl">Our Services</h1>
      <div className="service-link-container">
        <nav className="service-link-container flex gap-4 pt-10 uppercase">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/manicure"
          >
            Manicure
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/pedicure"
          >
            Pedicure
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/packages"
          >
            Packages
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/artificial-nails"
          >
            Artificial Nails
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/kids-services"
          >
            Kids Services
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/eyeslash-extension"
          >
            Eyeslash Extension
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : null)}
            to="/services/extra-services"
          >
            Extra services
          </NavLink>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
