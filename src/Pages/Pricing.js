import React from "react";
import { BrandName } from "../Data/BrandData";
import { Link } from "react-router-dom";
import { PricingPageSEO } from "../Data/AllPagesSEO";
import { packages } from "../Data/PricingPageData";

const Pricing = () => {
  return (
    <section className="">
      {PricingPageSEO}
      <section className="pricing-hero-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            {/* Left: Text */}
            <div className="col-md-6">
              <h1 className="fw-bold text-dark pricing-hero-title">
                Affordable Beauty Services at Home
              </h1>
              <p className="text-muted mt-3 pricing-hero-subtitle">
                Discover our flexible pricing plans designed to bring premium
                salon services to your doorstep in Hyderabad — no hidden fees,
                no surprises.
              </p>
              <Link
                to="/book-an-appointment"
                className="btn btn-warning px-4 py-2 fw-semibold mt-4"
              >
                Book Now
              </Link>
            </div>

            {/* Right: Image */}
            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-photo/close-up-face-young-woman-relaxing-gentle_158595-4584.jpg?t=st=1751947903~exp=1751951503~hmac=8cd03d2747dedb4038f5803fd9c4ed45790a9232d3ddfcc395a4ebbd465d53cb&w=1480"
                alt="Pricing"
                className="img-fluid rounded-4 shadow pricing-hero-img"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="container" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="text-center mb-5">
          <h3 className="fw-bold section-heading">Pricing Plans</h3>
          <p className="text-muted">
            Affordable beauty services in Hyderabad | Home salon price list by{" "}
            {BrandName}
          </p>
        </div>

        <div className="row justify-content-center">
          {packages.map((pkg) => (
            <div key={pkg.id} className="col-md-4 mb-4">
              <div className="card border shadow-sm h-100">
                <div className="card-body">
                  {/* Badge */}
                  {pkg.tag && (
                    <div className="mb-3">
                      <span className="badge bg-warning text-dark fw-semibold">
                        {pkg.tag}
                      </span>
                    </div>
                  )}

                  {/* Title & Price */}
                  <h5 className="card-title fw-bold">{pkg.title}</h5>
                  <h6 className="text-success fw-bold mb-2">{pkg.price}</h6>

                  {/* Features List */}
                  <ul className="list-unstyled small mb-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index}>
                        <i className="fas fa-check-circle text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Duration & Best For */}
                  <p className="small mb-1">
                    <strong>⏱ Duration:</strong> {pkg.duration}
                  </p>
                  <p className="small mb-3">
                    <strong>💡 Best for:</strong> {pkg.bestFor}
                  </p>

                  {/* CTA */}
                  <a
                    href="/book"
                    className="btn btn-outline-warning w-100 fw-semibold"
                  >
                    <i className="fas fa-calendar-check me-2"></i>Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="pricing-cta-section py-5">
        <div className="container">
          <div className="cta-box text-center p-5 rounded-4 shadow">
            <h3 className="fw-bold section-heading mb-3">
              Choose the Right Package for You
            </h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
              From quick touch-ups to full bridal treatments, we have a plan for
              every beauty need. Get salon-quality results in the comfort of
              your home — hygienic, professional, and budget-friendly.
            </p>
            <Link
              to="/book-an-appointment"
              className="btn btn-warning px-4 py-2 fw-semibold mt-4"
            >
              Book Your Package
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
