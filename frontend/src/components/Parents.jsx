import "../styles/parents.scss";
import papa from "../assets/parents/hugo.JPG";
import mama from "../assets/parents/friggaBabys.JPG";
import mamaBall from "../assets/parents/friggaBall.JPG";

const Parents = () => (
  <section className="parents">
    <p className="section-intro">
      Woher kommt eigentlich all die Flauschigkeit? Schau dir hier die Eltern
      unserer kleinen Rasselbande an!
    </p>
    <h2>Die Elterntiere</h2>
    <div className="parents-container">
      <div className="parent-card">
        <img src={mama} alt="Frigga mit Babys" />
        <h3>Frigga (Mutter)</h3>
        <p>
          Mama Frigga meine sanfte Labradoodle-Mix-Dame Frigga ist anhänglich,
          sensibel und liebt ihre Menschen. Sie begleitet mich durch den Alltag,
          ist ruhig und ausgeglichen aber wehe, es fliegt ein Ball! Dann wird
          sie zum sportlichen Wirbelwind. Trotzdem bleibt sie eine absolute
          Kuschelqueen und liebevolle Hundemama.
        </p>
        <img src={mamaBall} alt="Frigga mit Ball" className="secondary" />
      </div>

      <div className="parent-card">
        <img src={papa} alt="Deckrüde Hugo" />
        <h3>Hugo (Vater)</h3>
        <p>
          Papa Hugo charmanter Border Collie mit Köpfchen Hugo lebt in einer
          befreundeten Familie und ist ein echter Herzenshund. Intelligent,
          verspielt, freundlich und ebenfalls ein echter Ball-Junkie. Er liebt
          Action, zeigt aber auch eine verschmuste Seite und ist sehr gut
          führbar.
        </p>
      </div>
    </div>
  </section>
);

export default Parents;
