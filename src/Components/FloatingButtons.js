// src/components/FloatingButtons.js
import React, { useEffect, useState } from "react";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll button after scrolling 200px
  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918331889448?text=Hi%2C%20I%20would%20like%20to%20book%20a%20salon%20appointment"
        className="btn btn-success shadow whatsapp-btn"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-whatsapp fa-lg"></i>
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          className="btn btn-warning shadow top-btn"
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
