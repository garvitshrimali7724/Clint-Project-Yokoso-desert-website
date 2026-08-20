import { useMemo, useState } from "react";
import { thailandDestinations } from "../data/thailand";

function formatPrice(price) {
  return `₹${price.toLocaleString("en-IN")}`;
}

function ThailandDestinations({ onBook }) {
  const [search, setSearch] = useState("");

  const filteredDestinations = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return thailandDestinations;
    }

    return thailandDestinations.filter((destination) =>
      destination.name.toLowerCase().includes(query)
    );
  }, [search]);

  return (
    <section
      className="india-destinations thailand-destinations"
      id="thailand"
    >
      <div className="container">

        <div className="india-header">
          <span className="section-label">
            Thailand
          </span>

          <h2 className="section-title">
            Explore Thailand
          </h2>

          <p className="india-intro">
            Discover tropical islands, vibrant cities,
            ancient heritage and unforgettable experiences
            across Thailand.
          </p>
        </div>

        <div className="india-search-wrapper">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search Thailand destinations..."
            aria-label="Search Thailand destinations"
          />

          {search && (
            <button
              type="button"
              className="india-search-clear"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        <div className="india-results">
          {filteredDestinations.length} of{" "}
          {thailandDestinations.length} destinations
        </div>

        {filteredDestinations.length > 0 ? (
          <div className="india-grid">

            {filteredDestinations.map((destination) => (
              <article
                className="india-card"
                key={destination.slug}
              >

                <div className="india-card-image-wrapper">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="india-card-image"
                    loading="lazy"
                  />

                  <div className="india-card-image-overlay">
                    <span>
                      Thailand
                    </span>
                  </div>

                </div>

                <div className="india-card-body">

                  <h3>
                    {destination.name}
                  </h3>

                  <p>
                    {destination.description}
                  </p>

                  <div className="india-prices">

                    <div className="india-price">
                      <span>
                        Adult
                      </span>

                      <strong>
                        {formatPrice(destination.adultPrice)}
                      </strong>
                    </div>

                    <div className="india-price">
                      <span>
                        Child
                      </span>

                      <strong>
                        {formatPrice(destination.childPrice)}
                      </strong>
                    </div>

                  </div>

                  <div className="india-card-bottom">

                    <div className="india-starting-price">

                      <small>
                        Starting from
                      </small>

                      <strong>
                        {formatPrice(destination.adultPrice)}
                      </strong>

                    </div>

                    <button
                      type="button"
                      className="india-book-button"
                      onClick={() =>
                        onBook({
                          destination: destination.name,
                          adultPrice: destination.adultPrice,
                          childPrice: destination.childPrice,
                        })
                      }
                    >
                      Book Now
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>
        ) : (
          <div className="india-no-results">

            <h3>
              No destination found
            </h3>

            <p>
              Try searching for another Thailand destination.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
            >
              Show all destinations
            </button>

          </div>
        )}

      </div>
    </section>
  );
}

export default ThailandDestinations;