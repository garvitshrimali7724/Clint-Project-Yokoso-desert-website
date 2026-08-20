function Contact() {
  const phone = "919549290063";

  const whatsappMessage =
    "Hello Yokoso Thar Desert Tours, I would like to know more about your tour packages.";

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;

  const callUrl = "tel:+919549290063";

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thank you for contacting Yokoso Thar Desert Tours. Our team will contact you shortly."
    );

    event.target.reset();
  };

  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="container">

        <div className="contact-heading">

          <span className="section-label">
            CONTACT
          </span>

          <h2 className="section-title">
            Let's Plan Your Journey
          </h2>

          <p>
            Tell us where you want to go and we'll help you
            plan a memorable journey.
          </p>

        </div>

        <div className="contact-layout">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <div className="contact-brand">
              <h3>
                Yokoso Thar Desert Tours Jaisalmer
              </h3>

              <p>
                Authentic journeys. Desert adventures.
                Unforgettable memories.
              </p>
            </div>

            <div className="contact-details">

              <div className="contact-item">
                <span>PHONE</span>

                <a href={callUrl}>
                  +91 95492 90063
                </a>
              </div>

              <div className="contact-item">
                <span>WHATSAPP</span>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 95492 90063
                </a>
              </div>

              <div className="contact-item">
                <span>EMAIL</span>

                <a href="mailto:thartours@yahoo.com">
                  thartours@yahoo.com
                </a>
              </div>

              <div className="contact-item">
                <span>ADDRESS</span>

                <p>
                  Fort Road, Dhibba Para,
                  Jaisalmer, Rajasthan, India
                </p>
              </div>

            </div>

            <div className="contact-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-whatsapp"
              >
                WhatsApp Us
              </a>

              <a
                href={callUrl}
                className="contact-call"
              >
                Call Us
              </a>

            </div>

            {/* SOCIAL LINKS */}

            <div className="social-links">

              <span>FOLLOW US</span>

              <div>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Facebook
                </a>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Instagram
                </a>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  YouTube
                </a>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  X
                </a>

              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-field">

                  <label>
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                </div>

                <div className="form-field">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>

              </div>

              <div className="form-field">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  required
                />

              </div>

              <div className="form-field">

                <label>
                  Destination
                </label>

                <input
                  type="text"
                  name="destination"
                  placeholder="Where would you like to go?"
                />

              </div>

              <div className="form-field">

                <label>
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                />

              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Enquiry
              </button>

            </form>

          </div>

        </div>


        {/* GOOGLE MAP */}
        <div className="map-placeholder">
          <iframe
          
          title="Yokoso Thar Desert Tours Jaisalmer Location"
          src="https://www.google.com/maps?q=26.9139296,70.9133023&z=15&output=embed"
          width="100%"
          height="450"
          style={{
          border: 0,
          display: "block",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        />
        </div>
        </div>
    </section>
  );
}

export default Contact;