import React, { useState } from "react";

const galleryImages = [
  {
    src: require("./../Assets/img1.jpeg"),
    alt: "Salon Look 1",
  },
  {
    src: require("./../Assets/img2.jpeg"),
    alt: "Hair Styling",
  },
  {
    src: require("./../Assets/img4.jpeg"),
    alt: "Pedicure",
  },
  {
    src: require("./../Assets/img5.jpeg"),
    alt: "Makeup",
  },
  {
    src: require("./../Assets/img9.jpeg"),
    alt: "Pedicure",
  },
  {
    src: require("./../Assets/img6.jpeg"),
    alt: "Salon Look 1",
  },
  {
    src: require("./../Assets/img10.jpeg"),
    alt: "Makeup",
  },
  {
    src: require("./../Assets/img11.jpeg"),
    alt: "Pedicure",
  },
  {
    src: require("./../Assets/img8.jpeg"),
    alt: "Facial",
  },
  {
    src: require("./../Assets/img3.jpeg"),
    alt: "Facial",
  },
  {
    src: require("./../Assets/img7.jpeg"),
    alt: "Hair Styling",
  },
  {
    src: require("./../Assets/img13.jpg"),
  },
  {
    src: require("./../Assets/img14.jpg"),
  },
  {
    src: require("./../Assets/img15.jpg"),
  },
  {
    src: require("./../Assets/img16.jpg"),
  },
  {
    src: require("./../Assets/img17.jpg"),
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-5 gallery-section bg-light">
      <div className="container text-center">
        <h3 className="mb-4 fw-bold section-heading">Our Salon Gallery</h3>
        <p className="text-muted mb-5">
          Explore our latest makeovers, treatments & styles.
        </p>
        <div className="row g-4">
          {galleryImages.map((img, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
              <div
                className="gallery-card shadow-sm"
                onClick={() => handleImageClick(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="img-fluid rounded-3 gallery-thumb"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal show" onClick={closeModal}>
          <div
            className="modal-content-box animate"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
              onClick={closeModal}
            ></button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-img"
            />
            {/* <p className="text-white mt-3">{selectedImage.alt}</p> */}
          </div>
        </div>
      )}
    </section>
  );
}
