import { useEffect, useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Destinations from "./components/destinations";
import PopularDestinations from "./components/populardestinations";
import Gallery from "./components/gallery";
import Services from "./components/services";
import WhyTravel from "./components/whytravel";
import About from "./components/about";
import Testimonials from "./components/testimonials";
import Blog from "./components/blog";
import Contact from "./components/contact";
import WhatsAppButton from "./components/whatsappbutton";
import Footer from "./components/footer";
import BackToTop from "./components/backtotop";
import BookingModal from "./components/bookingmodal";

import IndiaPage from "./pages/indiapage";
import NepalPage from "./pages/nepalpage";
import ThailandPage from "./pages/thailandpage";

function App() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const openBooking = () => {
      setBooking({
        destination: "General Enquiry",
        adultPrice: 0,
        childPrice: 0,
      });
    };

    window.addEventListener("open-booking", openBooking);

    return () => {
      window.removeEventListener("open-booking", openBooking);
    };
  }, []);

  const path = window.location.pathname
    .toLowerCase()
    .replace(/\/$/, "");

  // INDIA PAGE
  if (path === "/india") {
    return (
      <>
        <IndiaPage />

        <WhatsAppButton />

        <Footer />
      </>
    );
  }

  // NEPAL PAGE
  if (path === "/nepal") {
    return (
      <>
        <NepalPage />

        <WhatsAppButton />

        <Footer />
      </>
    );
  }

  // THAILAND PAGE
  if (path === "/thailand") {
    return (
      <>
        <ThailandPage />

        <WhatsAppButton />

        <Footer />
      </>
    );
  }

  // HOMEPAGE
  return (
    <>
      <Navbar />

      <Hero />

      <Destinations />

      <PopularDestinations />

      <Gallery />

      <Services />

      <WhyTravel />

      <About />

      <Testimonials />

      <Blog />

      <Contact />

      <WhatsAppButton />

      <Footer />

      <BackToTop />

      <BookingModal
        booking={booking}
        onClose={() => setBooking(null)}
      />
    </>
  );
}

export default App;