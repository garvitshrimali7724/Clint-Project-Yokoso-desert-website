const popularDestinations = [
  {
    name: "Jaisalmer",
    location: "Rajasthan, India",
    country: "india",
    price: 3500,
    image: "/images/homepage/jaisalmer.png",
    description:
      "Golden forts, desert dunes, camel safaris and authentic Thar experiences.",
  },
  {
    name: "Goa",
    location: "India",
    country: "india",
    price: 7000,
    image: "/images/homepage/goa.png",
    description:
      "Beautiful beaches, coastal culture and a relaxed tropical atmosphere.",
  },
  {
    name: "Kashmir",
    location: "Srinagar • Gulmarg • Pahalgam",
    country: "india",
    price: 15000,
    image: "/images/homepage/kashmir.png",
    description:
      "Experience breathtaking valleys, mountains and unforgettable Himalayan scenery.",
  },
  {
    name: "Manali",
    location: "Himachal Pradesh, India",
    country: "india",
    price: 10000,
    image: "/images/homepage/manali.png",
    description:
      "Mountain landscapes, scenic valleys and the charm of the Himalayas.",
  },
  {
    name: "Jaipur",
    location: "Rajasthan, India",
    country: "india",
    price: 5000,
    image: "/images/homepage/jaipur.png",
    description:
      "Royal palaces, historic architecture and vibrant Rajasthani culture.",
  },
  {
    name: "Udaipur",
    location: "Rajasthan, India",
    country: "india",
    price: 6000,
    image: "/images/homepage/udaipur.png",
    description:
      "Lakes, palaces and the timeless romantic character of Udaipur.",
  },
  {
    name: "Kerala",
    location: "Munnar • Alleppey • Thekkady",
    country: "india",
    price: 10000,
    image: "/images/homepage/kerala.png",
    description:
      "Lush hills, peaceful backwaters and beautiful natural landscapes.",
  },
  {
    name: "Leh–Ladakh",
    location: "Ladakh, India",
    country: "india",
    price: 12000,
    image: "/images/homepage/leh-ladakh.png",
    description:
      "Dramatic high-altitude landscapes, mountain passes and unforgettable roads.",
  },
  {
    name: "Agra",
    location: "Uttar Pradesh, India",
    country: "india",
    price: 5000,
    image: "/images/homepage/agra.png",
    description:
      "Explore remarkable heritage and India's iconic architectural landmarks.",
  },
  {
    name: "Varanasi",
    location: "Uttar Pradesh, India",
    country: "india",
    price: 6000,
    image: "/images/homepage/varanasi.png",
    description:
      "Historic ghats, culture and the unique atmosphere of Varanasi.",
  },
];

function PopularDestinations() {
  const handleExplore = (country) => {
    window.location.href = `/${country}`;
  };

  return (
    <section
      className="popular-destinations"
      id="popular-destinations"
    >
      <div className="popular-container">

        <div className="popular-heading">

          <div>
            <span className="section-label">
              MOST DEMANDED
            </span>

            <h2>
              Popular destinations
            </h2>
          </div>

          <p>
            Start with our most loved destinations and discover
            experiences that travellers keep coming back for.
          </p>

        </div>


        <div className="popular-grid">

          {popularDestinations.map((destination, index) => (

            <article
              className="popular-card"
              key={destination.name}
            >

              <div className="popular-image-wrapper">

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="popular-image"
                  loading="lazy"
                />

                <span className="popular-number">
                  {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </span>

              </div>


              <div className="popular-content">

                <span className="popular-location">
                  {destination.location}
                </span>

                <h3>
                  {destination.name}
                </h3>

                <p>
                  {destination.description}
                </p>


                <div className="popular-bottom">

                  <span>
                    From{" "}
                    <strong>
                      ₹{destination.price.toLocaleString("en-IN")}
                    </strong>
                  </span>


                  <button
                    type="button"
                    onClick={() =>
                      handleExplore(destination.country)
                    }
                  >
                    Explore →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default PopularDestinations;