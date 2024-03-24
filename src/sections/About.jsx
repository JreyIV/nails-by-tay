import { motion } from "framer-motion";
import { about } from "../assets/images";

const About = () => {
  return (
    <section id="About" className="bg-brand-beige-dark">
      <div className="flex flex-col lg:flex-row">
        <div
          className="lg:w-1/2"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
        <div className="lg:w-1/2 p-5 xl:p-20 text-start">
          <h1 className="justify-start font-wedding text-4xl text-brand-lavender">
            About Me
          </h1>
          <p className="font-noto text-4xl">Welcome to Nails By Tay!</p>
          <p className="font-wix text-xl pt-10 leading-normal">
            If you are looking for a beautiful new set of nails for an
            affordable price, you&apos;ve come to the right place.
          </p>
          <p className="font-wix text-lg pt-10 text-slate-gray leading-normal">
            My name is Taylor, I&apos;m a student at DePaul University. I have
            always loved fashion and started doing simple nails around 10 years
            ago. I have been working with Gel X for about a year now which has
            caught the attention of friends and family who have asked me to do
            theirs as well. What started as a personal hobby soon became a
            passionate side hustle, fueled by the support of friends and family.
            I believe everyone deserves beautiful nails without breaking the
            bank. From classic French tips to intricate Gel X designs, each
            manicure reflects my dedication to quality and creativity.
          </p>
          <div className="pt-5">
            <motion.button
              className="border bg-brand-lavender font-noto text-white p-2"
              whileHover={{
                scale: 1.25,
                backgroundColor: "#F1E9FF",
                color: "#74665b",
              }}
            >
              Book Appointment
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
