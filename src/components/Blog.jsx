import { useEffect, useState } from "react";

const blogPosts = [
  {
    category: "Rajasthan Travel",
    title: "A First Journey Through Rajasthan",
    text: "Discover forts, colorful cities, desert landscapes and cultural experiences across Rajasthan.",
    story: `
Rajasthan is a destination where history, culture and landscapes come together in one unforgettable journey.

A first journey through Rajasthan can begin in Jaipur, continue through the historic beauty of Jodhpur and Udaipur, and finally lead into the golden landscapes of Jaisalmer.

The state is known for magnificent forts, royal palaces, colorful markets and traditional Rajasthani hospitality. Every city has its own character and offers something different to travellers.

For an unforgettable experience, spend time exploring local markets, tasting traditional food, visiting historic landmarks and experiencing the desert beyond the usual sightseeing.

Jaisalmer is especially special for travellers looking for an authentic desert experience. Camel safaris, jeep adventures, sunset over the dunes and traditional desert evenings create memories that stay long after the journey ends.

The best Rajasthan journeys are not about rushing from one destination to another. Take your time, experience the local culture and allow yourself to discover the quieter moments between the famous attractions.
`,
  },

  {
    category: "Desert Safari",
    title: "A Guide to Experiencing the Thar Desert",
    text: "Discover camel rides, jeep adventures and the unforgettable landscapes of the Thar Desert.",
    story: `
The Thar Desert is one of India's most fascinating landscapes, and Jaisalmer is one of the best places to experience it.

A desert safari can be much more than simply riding a camel. It is an opportunity to experience the dunes, watch the changing colors of the desert at sunset and spend time away from the noise of the city.

Camel safaris offer a traditional way to explore the desert. Jeep safaris, on the other hand, are perfect for travellers looking for a more adventurous experience across the dunes.

The evening is often one of the most memorable parts of the journey. As the sun sets, the golden sand changes color and the desert becomes peaceful and dramatic.

Travellers can also experience traditional desert culture through local food, music and cultural performances.

For the best experience, carry comfortable clothing, sunglasses, sunscreen and enough water. Most importantly, give yourself time to enjoy the landscape rather than treating the safari as just another activity.
`,
  },

  {
    category: "India Travel",
    title: "Planning Your First Trip Across India",
    text: "Practical ideas for planning a comfortable and memorable journey across India's diverse destinations.",
    story: `
India is an enormous and incredibly diverse country, so planning your first journey can feel overwhelming.

The easiest approach is to choose a region or a few destinations rather than trying to see everything in one trip.

Northern India offers historic cities, Himalayan landscapes and Rajasthan's desert culture. Southern India is known for beaches, backwaters, temples and lush landscapes. Each region offers a completely different travel experience.

Before travelling, decide how much time you have, what type of experiences you enjoy and how much travelling between destinations you are comfortable with.

It is also useful to keep some flexibility in your schedule. India has many unexpected experiences, from local festivals and markets to small restaurants and villages that may not appear in a standard itinerary.

A well-planned journey should balance sightseeing with enough time to relax and experience the local atmosphere.

Most importantly, travel with an open mind. India's diversity is one of its greatest strengths, and the unexpected moments often become the best memories.
`,
  },

  {
    category: "Nepal Travel",
    title: "Discover the Landscapes of Nepal",
    text: "Explore mountains, historic cities, peaceful valleys and memorable experiences across Nepal.",
    story: `
Nepal is a country of dramatic mountains, peaceful valleys, ancient cities and rich cultural traditions.

Kathmandu is a natural starting point for many journeys. Its historic temples, traditional architecture and lively streets provide an introduction to Nepalese culture.

Beyond Kathmandu, travellers can explore Pokhara, a beautiful city surrounded by mountains and known for its peaceful atmosphere and spectacular Himalayan views.

For adventure travellers, Nepal offers trekking, mountain experiences and outdoor activities. For those looking for a slower journey, historic towns, temples and local communities provide plenty to discover.

Nepal is also a destination where nature and culture are closely connected. A journey through the country can include both spectacular landscapes and meaningful cultural experiences.

Take your time, respect local traditions and allow yourself to explore beyond the most famous attractions. The quieter experiences can often become the most memorable part of a Nepal journey.
`,
  },

  {
    category: "Thailand Travel",
    title: "Planning a Journey Through Thailand",
    text: "Discover beaches, cities, cultural landmarks and tropical escapes across Thailand.",
    story: `
Thailand offers an exciting combination of vibrant cities, beautiful beaches, cultural landmarks and tropical landscapes.

Bangkok is often the starting point for international travellers. The city combines modern shopping districts with historic temples, markets and traditional neighborhoods.

For travellers looking for relaxation, Thailand's islands and coastal destinations offer beautiful beaches and a slower pace of life.

Northern Thailand provides a different experience, with mountain landscapes, cultural sites and a more peaceful atmosphere.

When planning a Thailand journey, consider combining different types of destinations instead of spending the entire trip in one location.

Give yourself time to experience local food, markets, temples and everyday life rather than focusing only on major tourist attractions.

Thailand is especially rewarding when you balance exploration with relaxation. A thoughtful itinerary can give you both adventure and plenty of time to enjoy the country's tropical atmosphere.
`,
  },

  {
    category: "Travel Tips",
    title: "Simple Tips for a Better Journey",
    text: "Useful travel planning ideas to help make your next adventure smoother and more enjoyable.",
    story: `
A great journey does not always require a complicated itinerary. A few simple preparations can make travelling much easier.

Start by deciding your priorities. Choose the places and experiences that matter most to you and build the rest of the trip around them.

Keep important documents, identification, booking information and emergency contacts easily accessible.

Pack according to the destination and season. Comfortable footwear, weather-appropriate clothing, basic medicines and essential toiletries are usually more useful than overpacking.

Leave some free time in your itinerary. Travelling can be unpredictable, and having extra time allows you to enjoy unexpected discoveries without constantly worrying about the schedule.

It is also helpful to learn a few local words and understand basic cultural etiquette before visiting a new destination.

Finally, don't try to photograph every moment. Put your phone away sometimes and simply experience the destination around you.

The best journeys are not necessarily the ones with the busiest schedules. They are the ones that leave you with meaningful experiences and memories.
`,
  },
];

