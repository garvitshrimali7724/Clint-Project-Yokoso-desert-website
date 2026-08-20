import { useEffect, useState } from "react";

function formatPrice(price) {
  return `₹${Number(price || 0).toLocaleString("en-IN")}`;
}

function BookingModal({ booking, onClose }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    travelDate: "",
    adults: 1,
    children: 0,
    hotel: "",
    requirements: "",
  });

  useEffect(() => {
    if (booking) {
      setForm({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        travelDate: "",
        adults: 1,
        children: 0,
        hotel: "",
        requirements: "",
      });
    }
  }, [booking]);

  useEffect(() => {
    if (!booking) return;

    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [booking, onClose]);

  if (!booking) {
    return null;
  }

  const adults = Math.max(1, Number(form.adults) || 1);
  const children = Math.max(0, Number(form.children) || 0);

  const adultPrice = Number(booking.adultPrice) || 0;
  const childPrice = Number(booking.childPrice) || 0;

  const adultTotal = adults * adultPrice;
  const childTotal = children * childPrice;

  const total = adultTotal + childTotal;

  const destinationName =
    booking.name ||
    booking.destination ||
    booking.title ||
    "Selected Destination";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = `Hello Yokoso Thar Desert Tours,

I would like to make a booking enquiry.

━━━━━━━━━━━━━━━━━━
DESTINATION
━━━━━━━━━━━━━━━━━━
${destinationName}

━━━━━━━━━━━━━━━━━━
CUSTOMER DETAILS
━━━━━━━━━━━━━━━━━━
Name: ${form.fullName}
Email: ${form.email}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp || "Not provided"}

━━━━━━━━━━━━━━━━━━
TRAVEL DETAILS
━━━━━━━━━━━━━━━━━━
Travel Date: ${form.travelDate}
Adults: ${adults}
Children: ${children}
Hotel / Room Preference: ${form.hotel || "Not specified"}

━━━━━━━━━━━━━━━━━━
SPECIAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━
${form.requirements || "None"}

━━━━━━━━━━━━━━━━━━
PACKAGE PRICING
━━━━━━━━━━━━━━━━━━
Adult Price: ${formatPrice(adultPrice)}
Child Price: ${formatPrice(childPrice)}
Estimated Total: ${formatPrice(total)}

Please contact me to confirm availability and final booking details.

Thank you.
`;

    const whatsappUrl =
      `https://wa.me/919549290063?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  }

  return (
    <div
      className="booking-backdrop"
      onMouseDown={onClose}
    >
      <div
        className="booking-modal"
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >

        <button
          type="button"
          className="booking-close"
          onClick={onClose}
          aria-label="Close booking form"
        >
          ×
        </button>


        <div className="booking-header">

          <span className="section-label">
            YOKOSO THAR DESERT TOURS
          </span>

          <h2>
            Plan Your Journey
          </h2>

          <p>
            Tell us about your trip and our team
            will help you create the right experience.
          </p>

        </div>


        <div className="booking-destination">

          <div>
            <span>
              Destination
            </span>

            <strong>
              {destinationName}
            </strong>
          </div>


          <div>
            <span>
              Adult
            </span>

            <strong>
              {formatPrice(adultPrice)}
            </strong>
          </div>


          <div>
            <span>
              Child
            </span>

            <strong>
              {formatPrice(childPrice)}
            </strong>
          </div>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="booking-form-grid">

            <div className="booking-field">

              <label htmlFor="fullName">
                Full Name *
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />

            </div>


            <div className="booking-field">

              <label htmlFor="email">
                Email *
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
              />

            </div>


            <div className="booking-field">

              <label htmlFor="phone">
                Phone Number *
              </label>

              <input
                id="phone"
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 00000 00000"
              />

            </div>


            <div className="booking-field">

              <label htmlFor="whatsapp">
                WhatsApp Number
              </label>

              <input
                id="whatsapp"
                type="tel"
                name="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                placeholder="+91 00000 00000"
              />

            </div>


            <div className="booking-field">

              <label htmlFor="travelDate">
                Travel Date *
              </label>

              <input
                id="travelDate"
                type="date"
                name="travelDate"
                value={form.travelDate}
                onChange={handleChange}
                required
              />

            </div>


            <div className="booking-field">

              <label htmlFor="adults">
                Number of Adults *
              </label>

              <input
                id="adults"
                type="number"
                name="adults"
                min="1"
                max="50"
                value={form.adults}
                onChange={handleChange}
                required
              />

            </div>


            <div className="booking-field">

              <label htmlFor="children">
                Number of Children
              </label>

              <input
                id="children"
                type="number"
                name="children"
                min="0"
                max="50"
                value={form.children}
                onChange={handleChange}
              />

            </div>


            <div className="booking-field">

              <label htmlFor="hotel">
                Hotel / Room Preference
              </label>

              <select
                id="hotel"
                name="hotel"
                value={form.hotel}
                onChange={handleChange}
              >

                <option value="">
                  Select preference
                </option>

                <option value="Standard">
                  Standard
                </option>

                <option value="Deluxe">
                  Deluxe
                </option>

                <option value="Premium">
                  Premium
                </option>

                <option value="Luxury">
                  Luxury
                </option>

              </select>

            </div>


            <div className="booking-field booking-field-full">

              <label htmlFor="requirements">
                Special Requirements
              </label>

              <textarea
                id="requirements"
                name="requirements"
                value={form.requirements}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us anything we should know..."
              />

            </div>

          </div>


          <div className="booking-total">

            <div>

              <span>
                Estimated Package Total
              </span>

              <strong>
                {formatPrice(total)}
              </strong>

            </div>


            <small>

              {adults} adult
              {adults !== 1 ? "s" : ""}

              {" × "}

              {formatPrice(adultPrice)}

              {"  +  "}

              {children} child
              {children !== 1 ? "ren" : ""}

              {" × "}

              {formatPrice(childPrice)}

            </small>

          </div>


          <button
            type="submit"
            className="booking-submit"
          >
            Continue to WhatsApp →
          </button>


          <p className="booking-note">
            Your booking details will be prepared in WhatsApp.
            Review them and press Send to contact our team.
          </p>

        </form>

      </div>
    </div>
  );
}

export default BookingModal;
