import React from "react";
import { BrandName, emailAdress, phoneNumber } from "../Data/BrandData";

const Footer = () => {
  return (
    <footer className="footer-with-bg">
      <div className="footer-overlay">
        <div className="container text-light">
          <div className="row gy-4">
            {/* Brand and Tagline */}
            <div className="col-md-4 col-12">
              <h5 className="text-warning fw-bold">{BrandName}</h5>
              <p className="small">
                Experience premium beauty & salon services at your home in
                Hyderabad. Hygiene, comfort & care — all at your doorstep.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-2 col-6">
              <h6 className="text-uppercase text-warning mb-3">Quick Links</h6>
              <ul className="list-unstyled small">
                <li>
                  <a href="/" className="text-light text-decoration-none">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-light text-decoration-none"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/pricing"
                    className="text-light text-decoration-none"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/book" className="text-light text-decoration-none">
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-light text-decoration-none"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Popular Services */}
            <div className="col-md-3 col-6">
              <h6 className="text-uppercase text-warning mb-3">Our Services</h6>
              <ul className="list-unstyled small">
                <li>Facial & Cleanup</li>
                <li>Bridal Makeup</li>
                <li>Haircut & Styling</li>
                <li>Waxing & Threading</li>
                <li>Pedicure & Manicure</li>
              </ul>
            </div>

            {/* Contact & Socials */}
            <div className="col-md-3 col-12">
              <h6 className="text-uppercase text-warning mb-3">Contact Us</h6>
              <p className="small mb-1">
                <i className="fas fa-phone-alt me-2"></i>+{phoneNumber}
              </p>
              <p className="small mb-1">
                <i className="fab fa-whatsapp me-2"></i>+{phoneNumber}
              </p>
              <p className="small mb-2">
                <i className="fas fa-envelope me-2"></i>
                {emailAdress}
              </p>

              <div className="d-flex gap-3 mt-2">
                <a href="/" className="text-light">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="/" className="text-light">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
                <a href="/" className="text-light">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
                <a href="/" className="text-light">
                  <i className="fab fa-youtube fa-lg"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="text-secondary" />

          <div className="text-center small">
            <span style={{ fontSize: "1.4rem" }}>&copy;</span>{" "}
            {new Date().getFullYear()} {BrandName}. All rights reserved |
            Developed with ❤️ by{" "}
            <a
              href="https://nexgenwebdesigns.com"
              className="text-warning text-decoration-none"
            >
              NexGen Web Designs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
