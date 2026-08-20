import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import PopularDestinations from "./components/PopularDestinations";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import WhyTravel from "./components/WhyTravel";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import BookingModal from "./components/BookingModal";

import IndiaPage from "./pages/IndiaPage";
import NepalPage from "./pages/NepalPage";
import ThailandPage from "./pages/ThailandPage";

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