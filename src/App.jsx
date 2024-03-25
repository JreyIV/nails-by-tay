import Nav from "./components/Nav";
import { Hero, About, Services, Gallery, Contact, Footer } from "./sections";

export default function App() {
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
      <section className="overflow-hidden">
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
