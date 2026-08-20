import React from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Destinations", href: "#destinations" },
    { label: "Tours", href: "#popular-destinations" },
    { label: "Gallery", href: "#gallery" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openBooking = () => {
    window.dispatchEvent(new Event("open-booking"));
    closeMenu();
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">

        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <img
            src="/images/yokoso-logo.png"
            alt="Yokoso Thar Desert Tours Jaisalmer"
            className="navbar-logo"
          />

          <span className="navbar-brand-text">
            <span className="brand-main">
              YOKOSO
            </span>

            <span className="brand-subtitle">
              THAR DESERT TOURS
            </span>

            <span className="brand-location">
              JAISALMER
            </span>
          </span>
        </a>

        <nav
          className={`navbar-nav ${isMenuOpen ? "navbar-nav-open" : ""
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            className="navbar-book-button mobile-book-button"
            onClick={openBooking}
          >
            Book Now
          </button>
        </nav>

        <button
          type="button"
          className="navbar-book-button desktop-book-button"
          onClick={openBooking}
        >
          Book Now
        </button>

        <button
          type="button"
          className="navbar-menu-button"
          aria-label={
            isMenuOpen ? "Close menu" : "Open menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() =>
            setIsMenuOpen(!isMenuOpen)
          }
        >
          {isMenuOpen ? "×" : "☰"}
        </button>

      </div>
    </header>
  );
}

export default Navbar;