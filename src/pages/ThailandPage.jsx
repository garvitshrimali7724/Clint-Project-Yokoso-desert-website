import { useMemo, useState } from "react";
import { thailandDestinations } from "../data/thailand";
import BookingModal from "../components/BookingModal";

function ThailandPage() {
  const [search, setSearch] = useState("");
  const [booking, setBooking] = useState(null);

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
    <>
      <main className="india-page">

        {/* BACK TO HOME */}
        <div className="country-page-nav">
          <a href="/">
            ← Back to Home
          </a>
        </div>

        {/* HERO */}
        <section
          className="india-page-hero"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.48),
                rgba(0, 0, 0, 0.58)
              ),
              url("/images/thailand/thailand.jpg")
            `,
          }}
        >
          <div className="india-page-hero-content">

            <span className="section-label">
              DESTINATIONS
            </span>

            <h1>
              Explore Thailand
            </h1>

            <p>
              Experience tropical islands, vibrant cities,
              rich culture and extraordinary escapes across
              Thailand.
            </p>

          </div>
        </section>

        {/* SEARCH + DESTINATIONS */}
        <section className="india-page-destinations">
          <div className="india-page-container">

            {/* SEARCH */}
            <div className="india-search">
              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search Thailand destinations..."
                aria-label="Search Thailand destinations"
              />
            </div>

            {/* RESULT COUNT */}
            <div className="india-result-count">
              {filteredDestinations.length} destinations found
            </div>

            {/* DESTINATION GRID */}
            {filteredDestinations.length > 0 ? (
              <div className="india-destination-grid">

                {filteredDestinations.map((destination) => (
                  <article
                    className="india-destination-card"
                    key={destination.slug}
                  >

                    {/* IMAGE */}
                    <div className="india-card-image">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        loading="lazy"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="india-card-content">

                      <span className="india-card-location">
                        THAILAND
                      </span>

                      <h3>
                        {destination.name}
                      </h3>

                      <p>
                        {destination.description}
                      </p>

                      {/* PRICE */}
                      <div className="india-card-price">

                        <div>
                          <span>Adult</span>

                          <strong>
                            ₹
                            {destination.adultPrice.toLocaleString(
                              "en-IN"
                            )}
                          </strong>
                        </div>

                        <div>
                          <span>Child</span>

                          <strong>
                            ₹
                            {destination.childPrice.toLocaleString(
                              "en-IN"
                            )}
                          </strong>
                        </div>

                      </div>

                      {/* BOOK BUTTON */}
                      <button
                        type="button"
                        className="india-card-button"
                        onClick={() =>
                          setBooking(destination)
                        }
                      >
                        Book Now →
                      </button>

                    </div>

                  </article>
                ))}

              </div>
            ) : (
              /* NO RESULTS */
              <div className="india-no-results">

                <h3>
                  No destination found
                </h3>

                <p>
                  Try another search.
                </p>

              </div>
            )}

          </div>
        </section>

      </main>

      {/* BOOKING MODAL */}
      <BookingModal
        booking={booking}
        onClose={() => setBooking(null)}
      />
    </>
  );
}

export default ThailandPage;