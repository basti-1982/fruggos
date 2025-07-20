import "../styles/puppies.scss";
import blau from "../assets/puppies/blau.jpg";
import dunkelgruen from "../assets/puppies/dunkelgruen.png";
import gelb from "../assets/puppies/gelb.png";
import grau from "../assets/puppies/grau.jpg";
import hellblau from "../assets/puppies/hellblau.jpg";
import hellgruen from "../assets/puppies/hellgruen.png";
import lila from "../assets/puppies/lila.png";
import orange from "../assets/puppies/orange.png";
import pink from "../assets/puppies/pink.png";
import rot from "../assets/puppies/rot.png";
import weiss from "../assets/puppies/weiß.png";

const puppies = [
  {
    name: "Hellgrün",
    gender: "Rüde",
    features: "weiße Spitzen an den Pfoten, weißes Kinn, weiße Brust ",
    reserved: "ja",
    image: hellgruen,
  },
  {
    name: "Blau",
    gender: "Rüde",
    features: "weiße Stirn, Hals & Bauch, weiße Beine, weiße Schwanzspitze",
    reserved: "ja",
    image: blau,
  },
  {
    name: "Pink",
    gender: "Hündin",
    features: "große weiße Brust, weiße Pfoten",
    reserved: "nein",
    image: pink,
  },
  {
    name: "Grau",
    gender: "Hündin",
    features: "weißes Kinn, weiße Pfoten Spitzen",
    reserved: "ja",
    image: grau,
  },
  {
    name: "Orange",
    gender: "Hündin",
    features: "weißer Fleck am Bauchnabel",
    reserved: "nein",
    image: orange,
  },
  {
    name: "Lila",
    gender: "Hündin",
    features: "weiße Stirn, Hals, Bauch, Beine, Schwanzspitze",
    reserved: "nein",
    image: lila,
  },
  {
    name: "Rot",
    gender: "Rüde",
    features: "braunes Fell mit weißem Bauch",
    reserved: "nein",
    image: rot,
  },
  {
    name: "Dunkelgrün",
    gender: "Hündin",
    features:
      "weißer Nacken & Bauch, weiße Zehen, feiner weißer Strich auf dem Kopf",
    reserved: "nein",
    image: dunkelgruen,
  },
  {
    name: "Hellblau",
    gender: "Rüde",
    features: "weiße Schnauze, Brust, Bauch und Nacken",
    reserved: "ja",
    image: hellblau,
  },
  {
    name: "Gelb",
    gender: "Hündin",
    features: "schwarzer Fleck auf dem Kopf",
    reserved: "ja",
    image: gelb,
  },
  {
    name: "Weiß",
    gender: "Hündin",
    features: "weiße Zehenspitzen & weißes Kinn",
    reserved: "ja",
    image: weiss,
  },
];

const Puppies = () => (
  <section className="puppies">
    <h2>Unsere 11 Welpen</h2>
    <div className="puppy-grid">
      {puppies.map((puppy, index) => (
        <div className="puppy-card" key={index}>
          <img src={puppy.image} alt={puppy.name} className="puppy-image" />  
          <h3>{puppy.name}</h3>
          <p>
            <strong>Geschlecht:</strong> {puppy.gender}
          </p>
          <p>
            <strong>Merkmale:</strong> {puppy.features}
          </p>
          <p>
            <strong>Reserviert:</strong>{" "}
            {puppy.reserved === "ja" ? "Ja" : "Nein"}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Puppies;
