import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NavLinks } from "../constants";
import { hamburger, instagram_clear } from "../assets/icons";

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
        {!isSmallScreen && (
          <a href="/" className="absolute top-5 left-20 flex">
            <h1>Nails By Tay</h1>
          </a>
        )}

        {!isSmallScreen && (
          <a
            href="https://www.instagram.com/_paintedbytay_/"
            target="_blank"
            className="absolute top-5 right-20 flex "
          >
            <motion.img
              src={instagram_clear}
              alt="instagram"
              width={25}
              height={25}
              className="lg:block"
              whileHover={{ scale: 1.2 }}
            />
          </a>
        )}

        <ul className="flex-1 flex justify-center items-center gap-20 max-lg:hidden">
          {NavLinks.map((link) => (
            <motion.li key={link.label} whileHover={{ scale: 1.25 }}>
              <motion.a
                href={link.href}
                className="leading-normal text-lg font-noto text-white"
                whileHover={{ color: "#F1E9FF" }}
              >
                <motion.div whileTap={{ scale: 0.5 }}>{link.label}</motion.div>
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
              <div className="relative flex h-full flex-col">
                <div className="absolute top-0 left-0">
                  <a href="/" className="flex items-center p-10">
                    <h1 className="font-noto text-lg text-off-white">
                      Nails By Tay
                    </h1>
                  </a>
                </div>
                <div className="absolute top-0 right-0">
                  <motion.p
                    className="cursor-pointer text-md text-off-white p-10"
                    whileHover={{ scale: 1.3, color: "#F1E9FF" }}
                    onClick={toggleMenu}
                  >
                    Close
                  </motion.p>
                </div>
                <div className="flex flex-col h-full bg-brand-lavender justify-center items-center gap-4">
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
                            whileHover={{ color: "#F1E9FF" }}
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
