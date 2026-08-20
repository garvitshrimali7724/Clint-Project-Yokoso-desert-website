import { useState } from "react";

const testimonials = [
  {
    quote:
      "Placeholder review — replace this with a verified customer testimonial before publishing.",
    name: "Customer Review Placeholder",
    trip: "Jaisalmer Desert Experience",
  },
  {
    quote:
      "Placeholder review — replace this with a verified customer testimonial before publishing.",
    name: "Customer Review Placeholder",
    trip: "Rajasthan Tour",
  },
  {
    quote:
      "Placeholder review — replace this with a verified customer testimonial before publishing.",
    name: "Customer Review Placeholder",
    trip: "India Travel Experience",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  const current = testimonials[active];

  const previous = () => {
    setActive((value) =>
      value === 0 ? testimonials.length - 1 : value - 1
    );
  };

  const next = () => {
    setActive((value) =>
      value === testimonials.length - 1 ? 0 : value + 1
    );
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">

        <div className="testimonials-header">

          <span className="section-label">
            TRAVELER VOICES
          </span>

          <h2 className="section-title">
            Stories From The Journey
          </h2>

          <p>
            Customer testimonials will be added here as verified
            reviews become available.
          </p>

        </div>

        <div className="testimonial-slider">

          <div className="testimonial-mark">
            “
          </div>

          <blockquote>
            {current.quote}
          </blockquote>

          <div className="testimonial-person">

            <strong>
              {current.name}
            </strong>

            <span>
              {current.trip}
            </span>

          </div>

          <div className="testimonial-controls">

            <button
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              ←
            </button>

            <div className="testimonial-dots">

              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={
                    index === active
                      ? "testimonial-dot active"
                      : "testimonial-dot"
                  }
                  onClick={() => setActive(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}

            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;