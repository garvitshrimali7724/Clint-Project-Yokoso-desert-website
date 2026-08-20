function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-background">
        <img
          src="/images/homepage/hero-desert.png"
          alt="Thar Desert travel experience"
          className="hero-image"
        />
      </div>

      <div className="hero-overlay"></div>

      <div className="hero-content container">

        <div className="hero-copy">

          <p className="hero-eyebrow">
            AUTHENTIC JOURNEYS • DESERT ADVENTURES
          </p>

          <h1 className="hero-title">
            Explore.
            <br />
            Experience.
            <br />
            <span>Remember.</span>
          </h1>

          <p className="hero-description">
            Discover India, Nepal & Thailand with Yokoso Thar Desert Tours.
          </p>

          <div className="hero-actions">

            <a
              href="#booking"
              className="hero-button hero-button-primary"
            >
              Book Your Tour
            </a>

            <a
              href="#destinations"
              className="hero-button hero-button-secondary"
            >
              Explore Destinations
            </a>

          </div>

        </div>

      </div>

      <a
        href="#destinations"
        className="hero-scroll"
        aria-label="Scroll to destinations"
      >
        <span className="hero-scroll-line"></span>

        <span className="hero-scroll-text">
          SCROLL TO EXPLORE
        </span>
      </a>

    </section>
  );
}

export default Hero;