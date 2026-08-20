function WhatsAppButton() {
  const phone = "919549290063";

  const message =
    "Hello Yokoso Thar Desert Tours, I would like to know more about your tour packages.";

  const whatsappUrl =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Yokoso Thar Desert Tours on WhatsApp"
    >
      <span className="whatsapp-icon">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.55 0 .24 5.31.24 11.84c0 2.09.55 4.13 1.6 5.93L.14 24l6.37-1.67a11.82 11.82 0 0 0 5.57 1.41h.01c6.52 0 11.83-5.31 11.83-11.84 0-3.16-1.23-6.13-3.4-8.42ZM12.09 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.8 9.8 0 0 1-1.5-5.21c0-5.41 4.4-9.81 9.82-9.81 2.62 0 5.08 1.02 6.93 2.87a9.76 9.76 0 0 1 2.88 6.95c0 5.41-4.4 9.81-9.81 9.81Zm5.39-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.74.95-.91 1.14-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.48-.65-.49h-.55c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44s1.04 2.83 1.18 3.02c.15.19 2.04 3.11 4.94 4.36.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.19-.56-.34Z"
          />
        </svg>
      </span>

      <span className="whatsapp-tooltip">
        Chat with us
      </span>
    </a>
  );
}

export default WhatsAppButton;