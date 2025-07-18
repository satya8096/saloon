import React, { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BrandName, phoneNumber } from "./../Data/BrandData";
const Navbar = () => {
  const { pathname } = useLocation();
  const handleNavCollapse = () => {
    if (window.innerWidth <= 1100) {
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (
        navbarToggler &&
        navbarToggler.getAttribute("aria-expanded") === "true"
      ) {
        navbarToggler.click();
      }
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold text-warning fs-4" to="/">
          {BrandName}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars text-dark"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/pricing", label: "Pricing" },
              { path: "/book-an-appointment", label: "Book Now" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-3 fw-medium ${
                      isActive ? "active-link text-warning" : "text-dark"
                    }`
                  }
                  onClick={handleNavCollapse}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              to={`tel:${phoneNumber}`}
              className="btn btn-outline-dark m-2"
            >
              <i className="fa-solid fa-calendar-check"></i> Book Appointment
            </Link>
            <Link
              to={"https://maps.app.goo.gl/e6CqK1PzxrEuhNrV6"}
              className="btn btn-outline-info m-2"
            >
              <i className="fa-solid fa-location-dot"></i> Saloon Finder
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
