const destinations = [
  {
    name: "India",
    number: "01",
    image: "/images/india/india.png",
    description:
      "From the golden dunes of Rajasthan to majestic mountains, timeless cities and tropical shores.",
    href: "/india",
  },
  {
    name: "Nepal",
    number: "02",
    image: "/images/nepal/nepal.png",
    description:
      "Discover Himalayan landscapes, ancient cities, spiritual journeys and unforgettable adventures.",
    href: "/nepal",
  },
  {
    name: "Thailand",
    number: "03",
    image: "/images/thailand/thailand.png",
    description:
      "Experience tropical islands, vibrant cities, rich culture and extraordinary escapes.",
    href: "/thailand",
  },
];

function Destinations() {
  return (
    <section className="destinations section" id="destinations">
      <div className="container">

        <div className="destinations-heading">

          <div>
            <span className="section-label">
              Destinations
            </span>

            <h2 className="section-title">
              Where will your
              <br />
              next story begin?
            </h2>
          </div>

          <p className="section-description">
            Journey beyond the ordinary. Explore remarkable
            destinations across India, Nepal and Thailand with
            experiences designed around the places you want to
            discover.
          </p>

        </div>

        <div className="destination-grid">

          {destinations.map((destination) => (
            <a
            key={destination.name}
            href={destination.href}
            className="destination-card"
            >

              <img
                src={destination.image}
                alt={`${destination.name} travel destination`}
                className="destination-image"
                loading="lazy"
              />

              <div className="destination-overlay"></div>

              <div className="destination-content">

                <span className="destination-number">
                  {destination.number}
                </span>

                <div className="destination-info">

                  <h3>
                    {destination.name}
                  </h3>

                  <p>
                    {destination.description}
                  </p>

                  <span className="destination-explore">
                    Explore destination →
                  </span>

                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Destinations;