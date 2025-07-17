import "../styles/contact.scss";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("Danke für deine Nachricht! Ich melde mich bald.");
        e.target.reset();
      } else {
        alert("Fehler beim Senden. Bitte versuche es später noch einmal.");
      }
    } catch (error) {
      console.error("Fetch-Fehler:", error);
      alert("Verbindung zum Server fehlgeschlagen.");
    }
  };

  return (
    <section className="contact">
      <h2>Kontakt</h2>
      <p>Du hast Interesse an einem Welpen oder Fragen? Schreib mir einfach!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Dein Name" required />
        <input type="email" name="email" placeholder="Deine E-Mail" required />
        <textarea
          name="message"
          placeholder="Deine Nachricht"
          rows="5"
          required
        />
        <button type="submit">Nachricht senden</button>
      </form>

      <div className="contact-info">
        <p>
          <strong>Telefon:</strong>{" "}
          <a href="tel:+4917661941307">0176 61941307</a>
        </p>
        <p>
          <strong>E-Mail:</strong>{" "}
          <a href="mailto:s.lonczyk@outlook.com" className="mail-button">
            E-Mail schreiben
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
