const reasons = [
  {
    number: "01",
    title: "Authentic Experiences",
    description:
      "Discover destinations through meaningful experiences, local culture and carefully planned journeys.",
  },
  {
    number: "02",
    title: "Personalized Travel",
    description:
      "Travel plans can be shaped around your interests, schedule, group size and preferences.",
  },
  {
    number: "03",
    title: "Comfortable Stays",
    description:
      "We help arrange accommodation suited to the style and needs of your journey.",
  },
  {
    number: "04",
    title: "Local Knowledge",
    description:
      "Benefit from practical destination knowledge and local travel experience.",
  },
  {
    number: "05",
    title: "Reliable Transport",
    description:
      "Make your journey easier with organized transportation and travel coordination.",
  },
  {
    number: "06",
    title: "24/7 Assistance",
    description:
      "Stay connected with travel support throughout your journey.",
  },
];

function WhyTravel() {
  return (
    <section className="why-travel-section" id="why-us">
      <div className="container">

        <div className="why-travel-layout">

          <div className="why-travel-heading">

            <span className="section-label">
              WHY YOKOSO
            </span>

            <h2 className="section-title">
              Travel With Confidence
            </h2>

            <p>
              Great journeys are about more than reaching a
              destination. We focus on thoughtful planning,
              authentic experiences and dependable support.
            </p>

          </div>

          <div className="why-travel-grid">

            {reasons.map((reason) => (
              <article
                className="why-travel-card"
                key={reason.number}
              >

                <span className="why-number">
                  {reason.number}
                </span>

                <h3>
                  {reason.title}
                </h3>

                <p>
                  {reason.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyTravel;