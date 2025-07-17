import "../styles/legal.scss";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <section className="legal">
      <h2>Datenschutzerklärung</h2>

      <p>
        Der Schutz deiner persönlichen Daten ist mir sehr wichtig. Diese Website erhebt und verarbeitet personenbezogene Daten ausschließlich im Rahmen der gesetzlichen Bestimmungen (DSGVO).
      </p>

      <p>
        Beim Besuch dieser Website werden automatisch Informationen wie IP-Adresse, Browsertyp, Betriebssystem und Besuchszeitpunkte erfasst. Diese Daten dienen lediglich der technischen Überwachung und werden nicht mit anderen Datenquellen zusammengeführt.
      </p>

      <p>
        Wenn du das Kontaktformular nutzt, werden die von dir angegebenen Daten (Name, E-Mail-Adresse, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht an Dritte weitergegeben.
      </p>

      <p>
        Du hast jederzeit das Recht auf Auskunft über deine gespeicherten Daten sowie das Recht auf Berichtigung, Sperrung oder Löschung.
      </p>

      <p>
        Bei Fragen zum Datenschutz kannst du dich jederzeit an mich wenden:{" "}
        <a href="mailto:s.lonczyk@outlook.com">s.lonczyk@outlook.com</a>
      </p>

      <Link to="/" className="legal-link">
        Zurück zur Startseite
      </Link>
    </section>
  );
};

export default Datenschutz;
