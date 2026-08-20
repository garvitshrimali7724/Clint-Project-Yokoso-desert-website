function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-container">

          {/* BRAND */}

          <div className="footer-brand">

            <div className="footer-logo">
              YOKOSO
            </div>

            <h3>
              Thar Desert Tours Jaisalmer
            </h3>

            <p>
              Authentic journeys. Desert adventures.
              Unforgettable memories.
            </p>

            <p className="footer-owner">
              Established 2018 · Jaisalmer, Rajasthan
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-column">

            <h4>
              QUICK LINKS
            </h4>

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#destinations">
              Destinations
            </a>

            <a href="#popular-destinations">
              Tours
            </a>

            <a href="#gallery">
              Gallery
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          {/* DESTINATIONS */}

          <div className="footer-column">

            <h4>
              DESTINATIONS
            </h4>

            <a href="/india">
              India
            </a>

            <a href="/nepal">
              Nepal
            </a>

            <a href="/thailand">
              Thailand
            </a>

            <a href="#jaisalmer">
              Jaisalmer
            </a>

            <a href="#safari">
              Desert Safari
            </a>

          </div>


          {/* CONTACT */}

          <div className="footer-column footer-contact">

            <h4>
              CONTACT
            </h4>

            <a href="tel:+919549290063">
              +91 95492 90063
            </a>

            <a href="mailto:thartours@yahoo.com">
              thartours@yahoo.com
            </a>

            <p>
              Fort Road, Dhibba Para,
              Jaisalmer, Rajasthan, India
            </p>

          </div>

        </div>

      </div>


      {/* NEWSLETTER */}

      <div className="footer-newsletter">

        <div className="footer-container">

          <div>

            <span>
              TRAVEL NOTES
            </span>

            <h3>
              Stay inspired for your next journey.
            </h3>

          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();

              alert(
                "Thank you for subscribing to Yokoso Thar Desert Tours."
              );

              event.target.reset();
            }}
            className="newsletter-form"
          >

            <input
              type="email"
              placeholder="Your email address"
              required
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-container">

          <p>
            © {currentYear} Yokoso Thar Desert Tours
            Jaisalmer. All rights reserved.
          </p>

          <div className="footer-legal">

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
            >
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;