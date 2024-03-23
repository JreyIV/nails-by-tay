import Nav from "./components/Nav";
import { Hero, About, Services, Gallery, Contact, Footer } from "./sections";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Gallery />
      </section>
      <section className="padding">
        <Contact />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </main>
  );
}
