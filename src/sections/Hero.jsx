import { motion } from "framer-motion";
import { nails3 } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center h-screen flex text-center items-center"
      style={{ backgroundImage: `url(${nails3})` }}
    >
      <div className="w-full bg-black bg-opacity-50 h-full items-center text-center justify-center flex flex-col">
        <h1 className="text-brand-lavender-light font-wedding text-6xl max-md:text-8xl">
          Nails By Tay
        </h1>
        <h1 className="text-6xl max-md:text-3xl md:text-4xl text-white font-noto mb-5 px-2">
          Transform Your Nails with Affordable Gel X
        </h1>
        <div>
          <p className="font-wix text-lg max-md:text-lg  text-white pb-5 px-2">
            Experience the long-lasting beauty of Gel X and Gel Polish manicures
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScijWYskuwZzK9evW0t6ehV9-v8P-RC4M33I01xPYObh8KoxA/viewform?usp=sf_link"
            target="_blank"
          >
            <motion.button
              className="border font-noto text-white p-2"
              whileHover={{ scale: 1.25, backgroundColor: "#B3A3D6" }}
            >
              Book Appointment
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
