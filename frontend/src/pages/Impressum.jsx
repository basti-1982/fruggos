import "../styles/legal.scss";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <section className="legal">
      <h2>Impressum</h2>

      <p><strong>Angaben gemäß § 5 TMG:</strong></p>
      <p>
        Sebastian Lonczyk<br />
        Berliner Str. 10<br />
        38300 Wolfenbüttel<br />
        Deutschland
      </p>

      <p><strong>Kontakt:</strong></p>
      <p>
        Telefon: 0176 61941307<br />
        E-Mail: <a href="mailto:s.lonczyk@outlook.com">s.lonczyk@outlook.com</a>
      </p>

      <p><strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong></p>
      <p>
        Sebastian Lonczyk<br />
        Adresse wie oben
      </p>

      <p>
        <Link to="/" className="legal-link">Zurück zur Startseite</Link>
      </p>
    </section>
  );
};

export default Impressum;
