import { motion } from "framer-motion";
import { NavLinks } from "../constants";
import { instagram_clear, logoVect } from "../assets/icons";

const Footer = () => {
  return (
    <section className="bg-wrong-green flex flex-col items-center justify-center">
      <div className=" p-12 w-11/12 max: flex items-center relative border-b border-black">
        <div className="flex items-center">
          <img src={logoVect} alt="logo" className="h-24 absolute" />
          <h2 className="font-noto text-xl absolute left-32">Nails By Tay</h2>
        </div>
        <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
          {NavLinks.map((link) => (
            <motion.li key={link.label} whileHover={{ scale: 1.25 }}>
              <motion.a
                href={link.href}
                className="leading-normal text-lg font-noto "
                whileHover={{ color: "#F1E9FF" }}
              >
                <motion.div
                  className="text-brand-brown"
                  whileTap={{ scale: 0.5 }}
                >
                  {link.label}
                </motion.div>
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <a
          href="https://www.instagram.com/_nails.by.tay_/"
          target="_blank"
          className="absolute right-20 flex "
        >
          <motion.img
            src={instagram_clear}
            alt="instagram"
            width={25}
            height={25}
            style={{ filter: "invert(60%)" }}
            whileHover={{ scale: 1.2 }}
          />
        </a>
      </div>
      <div className="pt-5">
        <p className="font-wix">
          &copy; Nails By Tay 2024. All Rights Reserved
        </p>
        <p className="font-wix text-xs pt-5 pb-2">
          Need a website? jreyes1919@gmail.com
        </p>
      </div>
    </section>
  );
};

export default Footer;
