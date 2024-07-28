import Nav from "./components/Nav";
import { Hero, About, Services, Gallery, Contact, Footer } from "./sections";
import ReactGA from "react-ga4";
import { useEffect } from "react";

// Google Analytics
ReactGA.initialize("G-QM9H35BB9J");

export default function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <main className="relative">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className="">
        <Services />
      </section>
      <section className="">
        <About />
      </section>
      <section className="">
        <Gallery />
      </section>
      <section className="">
        <Contact />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
