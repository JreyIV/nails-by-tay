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
