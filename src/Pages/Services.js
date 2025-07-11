import React from "react";
import { Link } from "react-router-dom";
import { ServicePageSEO } from "../Data/AllPagesSEO";
import { services } from "../Data/ServicesPageData";

const Services = () => {
  return (
    <section className="bg-light">
      {ServicePageSEO}
      <section className="services-hero-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Text Section */}
            <div className="col-md-6">
              <h1 className="fw-bold text-dark services-hero-title">
                Salon Services at Your Doorstep in Hyderabad
              </h1>
              <p className="text-muted mt-3 services-hero-desc">
                Discover a wide range of beauty treatments and salon services
                delivered by professionals at your home. Choose your service,
                relax, and let us pamper you in comfort.
              </p>
              <a
                href="/book-an-appointment"
                className="btn btn-warning px-4 py-2 mt-4 fw-semibold"
              >
                Book a Service
              </a>
            </div>

            {/* Image Section */}
            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-photo/hairdresser-making-hairdo-young-woman-salon_1303-20925.jpg"
                alt="Salon Services"
                className="img-fluid rounded-4 shadow services-hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="services-section py-5">
        <div className="container">
          <h3 className="text-center fw-bold section-heading mb-5">
            Our Salon Services
          </h3>
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="service-card shadow-sm h-100 rounded-4 border-0 p-4">
                  <div className="mb-3 d-flex align-items-start gap-3">
                    <i className={`${service.icon} fa-2x text-warning`}></i>
                    <div>
                      <h5 className="fw-semibold text-dark mb-1">
                        {service.title} at Home
                      </h5>
                      <p className="small text-muted mb-1">
                        {service.duration}
                      </p>
                      {service.tag && (
                        <span className="badge bg-danger text-light small">
                          {service.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-muted mb-4 small">{service.description}</p>
                  <a
                    href="/book-an-appointment"
                    className="btn btn-outline-warning w-100 fw-semibold"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="services-cta-section py-5">
        <div className="container">
          <div className="cta-box rounded-4 p-5 text-center shadow">
            <h3 className="fw-bold section-heading mb-3">
              Ready to Pamper Yourself?
            </h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              Book professional salon services right at your doorstep. Choose
              from a wide range of grooming and beauty treatments — all from the
              comfort of your home in Hyderabad.
            </p>
            <Link
              to="/book-an-appointment"
              style={{ whiteSpace: "nowrap" }}
              className="btn btn-warning px-4 py-2 fw-semibold mt-4"
            >
              Book an Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;
