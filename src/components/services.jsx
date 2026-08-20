const services = [
  {
    title: "Camel Safari",
    description:
      "Experience the Thar Desert on camelback and discover its timeless landscapes, dunes and desert culture.",
  },
  {
    title: "Jeep Safari",
    description:
      "Explore the golden dunes and remote desert landscapes with an exciting jeep safari.",
  },
  {
    title: "Rajasthan Tours",
    description:
      "Discover Rajasthan's forts, palaces, cities, villages and unique cultural heritage.",
  },
  {
    title: "Village Tours",
    description:
      "Meet local communities and experience the traditions, crafts and everyday life of Rajasthan.",
  },
  {
    title: "Hotel Booking",
    description:
      "Find suitable accommodation ranging from comfortable stays to memorable desert camps.",
  },
  {
    title: "Transport",
    description:
      "Travel comfortably with organized transportation for local and long-distance journeys.",
  },
  {
    title: "Food Arrangement",
    description:
      "Enjoy convenient meal arrangements with opportunities to experience regional cuisine.",
  },
  {
    title: "Domestic Tours",
    description:
      "Plan memorable journeys across India's diverse destinations.",
  },
  {
    title: "International Tours",
    description:
      "Explore destinations beyond India including Nepal and Thailand.",
  },
  {
    title: "Family Tours",
    description:
      "Create comfortable and enjoyable travel experiences for families.",
  },
  {
    title: "Group Tours",
    description:
      "Organize practical and memorable journeys for friends and larger groups.",
  },
  {
    title: "Travel Assistance",
    description:
      "Get support with planning, transportation, accommodation and travel arrangements.",
  },
  {
    title: "24/7 Support",
    description:
      "Stay connected with our team for travel assistance whenever you need support.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">

        <div className="services-header">
          <span className="section-label">
            What We Do
          </span>

          <h2 className="section-title">
            Services We Provide
          </h2>

          <p className="services-intro">
            From desert adventures in Jaisalmer to journeys
            across India, Nepal and Thailand, we help bring
            every part of your travel experience together.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.title}
            >

              <div className="service-icon">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="service-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;