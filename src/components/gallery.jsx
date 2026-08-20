import { useEffect, useState } from "react";
import { galleryItems } from "../data/gallery";

const categories = [
  "All",
  "India",
  "Nepal",
  "Thailand",
  "Safari",
  "Hotels",
  "Adventures",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  const currentIndex = selectedImage
    ? filteredItems.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    if (currentIndex === -1) return;

    const previousIndex =
      currentIndex === 0
        ? filteredItems.length - 1
        : currentIndex - 1;

    setSelectedImage(filteredItems[previousIndex]);
  };

  const showNext = () => {
    if (currentIndex === -1) return;

    const nextIndex =
      currentIndex === filteredItems.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(filteredItems[nextIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, currentIndex, filteredItems]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <section className="gallery-section" id="gallery">
        <div className="container">

          <div className="gallery-header">

            <span className="section-label">
              Our Gallery
            </span>

            <h2 className="section-title">
              Moments Worth Remembering
            </h2>

            <p className="gallery-intro">
              A glimpse into the landscapes, adventures,
              cultures and experiences waiting to be explored.
            </p>

          </div>

          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedImage(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="gallery-grid">

            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`gallery-item gallery-item-${index % 6}`}
                onClick={() => setSelectedImage(item)}
                aria-label={`Open ${item.title}`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <span className="gallery-overlay">
                  <span className="gallery-category">
                    {item.category}
                  </span>

                  <strong>
                    {item.title}
                  </strong>
                </span>

              </button>
            ))}

          </div>

        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setSelectedImage(null)}
        >

          <button
            type="button"
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            className="gallery-navigation gallery-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="gallery-lightbox-caption">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

            </div>

          </div>

          <button
            type="button"
            className="gallery-navigation gallery-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

        </div>
      )}
    </>
  );
}

export default Gallery;