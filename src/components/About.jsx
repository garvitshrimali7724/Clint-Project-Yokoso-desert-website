function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <div className="about-layout">

          <div className="about-image">
            <img
              src="/images/about/yokoso-jaisalmer.jpg"
              alt="Yokoso Thar Desert Tours Jaisalmer"
              loading="lazy"
            />

            <div className="about-year">
              <span>EST.</span>
              <strong>2018</strong>
            </div>
          </div>

          <div className="about-content">

            <span className="section-label">
              OUR STORY
            </span>

            <h2 className="section-title">
              Travel Beyond the Ordinary
            </h2>

            <p className="about-lead">
              Yokoso Thar Desert Tours Jaisalmer was established
              in 2018 with a simple idea — to help travelers
              experience India through memorable journeys,
              authentic encounters and thoughtful travel planning.
            </p>

            <p>
              Based in Jaisalmer, Rajasthan, we specialize in
              desert experiences including camel safaris, jeep
              safaris and local village tours. We also help
              travelers plan journeys across Rajasthan and
              destinations throughout India, Nepal and Thailand.
            </p>

            <p>
              From transportation and accommodation to food
              arrangements and travel assistance, our goal is to
              make every part of the journey easier to plan and
              more enjoyable to experience.
            </p>

            <div className="about-signature">
              <span>Yokoso Thar Desert Tours</span>
              <strong>Jaisalmer, Rajasthan</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;