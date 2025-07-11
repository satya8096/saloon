import React from "react";
import { reviews } from "../Data/HomePageData";

const Testimonials = () => {
  return (
    <section className="testimonial-carousel py-5">
      <div className="container">
        <h3 className="text-center fw-bold section-heading mb-4">
          What Our Clients Say
        </h3>

        <div className="carousel-wrapper">
          <div className="carousel-track">
            {[...reviews, ...reviews].map((review, index) => (
              <div className="review-box" key={index}>
                <i className="fa-regular fa-circle-user fa-2x ms-3"></i>
                <div className="stars mb-2">
                  {"★".repeat(review.stars)}
                  {"☆".repeat(5 - review.stars)}
                </div>
                <p className="review-message text-muted small">
                  {review.message}
                </p>
                <hr />
                <p className="client-name fw-semibold mb-0">{review.name}</p>
                <p className="client-location text-muted small mb-0">
                  {review.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
