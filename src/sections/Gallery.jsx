import Nails from "../components/Nails";
import { Set } from "../constants";

const Gallery = () => {
  return (
    <section className="bg-brand-beige">
      <div className="container mx-auto px-4 pb-20">
        <h1 className="text-brand-lavender font-wedding text-4xl text-center pt-20">
          Gallery
        </h1>
        <p className="font-noto text-lg p-5 pb-10 text-brand-brown text-center">
          Browse through my latest nail designs. Some prices shown for
          comparison.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
          {Set.map((nail) => (
            <Nails key={nail.src} src={nail.src} price={nail.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
