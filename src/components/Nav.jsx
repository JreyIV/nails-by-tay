import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NavLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setIsNavHidden(true);
    } else {
      setIsNavHidden(false);
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
      if (!isSmallScreen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  return (
    <header className="py-8 absolute z-50 w-full">
      <motion.nav
        className="fixed w-[100%] top-0 justify-between bg-brand-lavender items-center p-5 max-lg:bg-opacity-0 text-white"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        transition={{
          type: "easeInOut",
          duration: 0.35,
        }}
        animate={isSmallScreen ? "visible" : isNavHidden ? "hidden" : "visible"}
      >
        <a href="/" className="absolute top-5 left-20 flex">
          <h1>Nails By Tay</h1>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
          {NavLinks.map((link) => (
            <motion.li key={link.label} whileHover={{ scale: 1.25 }}>
              <motion.a
                href={link.href}
                className="leading-normal text-lg font-noto text-white"
                whileHover={{ color: "#F1E9FF" }}
              >
                {link.label}
              </motion.a>
            </motion.li>
          ))}
        </ul>
        <motion.div
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          className="hidden max-lg:block cursor-pointer fixed right-0 pr-5"
          onClick={toggleMenu}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-screen origin-top z-50"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <h1 className="text-okine text-lg text-off-white">Joseph.</h1>
                  <motion.p
                    className="cursor-pointer text-md text-off-white"
                    whileHover={{ scale: 1.3, color: "#B3A3D6" }}
                    onClick={toggleMenu}
                  >
                    Close
                  </motion.p>
                </div>
                <div className="flex flex-col h-full bg-brand-lavender-light justify-center items-center gap-4">
                  <ul>
                    {NavLinks.map((link) => (
                      <div key={link.label}>
                        <motion.li
                          key={link.label}
                          whileHover={{ scale: 1.25 }}
                        >
                          <motion.a
                            href={link.href}
                            className="font-okine text-6xl leading-normal text-off-white uppercase"
                            whileHover={{ color: "#B3A3D6" }}
                            onClick={closeMenu}
                          >
                            {link.label}
                          </motion.a>
                        </motion.li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Nav;
