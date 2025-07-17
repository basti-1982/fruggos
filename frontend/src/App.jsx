import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Puppies from "./components/Puppies";
import Contact from "./components/Contact";
import Parents from "./components/Parents";
import Welcome from "./components/Welcome";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Puppies />
      <Parents />
      <Contact />
      <ScrollToTop />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
    </Router>
  );
}

export default App;
