import React from "react";
import { Link } from "react-router-dom";
import { ContactPageSEO } from "../Data/AllPagesSEO";
import { emailAdress, phoneNumber } from "../Data/BrandData";

const Contact = () => {
  return (
    <section className="contact-section">
      {ContactPageSEO}
      <section className="contact-hero-section">
        <div className="container">
          <div className="row align-items-center gy-4 flex-lg-row flex-column-reverse">
            {/* Left Section */}
            <div className="col-lg-6 text-section text-lg-start text-center">
              <h2 className="fw-bold text-dark hero-title">
                Get in Touch with Us
              </h2>
              <span className="text-success home-tagline">
                Beauty Helpdesk – Call or Click!
              </span>
              <p className="text-muted mb-4">
                Have a question, need assistance, or want to book a beauty
                session? We're just a message away. Let's bring the salon to
                your doorstep!
              </p>
              <Link
                to={`tel:${phoneNumber}`}
                className="btn btn-warning fw-semibold px-4 py-2"
              >
                <i className="fa-solid fa-phone"></i> Contact Now
              </Link>
            </div>

            {/* Right Section */}
            <div className="col-md-6 text-center">
              <div className="text-center">
                <img
                  src={require("./../Assets/img7.jpeg")}
                  alt="Contact Us"
                  className="img-fluid rounded-4 shadow contact-hero-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* Contact Form */}
          <div className="col-md-6 d-none">
            <div className="contact-card shadow p-4 rounded-4">
              <h4 className="mb-4 text-dark">Send Us a Message</h4>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control rounded-pill"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control rounded-4"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 rounded-pill"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="row justify-content-around align-items-center g-1 my-5 ">
            {/* Left Side – Contact Info */}
            <div className="col-md-5">
              <div className="contact-info-box p-4 shadow-sm rounded bg-white">
                <h4 className="fw-bold mb-3 text-dark">Let's Connect</h4>
                <p className="text-muted mb-2">
                  Reach out to us for appointments, questions, or
                  collaborations. We’d love to hear from you.
                </p>

                <ul className="list-unstyled mb-3">
                  <li className="mb-2">
                    <strong>Phone:</strong> <br />
                    <a
                      href={`tel:${phoneNumber}`}
                      className="text-decoration-none text-dark"
                    >
                      +{phoneNumber}
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>Email:</strong> <br />
                    <a
                      href={`mailto:${emailAdress}`}
                      className="text-decoration-none text-dark"
                    >
                      {emailAdress}
                    </a>
                  </li>
                  <li className="mb-2">
                    <strong>WhatsApp:</strong> <br />
                    <a
                      href={`https://wa.me/${phoneNumber}?text=Hi!%20I'm%20interested%20in%20booking%20a%20salon%20service%20at%20home.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-success"
                    >
                      +{phoneNumber}
                    </a>
                  </li>
                </ul>

                <a
                  href={`https://wa.me/${phoneNumber}?text=Hi!%20I'm%20interested%20in%20booking%20a%20salon%20service%20at%20home.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success rounded-pill px-4 fw-semibold"
                >
                  <i className="fab fa-whatsapp fa-lg"></i> Chat on WhatsApp
                </a>

                <div className="social-icons d-flex gap-3 mt-4">
                  <a href="/" className="text-dark">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="/" className="text-dark">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="/" className="text-dark">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="/" className="text-dark">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img
                src={require("./../Assets/img12.avif")}
                alt="Contact Illustration"
                className="img-fluid rounded-4 shadow-sm contact-image"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="contact-cta-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-md-8 mb-4 mb-md-0">
              <h3 className="fw-bold">Still Have Questions? Let’s Talk!</h3>
              <p className="text-muted mb-0">
                Whether you need more details, have specific requests, or just
                want to chat before booking — we’re here to help.
              </p>
            </div>
            <div className="col-md-4 text-md-end">
              <Link
                to={`tel:${phoneNumber}`}
                className="btn btn-warning fw-semibold px-4 py-2"
              >
                <i className="fa-solid fa-phone"></i> Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