function Blog() {
  const [selectedStory, setSelectedStory] = useState(null);

  useEffect(() => {
    if (!selectedStory) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedStory(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedStory]);

  useEffect(() => {
    if (selectedStory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStory]);

  return (
    <>
      <section
        id="blog"
        style={{
          width: "100%",
          padding: "110px 30px",
          background: "#ffffff",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* HEADING */}

          <div
            style={{
              marginBottom: "55px",
            }}
          >
            <div
              style={{
                color: "#c09a52",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "3px",
                marginBottom: "15px",
              }}
            >
              JOURNAL
            </div>

            <h2
              style={{
                margin: "0 0 18px",
                color: "#102f58",
                fontSize: "clamp(36px, 5vw, 60px)",
                fontWeight: "600",
                lineHeight: "1.1",
              }}
            >
              Travel Stories & Ideas
            </h2>

            <p
              style={{
                maxWidth: "620px",
                margin: "0",
                color: "#697586",
                fontSize: "16px",
                lineHeight: "1.8",
              }}
            >
              Inspiration, destination guides and practical ideas
              for planning your next journey.
            </p>
          </div>

          {/* BLOG GRID */}

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                style={{
                  minHeight: "320px",
                  padding: "32px",
                  background: "#f7f9fc",
                  border: "1px solid #e3e8ef",
                  boxSizing: "border-box",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px)";

                  e.currentTarget.style.boxShadow =
                    "0 20px 45px rgba(16, 47, 88, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "none";
                }}
              >
                <div
                  style={{
                    color: "#c09a52",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    marginBottom: "25px",
                  }}
                >
                  {post.category}
                </div>

                <h3
                  style={{
                    margin: "0 0 18px",
                    color: "#102f58",
                    fontSize: "23px",
                    lineHeight: "1.35",
                    fontWeight: "600",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 28px",
                    color: "#697586",
                    fontSize: "14px",
                    lineHeight: "1.8",
                  }}
                >
                  {post.text}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedStory(post)}
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: "0",
                    color: "#123d78",
                    fontSize: "13px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                >
                  Read Story →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* STORY MODAL */}

      {selectedStory && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-title"
          onMouseDown={() => setSelectedStory(null)}
          style={{
            position: "fixed",
            inset: "0",
            zIndex: "99999",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "rgba(3, 15, 35, 0.82)",
            backdropFilter: "blur(8px)",
          }}
        >
          <article
            onMouseDown={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "min(820px, 100%)",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "#ffffff",
              boxShadow: "0 30px 90px rgba(0, 0, 0, 0.35)",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedStory(null)}
              aria-label="Close story"
              style={{
                position: "sticky",
                top: "20px",
                float: "right",
                zIndex: "2",
                width: "42px",
                height: "42px",
                margin: "20px 20px 0 0",
                border: "1px solid #dfe4ea",
                background: "#ffffff",
                color: "#102f58",
                fontSize: "25px",
                lineHeight: "1",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <div
              style={{
                padding: "55px 55px 60px",
                clear: "both",
              }}
            >
              <span
                style={{
                  display: "block",
                  marginBottom: "15px",
                  color: "#c09a52",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                {selectedStory.category}
              </span>

              <h2
                id="story-title"
                style={{
                  margin: "0 0 25px",
                  color: "#102f58",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: "600",
                  lineHeight: "1.15",
                }}
              >
                {selectedStory.title}
              </h2>

              <div
                style={{
                  width: "60px",
                  height: "2px",
                  marginBottom: "30px",
                  background: "#c09a52",
                }}
              />

              <div
                style={{
                  color: "#596779",
                  fontSize: "15px",
                  lineHeight: "2",
                  whiteSpace: "pre-line",
                }}
              >
                {selectedStory.story}
              </div>

              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                style={{
                  marginTop: "35px",
                  padding: "14px 24px",
                  border: "none",
                  background: "#102f58",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Close Story
              </button>
            </div>
          </article>
        </div>
      )}
    </>
  );
}

export default Blog;